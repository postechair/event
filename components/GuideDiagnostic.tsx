"use client";

import { useState } from "react";

export default function GuideDiagnostic() {
  const [sel, setSel] = useState<(number | null)[]>([null, null, null]);

  const pick = (q: number, a: number, next?: boolean) => {
    setSel((prev) => {
      const copy = [...prev];
      copy[q] = a;
      // 경로 일관성: Q1 "네"(즉시 ③)는 Q2·Q3 선택을 지우고,
      // Q2·Q3 선택은 Q1을 "아직 없어요" 경로로 정렬 — 추천이 상충 표시되지 않도록
      if (q === 0 && a === 0) {
        copy[1] = null;
        copy[2] = null;
      } else if (q > 0 && copy[0] === 0) {
        copy[0] = 1;
      }
      return copy;
    });
    if (next) {
      document
        .getElementById(`diag-q${q + 2}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const ansCls = (q: number, a: number) =>
    sel[q] === a ? "ans sel" : "ans";
  const resCls = (q: number, a: number) =>
    sel[q] === a ? "res hot" : "res";

  return (
    <section className="sec" id="guide" data-screen-label="선택 가이드 · 진단형">
      <div className="wrap">
      <div className="eyebrow">나에게 맞는 행사 찾기</div>
      <h2 className="ptitle">세 가지 질문으로 찾는 나의 AI 행사</h2>
      <div className="flow">
        <div className="q" id="diag-q1">
          <div className="qnode"><div className="qnum">Q1</div><div className="qtext">이미 <span style={{ color: "var(--primary)" }}>AI를 활용하여 업무 효율을 높이거나 업무를 자동화하는 등 AX 경험(또는 산출물)</span>이 있나요?<span className="note">코드·앱·업무 자동화·문서 등</span></div></div>
          <div className="branches">
            <div className="branch"><button type="button" className={ansCls(0, 0)} aria-pressed={sel[0] === 0} onClick={() => pick(0, 0)}>네, 있어요</button><span className="arrow">→</span><a className={resCls(0, 0)} aria-current={sel[0] === 0 ? "true" : undefined} href="#pg-comp">③ 공모전으로 바로 출품</a></div>
            <div className="branch"><button type="button" className={ansCls(0, 1)} aria-pressed={sel[0] === 1} onClick={() => pick(0, 1, true)}>아직 없어요 · 배우는 중이에요</button><span className="arrow">↓</span><span className="res next">다음 질문으로</span></div>
          </div>
        </div>
        <div className="q" id="diag-q2">
          <div className="qnode"><div className="qnum">Q2</div><div className="qtext">얼마나 <span style={{ color: "var(--primary)" }}>시간</span>을 낼 수 있나요?</div></div>
          <div className="branches">
            <div className="branch"><button type="button" className={ansCls(1, 0)} aria-pressed={sel[1] === 0} onClick={() => pick(1, 0)}>매주 꾸준히 · 연말까지 함께</button><span className="arrow">→</span><a className={resCls(1, 0)} aria-current={sel[1] === 0 ? "true" : undefined} href="#pg-wg">① Working Group</a></div>
            <div className="branch"><button type="button" className={ansCls(1, 1)} aria-pressed={sel[1] === 1} onClick={() => pick(1, 1)}>3일 집중 교육이면 가능해요</button><span className="arrow">→</span><a className={resCls(1, 1)} aria-current={sel[1] === 1 ? "true" : undefined} href="#pg-edu">② AX부트캠프(고급교육)</a></div>
            <div className="branch"><button type="button" className={ansCls(1, 2)} aria-pressed={sel[1] === 2} onClick={() => pick(1, 2)}>지금은 부담 · 내 페이스로</button><span className="arrow">→</span><a className={resCls(1, 2)} aria-current={sel[1] === 2 ? "true" : undefined} href="#pg-comp">③ 공모전</a></div>
          </div>
        </div>
        <div className="q" id="diag-q3">
          <div className="qnode"><div className="qnum">Q3</div><div className="qtext">가장 중요한 <span style={{ color: "var(--primary)" }}>목표</span>는 무엇인가요?</div></div>
          <div className="branches">
            <div className="branch"><button type="button" className={ansCls(2, 0)} aria-pressed={sel[2] === 0} onClick={() => pick(2, 0)}>내 업무를 실제로 바꾸고 계속 성장</button><span className="arrow">→</span><a className={resCls(2, 0)} aria-current={sel[2] === 0 ? "true" : undefined} href="#pg-wg">① Working Group</a></div>
            <div className="branch"><button type="button" className={ansCls(2, 1)} aria-pressed={sel[2] === 1} onClick={() => pick(2, 1)}>체계적으로 배우고 수료·인증 획득</button><span className="arrow">→</span><a className={resCls(2, 1)} aria-current={sel[2] === 1 ? "true" : undefined} href="#pg-edu">② AX부트캠프(고급교육)</a></div>
            <div className="branch"><button type="button" className={ansCls(2, 2)} aria-pressed={sel[2] === 2} onClick={() => pick(2, 2)}>성과를 인정받고 수상까지</button><span className="arrow">→</span><a className={resCls(2, 2)} aria-current={sel[2] === 2 ? "true" : undefined} href="#pg-comp">③ 공모전</a></div>
          </div>
        </div>
      </div>
      <div className="legend">
        <div className="lg"><div className="lgh"><span className="lgn">1</span>Working Group</div><div className="lgd">꾸준히 시간을 내어 내 업무를 AI로 실제 바꾸고 싶은 분</div></div>
        <div className="lg"><div className="lgh"><span className="lgn">2</span>AX부트캠프(고급교육)</div><div className="lgd">체계적으로 몰입하며 과제를 완수하고 수료·인증을 원하는 분</div></div>
        <div className="lg"><div className="lgh"><span className="lgn">3</span>공모전</div><div className="lgd">이미 AI를 활용하여 업무 효율을 높이거나 업무를 자동화하는 등 AX 경험이 있거나 자유롭게 도전하고 그 성과를 인정받고 싶은 분</div></div>
      </div>
      </div>
    </section>
  );
}
