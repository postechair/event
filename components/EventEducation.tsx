export default function EventEducation() {
  return (
    <section className="sec alt" id="pg-edu" data-screen-label="② 고급교육 (AX Leaders)">
      <div className="wrap">
      <div className="eyebrow">행사 안내 ②</div>
      <div className="ev" style={{ marginTop: 14 }}>
        <div className="band"><span className="bb">집중 교육 · 인증형</span><h2 className="bt">고급교육 · AX Leaders</h2><span className="bm">행정직원 · 차수당 8명 이내</span></div>
        <div className="evb">
          <div className="spec">
            <div className="speccard"><div className="speck">목적</div><div className="specv">실무형 AX Leader 육성<small>행정업무를 AI로 혁신하는 부서별 실무 인력 양성</small></div></div>
            <div className="speccard"><div className="speck">구조</div><div className="specv">집합 교육 + 현장 적용<small>일회성 소양 교육이 아닌 과제 완주형 육성</small></div></div>
            <div className="speccard"><div className="speck">핵심 원칙</div><div className="specv">1인 1과제 완주<small>내 부서 실제 업무를 기획·개발·테스트까지 완수</small></div></div>
          </div>

          <div className="sech">POSTECH AX Leader 3대 역할</div>
          <div className="roles">
            <div className="role"><div className="rolenum">1</div><div className="roleh">기회 발굴<span className="en">Discover</span></div><div className="roled">업무 프로세스를 진단해 AI 적용 기회를 발굴하고 우선순위를 정합니다.</div></div>
            <div className="role"><div className="rolenum">2</div><div className="roleh">개발 · 테스트<span className="en">Build &amp; Test</span></div><div className="roled">프롬프트 엔지니어링·노코드 도구로 프로토타입을 만들고 검증합니다.</div></div>
            <div className="role"><div className="rolenum">3</div><div className="roleh">현장 적용 · 측정<span className="en">Apply &amp; Measure</span></div><div className="roled">결과물을 업무에 정착시키고 KPI로 성과를 측정합니다.</div></div>
          </div>

          <div className="sech">프로그램 구조 (2단계)</div>
          <div className="g2">
            <div className="speccard" style={{ padding: "15px 16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}><span style={{ fontSize: 11, fontWeight: 700, color: "#fff", background: "var(--primary)", borderRadius: 999, padding: "3px 9px" }}>1단계</span><span style={{ fontSize: 13.5, fontWeight: 700, color: "var(--fg-strong)" }}>집합 교육 · 3일(일 5시간)</span></div>
              <div style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--fg-neutral)" }}><b style={{ color: "var(--fg-strong)" }}>1일차</b> AI 리터러시 · 프롬프트 엔지니어링<br /><b style={{ color: "var(--fg-strong)" }}>2일차</b> 프로세스 분석 · 솔루션 설계 · 노코드 실습<br /><b style={{ color: "var(--fg-strong)" }}>3일차</b> 구현 개선 · 검증 · 현장 적용안 · 발표</div>
            </div>
            <div className="speccard" style={{ padding: "15px 16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}><span style={{ fontSize: 11, fontWeight: 700, color: "#fff", background: "var(--primary-heavy)", borderRadius: 999, padding: "3px 9px" }}>2단계</span><span style={{ fontSize: 13.5, fontWeight: 700, color: "var(--fg-strong)" }}>현장 적용 &amp; 성과 발표</span></div>
              <div style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--fg-neutral)" }}>부서 실제 적용 (AIR센터 멘토링 지원)<br />적용 후 변화 관리 및 KPI 측정<br />우수 사례 선정 · 성과 공유회 (연말 예정)</div>
            </div>
          </div>

          <div className="info">
            <div className="infok">수료 &amp; 인증</div>
            <ul>
              <li><b>교육 수료</b> — 전 일정(3일) 이수 + 프로토타입 완성 시 수료 인정</li>
              <li><b>AX Leader 인증</b> — 현장 적용까지 완주 시 POSTECH AX Leader로 인증</li>
            </ul>
          </div>

          <div className="fit"><div className="fith">이런 분께 딱 맞아요</div><p>기초부터 <b>체계적으로 배우고 싶은 분</b>, 3일 집중 참여가 가능하고 수료·인증이라는 분명한 목표를 원하는 행정직원.</p></div>
        </div>
      </div>
      </div>
    </section>
  );
}
