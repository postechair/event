export default function EventCompetition() {
  return (
    <section className="sec" id="pg-comp" data-screen-label="③ 공모전 (AX 실증 사례 출품 챌린지)">
      <div className="wrap"><div className="narrow">
      <div className="eyebrow">행사 안내 ③</div>
      <div className="ev" style={{ marginTop: 14 }}>
        <div className="band"><span className="bb">공모(출품)형</span><h2 className="bt">공모전 · AX 실증 사례 출품 챌린지</h2><span className="bm">전 직원 대상</span></div>
        <div className="evb">
          <div className="spec">
            <div className="speccard"><div className="speck">지원 자격 · 형태</div><div className="specv">개인 또는 팀<small>전 직원 · 팀은 4명 이하</small></div></div>
            <div className="speccard"><div className="speck">진행 방식</div><div className="specv">공모(출품)형<small>AI 사용 도구 제한 없음</small></div></div>
            <div className="speccard"><div className="speck">제출 기간</div><div className="specv">7.15 ~ 10.14<small>2026. 07. 15(수) ~ 10. 14(수)</small></div></div>
          </div>

          <div className="info">
            <div className="infok">제출 자료</div>
            <ul>
              <li><b>AX 경험 설명서</b> — AI를 활용해 업무상 유의미한 효과가 발생한 사례, 또는 도전적으로 사용해 본 시도에 대한 설명서</li>
              <li><b>AX 산출물</b> — 해당 과정에서 생성된 산출물 (코드, UI 포함 화면 등)</li>
            </ul>
          </div>

          <div className="sech">신청 시 지원</div>
          <div className="g2">
            <div className="speccard" style={{ padding: "15px 16px" }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--primary)", marginBottom: 6 }}>라이선스 지원 &nbsp;·&nbsp; ~7.29(수)</div>
              <div style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--fg-neutral)" }}>라이선스 신청서 제출자(팀) 심사 후 <b style={{ color: "var(--fg-strong)" }}>AI 라이선스(Claude Pro)</b> 제공. 팀은 팀원 개인별 제공. <span style={{ color: "var(--fg-alternative)" }}>Working Group 등으로 이미 지원받은 경우 제외.</span></div>
            </div>
            <div className="speccard" style={{ padding: "15px 16px" }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--primary)", marginBottom: 6 }}>AIR센터 지원 &nbsp;·&nbsp; ~8.26(수)</div>
              <div style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--fg-neutral)" }}>컨설팅 신청서 제출자(팀) 심사 후 <b style={{ color: "var(--fg-strong)" }}>AIR센터와의 컨설팅</b> 시행. 개인·팀 구분 없이 가능.</div>
            </div>
          </div>

          <div className="sech">서면 평가 <span style={{ fontSize: 12, fontWeight: 500, color: "var(--fg-alternative)", marginLeft: 2 }}>(100점)</span></div>
          <div className="bars">
            <div className="barrow"><span className="barlab">해결 대상 업무문제의 실재성</span><span className="bartrack"><span className="barfill" style={{ width: "100%" }}></span></span><span className="barval">40</span></div>
            <div className="barrow"><span className="barlab">AI 활용 역량 수준</span><span className="bartrack"><span className="barfill" style={{ width: "62.5%" }}></span></span><span className="barval">25</span></div>
            <div className="barrow"><span className="barlab">업무 효율화 성과</span><span className="bartrack"><span className="barfill" style={{ width: "50%" }}></span></span><span className="barval">20</span></div>
            <div className="barrow"><span className="barlab">타 부서 확산 가능성</span><span className="bartrack"><span className="barfill" style={{ width: "37.5%" }}></span></span><span className="barval">15</span></div>
          </div>

          <div className="g2x16">
            <div>
              <div className="sech" style={{ marginTop: 0 }}>시상 · 보상 <span style={{ fontSize: 11.5, fontWeight: 500, color: "var(--fg-alternative)" }}>인사팀 협조 · 최대 20명</span></div>
              <div className="award">
                <div className="arow"><span className="arank">1</span><div className="ainfo"><div className="ak">1등 · 개인</div><div className="av">태블릿 PC</div></div><span className="acount">1명</span></div>
                <div className="arow"><span className="arank">1</span><div className="ainfo"><div className="ak">1등 · 팀 전원</div><div className="av">해외 벤치마킹</div></div><span className="acount">최대 4명</span></div>
                <div className="arow"><span className="arank r2">2</span><div className="ainfo"><div className="ak">2등 · 개인 및 팀 전원 각각</div><div className="av">포상휴가 1일 + 상품권 20만원</div></div><span className="acount">최대 5명</span></div>
                <div className="arow"><span className="arank r3">3</span><div className="ainfo"><div className="ak">3등 · 개인 및 팀 전원 각각</div><div className="av">포상휴가 1일 + 상품권 10만원</div></div><span className="acount">최대 10명</span></div>
              </div>
            </div>
            <div>
              <div className="sech" style={{ marginTop: 0 }}>제출 서류</div>
              <div className="docs">
                <div className="drow">참가신청서<span className="pill req">필수</span></div>
                <div className="drow">AX 경험 설명서<span className="pill req">필수</span></div>
                <div className="drow">AX 산출물<span className="pill req">필수</span></div>
                <div className="drow">AI 라이선스 신청서<span className="pill opt">선택</span></div>
                <div className="drow">AIR센터 컨설팅 신청서<span className="pill opt">선택</span></div>
              </div>
            </div>
          </div>

          <div className="fit"><div className="fith">이런 분께 딱 맞아요</div><p>이미 <b>AI로 만든 결과물이 있거나</b>, 정해진 커리큘럼 없이 자유롭게 도전해 성과를 인정받고 수상까지 노리고 싶은 분. 개인·팀 모두 참여할 수 있습니다.</p></div>
        </div>
      </div>
      </div></div>
    </section>
  );
}
