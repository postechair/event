"use client";
import { useState, useEffect } from "react";
import tshirt from "@/assets/TshirtsAIR01.png";

/** 히어로 4번째 타일 — 티셔츠 디자인. 클릭 시 모달로 확대. */
export default function TshirtCard() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button className="tile tile-img" onClick={() => setOpen(true)} aria-label="AIR센터 오시는 길 — 티셔츠 디자인 크게 보기">
        <span className="tile-img-label">AIR센터 오시는 길</span>
        <img src={tshirt.src} alt="POSTECH AIR 티셔츠 디자인" />
        <span className="tile-img-zoom" aria-hidden="true">⛶ 크게 보기</span>
      </button>
      {open && (
        <div className="img-modal" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label="티셔츠 디자인 확대">
          <img src={tshirt.src} alt="POSTECH AIR 티셔츠 디자인" onClick={(e) => e.stopPropagation()} />
          <button className="img-modal-close" onClick={() => setOpen(false)} aria-label="닫기">×</button>
        </div>
      )}
    </>
  );
}
