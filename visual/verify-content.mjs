#!/usr/bin/env node
/**
 * 콘텐츠 포함 검사 — 구 텍스트 ⊆ 신 산출물 (설계문서 검증 (b))
 *
 * 기준선: visual/baseline/index.html (리셸 착수 전 git HEAD 의 docs/index.html)
 * 비교 단위: 블록 leaf 요소별 텍스트 병합 + 공백 정규화한 청크.
 * 각 청크가 신 docs/index.html 의 정규화 전체 텍스트에 부분 문자열로 존재해야 함.
 *
 * 예외(승인된 삭제·치환):
 *  - WG "참여는 자율이며..." 문구 (오너 지시 영구 삭제)
 *  - PageFoot 우측 라벨 7건 (쪽번호 01~05 + 가이드 라벨 2건)
 *  - 표지 안내문 '다음 장/마지막 장' 치환 청크
 */
import { chromium } from "playwright";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dir = dirname(fileURLToPath(import.meta.url));

const EXCEPTIONS = [
  /^참여는 자율이며/,
  /인사팀 · AIR센터\s*\|\s*(0[1-5]|나에게 맞는 AI 행사 선택 가이드)/,
  /먼저 선택 가이드로 나에게 맞는 행사를 확인한 뒤/,
  /^2026 하반기 · 인사팀 · AIR센터$/, // 오너 지시 삭제 (2026-07-13)
];

const norm = (s) =>
  s.replace(/ /g, " ").replace(/\s+/g, " ").trim();

const browser = await chromium.launch();
const page = await browser.newPage();

// 1) 기준선 청크 추출 (블록 leaf 요소)
await page.goto("file://" + resolve(__dir, "baseline/index.html"), { waitUntil: "domcontentloaded" });
const chunks = await page.evaluate(() => {
  const BLOCK = new Set(["P","LI","TD","TH","DIV","H1","H2","H3","H4","H5","H6","SECTION","FOOTER","HEADER","A","BUTTON"]);
  const isBlockEl = (el) => BLOCK.has(el.tagName);
  const hasBlockChild = (el) => [...el.children].some((c) => isBlockEl(c) || hasBlockChild(c));
  const out = [];
  for (const el of document.body.querySelectorAll("*")) {
    if (!isBlockEl(el) || hasBlockChild(el)) continue;
    const t = el.textContent || "";
    out.push(t);
  }
  return out;
});

// 2) 신 산출물 전체 텍스트
await page.goto("file://" + resolve(__dir, "../docs/index.html"), { waitUntil: "domcontentloaded" });
const newText = norm(await page.evaluate(() => document.body.textContent || ""));
await browser.close();

// 3) 검사
const seen = new Set();
let checked = 0, excepted = 0;
const missing = [];
for (const raw of chunks) {
  const c = norm(raw);
  if (c.length < 6 || seen.has(c)) continue;
  seen.add(c);
  if (EXCEPTIONS.some((re) => re.test(c))) { excepted++; continue; }
  checked++;
  if (!newText.includes(c)) missing.push(c);
}

console.log(`청크 ${seen.size}건 중 검사 ${checked}건 · 예외 ${excepted}건`);
if (missing.length) {
  console.log(`❌ 누락 ${missing.length}건:`);
  for (const m of missing) console.log("  -", m.slice(0, 120));
  process.exit(1);
}
console.log("✅ 콘텐츠 포함 검사 통과");
