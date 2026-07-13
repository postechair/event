/** 모바일(≤640px) 하단 sticky CTA — 어느 위치에서든 1탭 내 도달 (설계문서 8항) */
export default function MobileCta() {
  return (
    <nav className="mcta" aria-label="빠른 이동">
      <a href="#guide">행사 찾기</a>
      <a className="pri" href="#pg-apply">신청하기</a>
    </nav>
  );
}
