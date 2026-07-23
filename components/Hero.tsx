import Link from "next/link";

/** 히어로 풀폭 밴드 + 이벤트별 통합 카드(빠른 바로가기 + 행사 요약 + 공통 안내)
 *  문구는 원문 그대로 — 요약 카드(구 mini3)와 공통 안내(note-strip)를 타일에 통합 */
export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">2026 AIR EVENT</h1>
        <p className="hero-lede">2026년 하반기 AIR센터가 준비한 세 가지 AI 행사를 안내드립니다. 모두 전 직원이 참여 대상이며, 부담·목표·숙련도에 따라 내 상황에 맞는 event를 선택하시기 바랍니다.</p>

        <nav className="tiles" aria-label="빠른 바로가기">
          <div className="tile tile-wg">
            <Link className="tile-sticker" href="/working-group/2026/first"><span className="star">★</span> 2026 상반기<br />참여자 산출물 사례집</Link>
            <span className="tile-pill">Event 1</span>
            <a className="tile-t" href="#pg-wg">① Working Group</a>
            <span className="minitag">지속형 · 실무 공동 구현</span>
            <span className="minid">소규모로 매주 모여, 내 업무의 실제 문제를 AI로 함께 해결하고 업무에 적용합니다.</span>
            <div className="minimeta"><div><b>형태</b>소규모 그룹(10명 내외)</div><div><b>시간</b>주 1회·1시간+</div><div><b>지원</b>Claude Pro·멘토링</div></div>
            <span className="tile-d">참여문의 : <a href="mailto:postech-air@postech.ac.kr">postech-air@postech.ac.kr</a></span>
          </div>
          <div className="tile tile-status-host">
            <span className="tile-status status-soon">마감 임박</span>
            <span className="tile-pill">Event 2</span>
            <a className="tile-t" href="#pg-edu">② AX 부트캠프(고급교육)</a>
            <span className="minitag">집중 교육형</span>
            <span className="minid">3일 집중 교육과 현장 적용으로 '1인 1과제'를 완주하는 AX Leader 양성 과정입니다.</span>
            <div className="minimeta"><div><b>형태</b>집합(차수당 8명)</div><div><b>시간</b>3일·일 5시간</div><div><b>보상</b>수료·현업 연계</div></div>
            <span className="tile-links">
              <a href="https://forms.cloud.microsoft/r/hfkNYYATZj" target="_blank" rel="noopener">사전수요조사 ↗</a>
            </span>
          </div>
          <div className="tile tile-status-host">
            <span className="tile-status status-ext">신청 마감 연장 : 8.26(수)까지</span>
            <span className="tile-pill">Event 3</span>
            <a className="tile-t" href="#pg-comp">③ AX 공모전</a>
            <span className="minitag">공모(출품)형 · 챌린지</span>
            <span className="minid">AI를 활용한 실증 사례에 대해 자유롭게 출품하는 챌린지입니다.</span>
            <div className="minimeta"><div><b>형태</b>개인·팀(≤4명)</div><div><b>기간</b>7.15~10.14</div><div><b>보상</b>시상(최대 20명)</div></div>
            <span className="tile-links">
              <a href="https://forms.cloud.microsoft/r/ma8zZBZQGd" target="_blank" rel="noopener">참가신청서 (AI 라이선스 신청 포함) ↗</a>
              <a href="https://forms.cloud.microsoft/r/ge3tZCAkLd" target="_blank" rel="noopener">AX 경험 설명서 ↗</a>
            </span>
          </div>
        </nav>

        <div className="note-strip">
          <span><b>참여 대상</b> &nbsp;전 직원</span>
          <span><b>문의</b> &nbsp;AIR센터 postech-air@postech.ac.kr</span>
        </div>
      </div>
    </section>
  );
}
