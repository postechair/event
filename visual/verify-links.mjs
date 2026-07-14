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
];

let fail = 0;
for (const [name, needle] of REQUIRED) {
  const count = html.split(needle).length - 1;
  console.log(`${count > 0 ? "✅" : "❌"} ${name}: ${count}회`);
  if (count === 0) fail = 1;
}
process.exit(fail);
