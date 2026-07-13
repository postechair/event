import wordmark from "@/assets/postech-wordmark-black.png";

/** 페이지 최하단 통합 푸터 — PageFoot(A4 쪽번호) 대체 (설계문서 7항) */
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <img src={wordmark.src} alt="POSTECH" />
        <span>인사팀 · AIR센터 &nbsp;|&nbsp; postech-air@postech.ac.kr</span>
      </div>
    </footer>
  );
}
