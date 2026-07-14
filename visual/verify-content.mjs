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
  /^순서대로 따라오세요/, // 오너 지시 삭제 (2026-07-13)
  /^투입 시간·숙련도·목표를 기준으로/, // 오너 지시 삭제 (2026-07-13)
  /^한 표로 비교하는3개의 AI 행사$/, // <br> 제거·한 줄화 (공백 삽입)
  /^세 가지 질문으로 찾는나의 AI 행사$/, // <br> 제거·한 줄화 (공백 삽입)
  /^나에게 맞는AI 행사 찾기$/, // <br> 제거·한 줄화 (공백 삽입)
  /^나에게 맞는 행사를 정했다면/, // 오너 지시 삭제 (2026-07-13)
  /^문의 AIR센터 postech-air@postech\.ac\.kr \(3개 행사 공통\)$/, // 신청 섹션 note-strip 삭제 (히어로 공통 안내로 대체)
  /^하반기\(7월 이후\) AIR센터가 준비한/, // 리드문 개정("2026년 하반기...안내드립니다"로 교체, 2026-07-13)
  /^AI 행사 선택 가이드$/, // 히어로 제목 "2026 AIR EVENT"로 교체 (2026-07-13)
  /^\[사전수요조사\]$/, // "Link : [사전수요조사]" → cardlinks UI로 교체 (2026-07-13)
  /^1참가신청서 작성 필수forms\.cloud\.microsoft/, // "(AI 라이선스 신청 포함)" 라벨 추가로 문자열 변경 (2026-07-13)
  /^지속형 · 실무 공동 구현Working Group전 직원 · 하반기 소규모 운영$/, // 밴드 우측 첨가 문구 삭제 (2026-07-13)
  /^집중 교육 · 인증형고급교육 · AX Leaders행정직원 · 차수당 8명 이내$/, // 밴드 우측 첨가 문구 삭제 (2026-07-13)
  /^공모\(출품\)형공모전 · AX 실증 사례 출품 챌린지전 직원 대상$/, // 밴드 우측 첨가 문구 삭제 (2026-07-13)
  /^집합 교육 \+ 현장 적용일회성 소양 교육이 아닌 과제 완주형 육성$/, // 스펙 4칸 통일로 '구조' 카드 삭제 (2026-07-13)
  /^지원 자격 · 형태$/, // 라벨 '대상 · 규모'로 통일 (2026-07-13)
  /수료·인증이라는 분명한 목표를 원하는 행정직원/, // "수료·인증·현장 적용"으로 개정 (2026-07-13)
  /^AX 경험 설명서 — AI를 활용해 업무상/, // ③ 제출 자료 박스 삭제 (2026-07-13)
  /^AX 산출물 — 해당 과정에서 생성된 산출물/, // ③ 제출 자료 박스 삭제 (2026-07-13)
  /^고급교육 · AX Leaders$/, // ② 밴드 타이틀 "고급교육"으로 축약 (2026-07-13)
  /^공모전 · AX 실증 사례 출품 챌린지$/, // ③ 밴드 타이틀 "공모전"으로 축약 (2026-07-13)
  /출품하는 챌린지입니다\. 시상이 있습니다\.$/, // "시상이 있습니다." 문장 삭제 (2026-07-13)
  /고급교육은 사전 수요조사 후 차수 편성/, // 용어 개정 + 조사 교정("은"→"는")으로 문자열 변경 (2026-07-13)
  /^①Working Group\(’26 하반기\)$/, // 비교표 헤더 "(’26 하반기)" 삭제 (2026-07-13)
  // ↓ 세밀 수정 라운드 (2026-07-13 저녁, 오너 지시 15건)
  /^제대로 배워 인증받고 현업으로도 연계하고 싶은 분$/, // 비교표 추천대상 문구 개정
  /^주 1회·1시간\+ 참여AIR센터 정기 미팅/, // ① 핵심 원칙 문구 개정
  /^7\.15 ~ 10\.142026\. 07\. 15\(수\) ~ 10\. 14\(수\)$/, // ③ 활동 기간 상세 날짜 삭제
  /^신청 시 지원$/, // ③ "활동 지원 (단, 신청 및 심사과정 있음)"으로 개정
  /^라이선스 지원 · ~7\.29\(수\)$/, // ③ 지원 카드 헤더 개정
  /^AIR센터 지원 · ~8\.26\(수\)$/, // ③ 지원 카드 헤더 개정
  /^서면 평가 \(100점\)$/, // "평가 배점"으로 개정
  /^시상 · 보상 인사팀 협조 · 최대 20명$/, // "시상"으로 축약
  /^AX 산출물필수$/, // 제출 서류에서 AX 산출물 삭제
  /^AI 라이선스 신청서선택$/, // "(참가신청 시 제출)" 추가로 문자열 변경
  /^2AX 경험 설명서 \(서면평가 양식\) 필수/, // 링크 라벨 "(서면평가 양식)" 삭제
  /^하반기 주요 일정$/, // "일정"으로 축약
  /^이미 AI로 만든 산출물이 있나요\?/, // Q1 문구 개정 (2026-07-13)
  /^자유 출품 챌린지AX 사례·산출물 제출$/, // 비교표 "또는"으로 개정 (2026-07-13)
  /^이미 AI로 만든 결과물이 있거나/, // ③ 추천 문구 개정 (2026-07-13)
  /^네, 보여줄 결과물이 있어요$/, // Q1 답변 축약 (2026-07-13)
  /^이미 AX 결과물이 있거나/, // 범례 ③ 문구 개정 (2026-07-13)
  /^참여 대상 전 직원 \(일부 과정은 행정직원 중심\)문의 AIR센터/, // 괄호 부연 삭제 — note-strip 통청크 (2026-07-13)
  // ↓ code-review 콘텐츠 모순 해소 (오너 결정 7건, 2026-07-13 밤)
  /^형태소규모 그룹\(~10명\)$/, // "10명 내외"로 통일
  /^개인 또는 업무단위 그룹\(4명 이하\)/, // "(총 10명 내외)"로 정정
  /^Claude Pro 라이센스\+/, // "AI 라이선스(Claude Pro)"로 용어·표기 통일
  /^공모전 · 라이선스 신청 마감$/, // "참가신청서(AI 라이선스 신청 포함) 마감"으로 정정
  /라이선스·컨설팅 지원이 필요하면 해당 신청서도 함께 제출합니다/, // 문장 삭제 (라이선스는 참가신청서에 포함)
  /^공모전 신청 링크$/, // "공모전 참여 링크"로 개명
  // ↓ "인증" 표현 전면 삭제 (오너 지시, 2026-07-13 밤)
  /^집중 교육 · 인증형$/,
  /^보상수료·AX Leader 인증$/,
  /^수료 \+ AX Leader 인증$/,
  /^체계적으로 배우고 수료·인증 획득$/,
  /^체계적으로 몰입하며 과제를 완수하고 수료·인증/,
  /^수료 & 인증$/,
  /^AX Leader 인증 — 현장 적용까지/,
  /^수상\(태블릿·해외벤치마킹·포상휴가·상품권 등\)$/, // "평가 후 성적에 따라 시상"으로 교체 (2026-07-13)
  /^꾸준히 시간을 내어 내 업무를 AI로 실제 바꾸고 싶은 분, 혼자보다/, // ① fit 불릿 2줄 분리 (2026-07-13)
  /^교육 수료 — 전 일정\(3일\) 이수/, // "교육 수료 —" 접두 제거 + 현업 연계 항목 추가 (2026-07-13)
  /^3컨설팅 신청서 작성 선택forms/, // 참여 링크 마감일 명시 (2026-07-14)
  /^공모전 · 컨설팅 신청 마감$/, // "컨설팅 신청 마감"으로 (2026-07-14)
  /^공모전 접수 마감$/, // "AX 경험 설명서 작성 마감"으로 (2026-07-14)
  /^우수 사례 성과 공유회/, // 연말 행 삭제 (2026-07-14)
  /^행사 안내 [①②③]$/, // 원문자 → 넘버 배지(.evnum)로 교체 (2026-07-14)
];

const norm = (s) =>
  s.replace(/ /g, " ").replace(/\s+/g, " ").trim();

/* 승인된 용어 개정 — 기준선 청크에 적용한 형태도 포함으로 인정 (2026-07-13) */
const TERM_MAP = [
  ["고급교육", "AX 부트캠프(고급교육)"], // 2026-07-14 띄어쓰기 통일
  ["공모전", "AX 공모전"], // 2026-07-14 용어 개정
];
const applyTerms = (s) => {
  let out = s;
  for (const [from, to] of TERM_MAP) out = out.split(from).join(to);
  return out;
};

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
  if (!newText.includes(c) && !newText.includes(applyTerms(c))) missing.push(c);
}

// 4) 핵심 문구 존재 단언 — EXCEPTIONS 사각지대 보완 (삭제 승인과 무관하게
//    현재 페이지에 반드시 있어야 하는 문구; 회귀 시 즉시 검출)
const MUST_EXIST = [
  "2026 AIR EVENT",
  "Working Group",
  "AX 부트캠프(고급교육)",
  "공모전",
  "참여 대상",
  "postech-air@postech.ac.kr",
  "신청 방법",
  "세 가지 질문으로 찾는 나의 AI 행사",
  "한 표로 비교하는 3개의 AI 행사",
];
const absent = MUST_EXIST.filter((m) => !newText.includes(norm(m)));
if (absent.length) {
  console.log(`❌ 핵심 문구 누락 ${absent.length}건:`);
  for (const a of absent) console.log("  -", a);
  process.exit(1);
}

console.log(`청크 ${seen.size}건 중 검사 ${checked}건 · 예외 ${excepted}건 · 핵심 문구 ${MUST_EXIST.length}건 존재`);
if (missing.length) {
  console.log(`❌ 누락 ${missing.length}건:`);
  for (const m of missing) console.log("  -", m.slice(0, 120));
  process.exit(1);
}
console.log("✅ 콘텐츠 포함 검사 통과");
