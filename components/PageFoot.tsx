import wordmark from "@/assets/postech-wordmark-black.png";

/** 디자인의 .foot 공통 푸터 — 좌측 POSTECH 워드마크 + 우측 라벨 */
export default function PageFoot({ right }: { right: React.ReactNode }) {
  return (
    <div className="foot">
      <img src={wordmark.src} alt="POSTECH" />
      <span className="fr">{right}</span>
    </div>
  );
}
