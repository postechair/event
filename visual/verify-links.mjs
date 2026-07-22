#!/usr/bin/env node
/**
 * 링크 인벤토리 assert — docs/index.html 에 외부 폼 4종 + mailto 존재 검사
 * (설계문서 검증 (a), 실행 시점: deploy:docs 이후 · push 이전)
 */
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dir = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(resolve(__dir, "../docs/index.html"), "utf8");

const REQUIRED = [
  ["공모전 참가신청서", "forms.cloud.microsoft/r/ma8zZBZQGd"],
  ["AX 경험 설명서", "forms.cloud.microsoft/r/ge3tZCAkLd"],
  ["컨설팅 신청서", "forms.cloud.microsoft/r/VSRvGb0Asb"],
  ["사전수요조사", "forms.cloud.microsoft/r/hfkNYYATZj"],
  ["WG 이메일(mailto)", "mailto:postech-air@postech.ac.kr"],
  ["POSTECH AIR 홈 링크", 'href="https://postechair.github.io/"'],
  ["공모전 마감 연장 공지 배너", "로 연장되었습니다"],
];

let fail = 0;
for (const [name, needle] of REQUIRED) {
  const count = html.split(needle).length - 1;
  console.log(`${count > 0 ? "✅" : "❌"} ${name}: ${count}회`);
  if (count === 0) fail = 1;
}

/* 개별 행사 페이지 — 존재 + 핵심 링크 + 전체 EVENT 복귀 버튼 */
const SUBPAGES = [
  ["2026-01 (WG)", "../docs/2026-01/index.html", ["mailto:postech-air@postech.ac.kr", 'href="/event/"']],
  ["2026-02 (부트캠프)", "../docs/2026-02/index.html", ["forms.cloud.microsoft/r/hfkNYYATZj", 'href="/event/"']],
  ["2026-03 (공모전)", "../docs/2026-03/index.html", ["forms.cloud.microsoft/r/ma8zZBZQGd", "forms.cloud.microsoft/r/ge3tZCAkLd", "forms.cloud.microsoft/r/VSRvGb0Asb", 'href="/event/"']],
  ["WG 사례집 2026/first", "../docs/working-group/2026/first/index.html", ["WG 참여자 산출물 사례집", "부서 통합 업무 자동화 플랫폼", "100% 참여자 자체 개발", "상세 정보 확인을 원하시면", "여러분의 손으로 만들어집니다", 'href="/event/"']],
];

/* WG 섹션 → 사례집 진입 링크 (메인 페이지, 반기 URL) */
{
  const has = html.includes('href="/event/working-group/2026/first/"') || html.includes('href="/event/working-group/2026/first"');
  console.log(`${has ? "✅" : "❌"} WG 사례집 진입 링크(2026/first)`);
  if (!has) fail = 1;
}
for (const [name, path, needles] of SUBPAGES) {
  let h;
  try {
    h = readFileSync(resolve(__dir, path), "utf8");
  } catch {
    console.log(`❌ ${name}: 파일 없음`);
    fail = 1;
    continue;
  }
  const missing = needles.filter((n) => !h.includes(n));
  console.log(`${missing.length === 0 ? "✅" : "❌"} ${name}${missing.length ? `: 누락 ${missing.join(", ")}` : ""}`);
  if (missing.length) fail = 1;
}
process.exit(fail);
