"use client";
import { useEffect, useState } from "react";

/** 상단 공지 배너 — 닫기 가능, 공지 버전 단위로 localStorage 기억.
 *  KEY 를 바꾸면 새 공지로 인식되어 모든 방문자에게 다시 표시됩니다. */
const KEY = "air-event-notice-2026-competition-deadline";

export default function NoticeBar() {
  // 초기값 true → 정적 HTML·JS 미로딩 환경에서도 노출. 닫은 방문자는 마운트 직후 숨김.
  const [show, setShow] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) === "dismissed") setShow(false);
    } catch {
      /* localStorage 불가 시 계속 표시 */
    }
  }, []);

  if (!show) return null;

  return (
    <div className="noticebar" role="status">
      <div className="notice-inner">
        <span className="notice-badge">공지</span>
        <p className="notice-text">
          <b>AX 공모전</b> 참가신청서(AI 라이선스 신청 포함) 마감이 <s>7.29(수)</s> <b>8.26(수)</b>로 연장되었습니다.{" "}
          <a href="#pg-comp">자세히 보기 →</a>
        </p>
        <button
          className="notice-close"
          aria-label="공지 닫기"
          onClick={() => {
            setShow(false);
            try {
              localStorage.setItem(KEY, "dismissed");
            } catch {
              /* localStorage 불가 시 세션 내 닫기만 */
            }
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
