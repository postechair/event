"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    goatcounter?: { count: (opts: { path: string }) => void };
  }
}

/** GoatCounter 방문 분석 (쿠키리스·개인식별 없음).
 *  next/script의 afterInteractive는 정적 export에서 data-goatcounter 커스텀 속성이
 *  브라우저에 확실히 실린다는 보장이 약해, count.js를 직접 DOM에 삽입한다.
 *  - 초기 로드: count.js가 data-goatcounter 엔드포인트로 현재 경로를 자동 카운트.
 *  - App Router는 SPA 라우팅이라 이후 페이지 이동은 usePathname 변화로 수동 카운트.
 *  실제 경로(location.pathname)로 보내므로 event 리포(basePath /event)는 /event/* 로
 *  기록돼 root(/)와 자연히 구분된다. */
export default function Analytics({ code }: { code: string }) {
  const pathname = usePathname();
  const first = useRef(true);
  const injected = useRef(false);

  // count.js 1회 로드 (data-goatcounter 속성을 직접 부여)
  useEffect(() => {
    if (injected.current) return;
    injected.current = true;
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://gc.zgo.at/count.js";
    s.setAttribute("data-goatcounter", `https://${code}.goatcounter.com/count`);
    document.body.appendChild(s);
  }, [code]);

  // 페이지 이동 시 수동 카운트 (초기 1회는 count.js가 자동 처리하므로 건너뜀)
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.goatcounter?.count({ path: location.pathname + location.search });
  }, [pathname]);

  return null;
}
