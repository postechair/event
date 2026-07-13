#!/usr/bin/env node
/**
 * 디자인 원본(design/render/index.html)을 로컬 렌더링하여
 * .page 카드 7장을 reference PNG 로 추출한다 → visual/ref/<name>.png
 *
 * 사용: node visual/gen-refs.mjs
 * (playwright 는 visual/node_modules → /HotData/scripts/node_modules 심링크로 해석)
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dir = dirname(fileURLToPath(import.meta.url));

export const SECTIONS = [
  ["cover", "표지 · 개요"],
  ["guide-diagnostic", "선택 가이드 · 진단형"],
  ["guide-table", "선택 가이드 · 비교표형"],
  ["pg-wg", "① Working Group"],
  ["pg-edu", "② 고급교육 (AX Leaders)"],
  ["pg-comp", "③ 공모전 (AX 실증 사례 출품 챌린지)"],
  ["pg-apply", "신청 · 일정 · 문의"],
];

const refDir = resolve(__dir, "ref");
mkdirSync(refDir, { recursive: true });

const url = "file://" + resolve(__dir, "../design/render/index.html");
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1800, height: 1400 },
  deviceScaleFactor: 1,
});
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.evaluate(() => (document.fonts ? document.fonts.ready : 0));
await page.evaluate(() =>
  Promise.all(
    [...document.images].map((i) =>
      i.complete ? 0 : i.decode ? i.decode().catch(() => 0) : 0,
    ),
  ),
);
await page.waitForTimeout(300);

for (const [name, label] of SECTIONS) {
  const el = page.locator(`[data-screen-label="${label}"]`).first();
  await el.screenshot({ path: `${refDir}/${name}.png` });
  console.log("ref saved:", name);
}
await browser.close();
