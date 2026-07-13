#!/usr/bin/env bash
# 시각 검증 일괄 실행: 정적 빌드 산출물을 서빙해 카드 7장을 reference 와 pixelmatch 비교
# 사용: bash visual/check-all.sh [포트]   (기본 3105)
# 전제: pnpm build 로 out/ 이 생성돼 있고, 서버는 basePath /event 를 흉내내기 위해
#       심링크 디렉토리(serve/event → out)에서 http.server 를 띄운다.
set -u
cd "$(dirname "$0")/.."
PORT="${1:-3105}"

rm -rf visual/serve && mkdir -p visual/serve
ln -s ../../out visual/serve/event
(cd visual/serve && python3 -m http.server "$PORT" >/dev/null 2>&1) &
SRV=$!
trap 'kill $SRV 2>/dev/null' EXIT
sleep 1

declare -A SECTIONS=(
  [cover]="표지 · 개요"
  [guide-diagnostic]="선택 가이드 · 진단형"
  [guide-table]="선택 가이드 · 비교표형"
  [pg-wg]="① Working Group"
  [pg-edu]="② 고급교육 (AX Leaders)"
  [pg-comp]="③ 공모전 (AX 실증 사례 출품 챌린지)"
  [pg-apply]="신청 · 일정 · 문의"
)

FAIL=0
for name in cover guide-diagnostic guide-table pg-wg pg-edu pg-comp pg-apply; do
  label="${SECTIONS[$name]}"
  node /HotData/scripts/visual-diff.mjs \
    --name "$name" \
    --url "http://127.0.0.1:$PORT/event/" \
    --selector "[data-screen-label=\"$label\"]" \
    --ref-dir /HotData/github_hp/visual/ref \
    --out-dir /HotData/github_hp/visual/out \
    --threshold 0.2 --min 97 || FAIL=1
done

exit $FAIL
