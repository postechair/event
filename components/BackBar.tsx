import Link from "next/link";

/** 개별 행사 페이지 최상단 — 전체 EVENT 페이지 복귀 버튼 (sticky) */
export default function BackBar() {
  return (
    <div className="backbar">
      <div className="wrap">
        <Link className="backbtn" href="/">AIR 센터 전체 EVENT 바로 가기 →</Link>
      </div>
    </div>
  );
}
