/** 히어로 풀폭 밴드 + 빠른 바로가기 타일 + 행사 요약 앵커 카드 (설계문서 2항)
 *  표지(Cover) 콘텐츠를 웹 네이티브로 재배치 — 문구는 원문 그대로 (치환 2건 제외) */
export default function Hero() {
  return (
    <>
      <section id="top" className="hero">
        <div className="hero-inner">
          <div className="hero-meta">2026 하반기 · 인사팀 · AIR센터</div>
          <div className="hero-eyebrow">AI 행사 선택 가이드</div>
          <h1 className="hero-title">나에게 맞는<br />AI 행사 찾기</h1>
          <p className="hero-lede">하반기(7월 이후) AIR센터가 준비한 세 가지 AI 행사입니다. 모두 전 직원이 참여 대상이며, 부담·목표·숙련도에 따라 나에게 맞는 하나를 고르면 됩니다. 단, 참여를 위한 여건이 충분한지 확인해보시기 바랍니다.</p>

          <nav className="tiles" aria-label="빠른 바로가기">
            <a className="tile" href="mailto:postech-air@postech.ac.kr">
              <span className="tile-pill">이메일</span>
              <span className="tile-t">① Working Group 참여 문의</span>
              <span className="tile-d">postech-air@postech.ac.kr</span>
            </a>
            <a className="tile" href="https://forms.cloud.microsoft/r/hfkNYYATZj" target="_blank" rel="noopener">
              <span className="tile-pill">설문 폼</span>
              <span className="tile-t">② 고급교육 사전수요조사</span>
              <span className="tile-d">forms.cloud.microsoft ↗</span>
            </a>
            <div className="tile tile-multi">
              <span className="tile-pill req">필수 2종</span>
              <span className="tile-t">③ 공모전 신청</span>
              <span className="tile-links">
                <a href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=jOnzv8pcXEWtyF_ST8mQjfaXwssGAtFFnAAnJOxYAqlUMkRWSzQ4WlJBWFZEWDYzSEVITVcxTURESS4u" target="_blank" rel="noopener">참가신청서 ↗</a>
                <a href="https://forms.cloud.microsoft/r/ge3tZCAkLd" target="_blank" rel="noopener">AX 경험 설명서 ↗</a>
              </span>
            </div>
            <a className="tile" href="#pg-apply">
              <span className="tile-pill">안내</span>
              <span className="tile-t">하반기 일정</span>
              <span className="tile-d">신청 방법 · 일정 · 문의</span>
            </a>
          </nav>
        </div>
      </section>

      <section className="sec hero-sub">
        <div className="wrap">
          <div className="mini3">
            <a className="mini" id="mini-wg" href="#pg-wg">
              <div className="mininum">1</div>
              <div className="minih">Working Group</div><div className="minitag">지속형 · 실무 공동 구현</div>
              <div className="minid">소규모로 매주 모여, 내 업무의 실제 문제를 AI로 함께 해결하고 업무에 적용합니다.</div>
              <div className="minimeta"><div><b>형태</b>소규모 그룹(~10명)</div><div><b>시간</b>주 1회·1시간+</div><div><b>지원</b>Claude Pro·멘토링</div></div>
            </a>
            <a className="mini" id="mini-edu" href="#pg-edu">
              <div className="mininum">2</div>
              <div className="minih">고급교육</div><div className="minitag">집중 교육 · 인증형</div>
              <div className="minid">3일 집중 교육과 현장 적용으로 '1인 1과제'를 완주하는 AX Leader 양성 과정입니다.</div>
              <div className="minimeta"><div><b>형태</b>집합(차수당 8명)</div><div><b>시간</b>3일·일 5시간</div><div><b>보상</b>수료·AX Leader 인증</div></div>
            </a>
            <a className="mini" id="mini-comp" href="#pg-comp">
              <div className="mininum">3</div>
              <div className="minih">공모전</div><div className="minitag">공모(출품)형 · 챌린지</div>
              <div className="minid">AI를 활용한 실증 사례와 산출물을 자유롭게 출품하는 챌린지입니다. 시상이 있습니다.</div>
              <div className="minimeta"><div><b>형태</b>개인·팀(≤4명)</div><div><b>기간</b>7.15~10.14</div><div><b>보상</b>시상(최대 20명)</div></div>
            </a>
          </div>
          <div className="note-strip">
            <span><b>참여 대상</b> &nbsp;전 직원 (일부 과정은 행정직원 중심)</span>
            <span><b>문의</b> &nbsp;AIR센터 postech-air@postech.ac.kr</span>
            <span><b>안내</b> &nbsp;3개 행사 공통</span>
          </div>
          <div style={{ marginTop: 16, fontSize: 13, lineHeight: 1.6, color: "var(--fg-alternative)" }}>먼저 <b style={{ color: "var(--fg-strong)" }}>선택 가이드</b>로 나에게 맞는 행사를 확인한 뒤, 아래 행사별 상세 안내와 하단 <b style={{ color: "var(--fg-strong)" }}>신청 방법</b>을 참고하세요.</div>
        </div>
      </section>
    </>
  );
}
