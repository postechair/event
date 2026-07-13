#!/usr/bin/env node
/**
 * 전체 페이지 스모크: 1600px/390px full-page 캡처 + 진단형 인터랙션 검증
 * 전제: http://127.0.0.1:<port>/event/ 서빙 중 (기본 3105)
 */
import { chromium } from "playwright";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dir = dirname(fileURLToPath(import.meta.url));
const port = process.argv[2] || "3105";
const url = `http://127.0.0.1:${port}/event/`;
const out = resolve(__dir, "out");

const browser = await chromium.launch();

// 1) 데스크톱 1600 full-page
let page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: `${out}/fullpage-1600.png`, fullPage: true });
console.log("saved fullpage-1600.png");

// 2) 모바일 390 full-page
await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(300);
await page.screenshot({ path: `${out}/fullpage-390.png`, fullPage: true });
console.log("saved fullpage-390.png");
await page.close();

// 3) 진단형 인터랙션
page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
await page.goto(url, { waitUntil: "networkidle" });
const results = [];
const q1ans = page.locator("#guide .q").nth(0).locator("button.ans").first();
await q1ans.click();
results.push(["Q1 답변 클릭 → .sel", await q1ans.evaluate((el) => el.classList.contains("sel"))]);
const q1res = page.locator("#guide .q").nth(0).locator("a.res").first();
results.push(["Q1 결과 앵커 → .hot", await q1res.evaluate((el) => el.classList.contains("hot"))]);

// 같은 질문에서 다른 답 선택 시 단일 선택 유지
const q1ans2 = page.locator("#guide .q").nth(0).locator("button.ans").nth(1);
await q1ans2.click();
results.push(["Q1 재선택 → 이전 .sel 해제", !(await q1ans.evaluate((el) => el.classList.contains("sel")))]);

// res 앵커 클릭 → 해시 이동 + :target
await q1ans.click();
await q1res.click();
await page.waitForTimeout(600);
results.push(["res 클릭 → #pg-comp 해시", (await page.evaluate(() => location.hash)) === "#pg-comp"]);
results.push([
  "#pg-comp 뷰포트 진입",
  await page.locator("#pg-comp").evaluate((el) => {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  }),
]);

let fail = 0;
for (const [name, ok] of results) {
  console.log(`${ok ? "✅" : "❌"} ${name}`);
  if (!ok) fail = 1;
}
await browser.close();
process.exit(fail);
