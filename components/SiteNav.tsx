import wordmark from "@/assets/postech-wordmark-black.png";

/** sticky 상단 네비 — 앵커 3개 + 상시 신청 CTA (설계문서 1항) */
export default function SiteNav() {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top" aria-label="맨 위로">
          <img src={wordmark.src} alt="POSTECH" />
        </a>
        <nav className="nav-links" aria-label="섹션 이동">
          <a href="#guide">행사 찾기</a>
          <a href="#compare">한눈 비교</a>
          <a href="#pg-wg">행사 안내</a>
        </nav>
        <a className="nav-cta" href="#pg-apply">신청·일정</a>
      </div>
    </header>
  );
}
