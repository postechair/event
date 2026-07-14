export default function EventWorkingGroup() {
  return (
    <section className="sec" id="pg-wg" data-screen-label="① Working Group">
      <div className="wrap">
      <div className="eyebrow">행사 안내 <span className="evnum">1</span></div>
      <div className="ev" style={{ marginTop: 14 }}>
        <div className="band"><span className="bb">지속형 · 실무 공동 구현</span><h2 className="bt">Working Group</h2></div>
        <div className="evb">
          <div className="spec">
            <div className="speccard"><div className="speck">목적</div><div className="specv">실무 문제 공동 해결<small>업무에서 실제 발생하는 문제를 정의하고, 활용 가능한 수준까지 함께 구현</small></div></div>
            <div className="speccard"><div className="speck">대상 · 규모</div><div className="specv">전 직원 · 10명 내외<small>하반기 소규모로 재편 (기존 22명 → 10명 내외)</small></div></div>
            <div className="speccard"><div className="speck">핵심 원칙</div><div className="specv">주 1회·1시간 필수 + 개인 시간<small>AIR센터 정기 미팅 + 숙련을 위한 개인 시간 투자 필수</small></div></div>
            <div className="speccard"><div className="speck">활동 기간</div><div className="specv">7월 ~ 연말</div></div>
          </div>

          <div className="sech">추진 배경</div>
          <p style={{ margin: 0, fontSize: "15.5px", lineHeight: 1.65, color: "var(--fg-neutral)" }}>Working Group은 AX(AI 전환) 교육·실습을 목적으로 구성되어, 그동안 vibe coding 환경 설정과 간단한 코드 실습을 함께 경험해 왔습니다. 하반기에는 개인 실습 중심에서 벗어나, <b style={{ color: "var(--fg-strong)" }}>업무상 실제 문제를 정의하고 이를 해결해 업무에 적용하는 것</b>을 목표로 소규모·고밀도로 운영합니다.</p>

          <div className="sech">이렇게 함께합니다</div>
          <div className="roles">
            <div className="role"><div className="rolenum">1</div><div className="roleh">문제 정의<span className="en">Define</span></div><div className="roled">내 업무에서 실제로 불편하거나 반복되는 문제를 함께 구체화합니다.</div></div>
            <div className="role"><div className="rolenum">2</div><div className="roleh">해결 · 구현<span className="en">Build</span></div><div className="roled">매주 AIR센터와 미팅하며 해결 방법을 찾고 직접 구현해 봅니다.</div></div>
            <div className="role"><div className="rolenum">3</div><div className="roleh">업무 적용<span className="en">Apply</span></div><div className="roled">실제 업무에 활용할 수 있는 수준까지 완성하고 정착시킵니다.</div></div>
          </div>

          <div className="info">
            <div className="infok">지원 &amp; 참여 안내</div>
            <ul>
              <li>참여 기간 중 <b>AI 라이선스(Claude Pro)</b>와 AIR센터의 밀착 멘토링을 지원합니다.</li>
              <li>별도 교육이 불필요할 만큼 AX가 일상화될 때까지 <b>지속 운영</b>할 계획입니다.</li>
            </ul>
          </div>

          <div className="fit"><div className="fith">이런 분께 딱 맞아요</div>
            <ul>
              <li>꾸준히 시간을 내어 <b>내 업무를 AI로 실제 바꾸고 싶은 분</b></li>
              <li>혼자보다 AIR센터와 밀착해 함께 배우며 지속적으로 성장하고 싶은 분</li>
            </ul>
          </div>

          <div className="fit"><div className="fith">신청 방법</div><p>AIR센터에 직접 문의(이메일, 전화 등)</p></div>
        </div>
      </div>
      </div>
    </section>
  );
}
