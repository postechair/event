#!/usr/bin/env node
/**
 * 리셸 스모크: 반응형 오버플로 + 진단 인터랙션 + 앵커 점프(네비 가림 검사) + 캡처
 * 전제: http://127.0.0.1:<port>/event/ 서빙 중 (기본 3105)
 */
import { chromium } from "playwright";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dir = dirname(fileURLToPath(import.meta.url));
const port = process.argv[2] || "3105";
const url = `http://127.0.0.1:${port}/event/`;
const out = resolve(__dir, "out");
const results = [];
const browser = await chromium.launch();

// 1) 반응형: 문서 레벨 가로 오버플로 0 (390/768/1600)
for (const w of [390, 768, 1600]) {
  const p = await browser.newPage({ viewport: { width: w, height: 900 } });
  await p.goto(url, { waitUntil: "networkidle" });
  const sw = await p.evaluate(() => document.documentElement.scrollWidth);
  results.push([`${w}px 가로 오버플로 없음 (scrollWidth ${sw})`, sw <= w]);
  await p.close();
}

// 2) 데스크톱: 캡처 + 첫 화면 타일 + 앵커 점프 가림 검사 + 진단 인터랙션
const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: `${out}/fullpage-1600.png`, fullPage: true });

// 공지 배너: 표시 + 닫기 동작 + 닫힘 기억(재로드)
{
  const barVisible = await page.locator(".noticebar").isVisible();
  const hasDeadline = (await page.locator(".notice-text").textContent())?.includes("8.26(수)");
  await page.locator(".notice-close").click();
  await page.waitForTimeout(100);
  const goneAfterClose = (await page.locator(".noticebar").count()) === 0;
  await page.reload({ waitUntil: "networkidle" });
  const staysGone = (await page.locator(".noticebar").count()) === 0;
  results.push(["공지 배너 표시 + 8.26 문구", barVisible && !!hasDeadline]);
  results.push(["공지 배너 닫기 + 재로드 후 유지", goneAfterClose && staysGone]);
}

// SC1 데스크톱: 스크롤 없이 행사별 신청 경로 3종 (mailto + 수요조사 + 공모전 2링크)
const firstScreen = await page.evaluate(() => {
  const vis = (el) => { const r = el.getBoundingClientRect(); return r.top >= 0 && r.bottom <= window.innerHeight; };
  const q = (sel) => { const el = document.querySelector(sel); return el ? vis(el) : false; };
  return {
    wg: q('.tiles a[href^="mailto:"]'),
    edu: q('.tiles a[href*="hfkNYYATZj"]'),
    comp1: q('.tiles a[href*="ma8zZBZQGd"]'),
    comp2: q('.tiles a[href*="ge3tZCAkLd"]'),
  };
});
results.push(["첫 화면(1600×900) 내 신청 경로 4링크 전부 노출", Object.values(firstScreen).every(Boolean)]);

// 앵커 점프 — 네비(60px)에 가리지 않는지
for (const [label, href] of [["행사 찾기", "#guide"], ["한눈 비교", "#compare"], ["행사 안내", "#pg-wg"], ["신청·일정", "#pg-apply"]]) {
  await page.click(`.site-nav a[href="${href}"]`);
  await page.waitForTimeout(150);
  const top = await page.evaluate((h) => document.querySelector(h).getBoundingClientRect().top, href);
  // 마지막 섹션은 페이지 끝에 닿아 76px 위치까지 못 올라올 수 있음 — 가림 없음(≥55)과 가시성(<700)만 검사
  results.push([`앵커 ${label} → ${href} 상단 ${Math.round(top)}px (네비 가림 없음)`, top >= 55 && top < 700]);
}

// 진단 인터랙션
await page.evaluate(() => location.hash = "");
const q1ans = page.locator("#guide .q").nth(0).locator("button.ans").first();
await q1ans.click();
results.push(["진단 Q1 클릭 → .sel", await q1ans.evaluate((el) => el.classList.contains("sel"))]);
const q1res = page.locator("#guide .q").nth(0).locator("a.res").first();
results.push(["진단 Q1 결과 앵커 → .hot", await q1res.evaluate((el) => el.classList.contains("hot"))]);
await q1res.click();
await page.waitForTimeout(500);
results.push(["res 클릭 → #pg-comp 해시", (await page.evaluate(() => location.hash)) === "#pg-comp"]);
await page.close();

// 3) 모바일: 캡처 + 하단 CTA + 타일 첫 화면 노출 시작
const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
await m.goto(url, { waitUntil: "networkidle" });
await m.evaluate(() => document.fonts.ready);
await m.screenshot({ path: `${out}/fullpage-390.png`, fullPage: true });
const mchecks = await m.evaluate(() => {
  const cta = document.querySelector(".mcta");
  const ctaVisible = cta && getComputedStyle(cta).display !== "none" && cta.getBoundingClientRect().bottom <= window.innerHeight + 1;
  const tile = document.querySelector(".tiles .tile");
  const tileStarts = tile && tile.getBoundingClientRect().top < window.innerHeight;
  return { ctaVisible, tileStarts };
});
results.push(["모바일 하단 sticky CTA 표시", !!mchecks.ctaVisible]);
results.push(["모바일 첫 화면에 바로가기 타일 노출 시작", !!mchecks.tileStarts]);
await m.close();

// 4) 개별 행사 페이지: 복귀 버튼 + 반응형
for (const slug of ["2026-01", "2026-02", "2026-03", "working-group/2026/first"]) {
  const sp = await browser.newPage({ viewport: { width: 390, height: 900 } });
  await sp.goto(`http://127.0.0.1:${port}/event/${slug}/`, { waitUntil: "networkidle" });
  const back = await sp.locator("a.backbtn").getAttribute("href");
  const sw = await sp.evaluate(() => document.documentElement.scrollWidth);
  results.push([`/${slug} 복귀 버튼(href=${back}) · 390px 오버플로 없음(${sw})`, back === "/event/" && sw <= 390]);
  await sp.close();
}
await browser.close();

let fail = 0;
for (const [name, ok] of results) { console.log(`${ok ? "✅" : "❌"} ${name}`); if (!ok) fail = 1; }
process.exit(fail);
