import PageFoot from "@/components/PageFoot";
import sig from "@/assets/postech-signature-horizontal.jpg";

export default function Cover() {
  return (
    <section className="page" id="top" data-screen-label="표지 · 개요">
      <div className="cover-head" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <img src={sig.src} alt="POSTECH" />
        <span style={{ fontSize: 12, fontWeight: 600, color: "var(--fg-alternative)" }}>2026 하반기 · 인사팀 · AIR센터</span>
      </div>
      <div className="cover-hero">
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".14em", opacity: 0.85, textTransform: "uppercase" }}>AI 행사 선택 가이드</div>
        <h1 style={{ margin: "14px 0 0", fontSize: 36, fontWeight: 700, letterSpacing: "-.03em", lineHeight: 1.15 }}>나에게 맞는<br />AI 행사 찾기</h1>
        <div className="cover-lede" style={{ fontSize: 14.5, lineHeight: 1.6, marginTop: 14, opacity: 0.92, maxWidth: "60ch" }}>하반기(7월 이후) AIR센터가 준비한 세 가지 AI 행사입니다. 모두 전 직원이 참여 대상이며, 부담·목표·숙련도에 따라 나에게 맞는 하나를 고르면 됩니다. 단, 참여를 위한 여건이 충분한지 확인해보시기 바랍니다.</div>
      </div>
      <div className="mini3">
        <div className="mini" id="mini-wg">
          <div className="mininum">1</div>
          <div className="minih">Working Group</div><div className="minitag">지속형 · 실무 공동 구현</div>
          <div className="minid">소규모로 매주 모여, 내 업무의 실제 문제를 AI로 함께 해결하고 업무에 적용합니다.</div>
          <div className="minimeta"><div><b>형태</b>소규모 그룹(~10명)</div><div><b>시간</b>주 1회·1시간+</div><div><b>지원</b>Claude Pro·멘토링</div></div>
        </div>
        <div className="mini" id="mini-edu">
          <div className="mininum">2</div>
          <div className="minih">고급교육</div><div className="minitag">집중 교육 · 인증형</div>
          <div className="minid">3일 집중 교육과 현장 적용으로 '1인 1과제'를 완주하는 AX Leader 양성 과정입니다.</div>
          <div className="minimeta"><div><b>형태</b>집합(차수당 8명)</div><div><b>시간</b>3일·일 5시간</div><div><b>보상</b>수료·AX Leader 인증</div></div>
        </div>
        <div className="mini" id="mini-comp">
          <div className="mininum">3</div>
          <div className="minih">공모전</div><div className="minitag">공모(출품)형 · 챌린지</div>
          <div className="minid">AI를 활용한 실증 사례와 산출물을 자유롭게 출품하는 챌린지입니다. 시상이 있습니다.</div>
          <div className="minimeta"><div><b>형태</b>개인·팀(≤4명)</div><div><b>기간</b>7.15~10.14</div><div><b>보상</b>시상(최대 20명)</div></div>
        </div>
      </div>
      <div className="note-strip">
        <span><b>참여 대상</b> &nbsp;전 직원 (일부 과정은 행정직원 중심)</span>
        <span><b>문의</b> &nbsp;AIR센터 postech-air@postech.ac.kr</span>
        <span><b>안내</b> &nbsp;3개 행사 공통</span>
      </div>
      <div style={{ marginTop: 16, fontSize: 13, lineHeight: 1.6, color: "var(--fg-alternative)" }}>먼저 <b style={{ color: "var(--fg-strong)" }}>선택 가이드</b>로 나에게 맞는 행사를 확인한 뒤, 다음 장의 행사별 상세 안내와 마지막 장의 <b style={{ color: "var(--fg-strong)" }}>신청 방법</b>을 참고하세요.</div>
      <PageFoot right={<>인사팀 · AIR센터 &nbsp;|&nbsp; 01</>} />
    </section>
  );
}
