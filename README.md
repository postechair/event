# POSTECH AIR센터 — AI 행사 선택 가이드

2026 하반기 POSTECH AI 행사(① Working Group · ② 고급교육 AX Leaders · ③ 공모전) 안내
페이지. GitHub Pages 로 공개 배포한다.

- 배포 주소: https://postechair.github.io/event/
- 디자인 SSoT: claude.ai/design 프로젝트 "AIR센터 행사 선택 가이드"
  (`design/source.dc.html` 에 보관, POSTECH AIR DS v1.0 토큰 기반)

## 스택

- Next.js 15 (App Router, `output: "export"` 정적 export) + React 19 + TypeScript
- 디자인 토큰: `styles/` (fig-tokens / colors_and_type — POSTECH Red `#A61955` 계열,
  Pretendard Variable 셀프호스팅)
- 페이지 스타일: `app/globals.css` — 디자인 `<style>` 블록을 그대로 이식,
  웹 적응(반응형·인터랙션)만 추가

## 개발

```bash
pnpm install
pnpm dev          # http://localhost:3100/event/
```

## 빌드 · 배포

### 최초 1회 (repo 연결 — GitHub 에서 postechair/event 생성 후)

```bash
git remote add origin https://github.com/postechair/event.git
git push -u origin main
```

첫 push 후 GitHub repo `postechair/event` 의 **Settings → Pages →
Deploy from a branch → `main` / `/docs`** 로 설정한다.
`.nojekyll` 이 있어야 `_next/` 경로가 서빙된다.

### 이후 배포

```bash
pnpm deploy:docs  # next build → out/ → docs/ 동기화 (+ .nojekyll)
git add -A && git commit
git push          # → GitHub Pages 가 main /docs 를 서빙
```

루트 사이트(`postechair.github.io` 자체)로 옮길 때는 `BASE_PATH="" pnpm build`.

## 검증

2026-07-13 웹 네이티브 리셸 이후 A4 pixelmatch 는 폐기하고 3종 검사로 대체했다.
기준선은 `visual/baseline/index.html` (리셸 직전 빌드).

```bash
pnpm deploy:docs                # 빌드 + docs/ 동기화
node visual/verify-links.mjs    # 외부 폼 4종 + mailto 존재 assert
node visual/verify-content.mjs  # 구 텍스트 ⊆ 신 산출물 (승인된 예외 제외)
# docs/ 서빙 후: 반응형 오버플로·앵커 가림·진단 인터랙션·모바일 CTA
mkdir -p visual/serve && ln -s ../../docs visual/serve/event
(cd visual/serve && python3 -m http.server 3105 &) && node visual/smoke.mjs 3105
```

## 구조

```
app/            layout / page / globals.css(DS 토큰 + 웹 네이티브 레이아웃) / icon.png
components/     SiteNav(sticky 네비), Hero(히어로+빠른 바로가기 타일),
                GuideDiagnostic(클릭 인터랙티브), GuideTable,
                EventWorkingGroup, EventEducation, EventCompetition,
                ApplySection, SiteFooter, MobileCta
styles/         POSTECH AIR DS v1.0 토큰 CSS + Pretendard 폰트
assets/         POSTECH 로고 (공식 원본)
design/         디자인 SSoT 보관본 (A4 원본 — 콘텐츠의 출처)
visual/         검증 스크립트(verify-links/verify-content/smoke) + baseline
docs/           배포 산출물 (GitHub Pages 가 서빙 — 직접 수정 금지)
```
