export default function EventCompetition() {
  return (
    <section className="sec" id="pg-comp" data-screen-label="③ 공모전 (AX 실증 사례 출품 챌린지)">
      <div className="wrap">
      <div className="eyebrow">행사 안내 ③</div>
      <div className="ev" style={{ marginTop: 14 }}>
        <div className="band"><span className="bb">공모(출품)형</span><h2 className="bt">공모전</h2></div>
        <div className="evb">
          <div className="spec">
            <div className="speccard"><div className="speck">목적</div><div className="specv">AX 사례(또는 산출물) 공유 및 아이디어 교환</div></div>
            <div className="speccard"><div className="speck">대상 · 규모</div><div className="specv">개인 또는 팀<small>전 직원 · 팀은 4명 이하</small></div></div>
            <div className="speccard"><div className="speck">핵심 원칙</div><div className="specv">공모(출품)형<small>AI 사용 도구 제한 없음</small></div></div>
            <div className="speccard"><div className="speck">활동 기간</div><div className="specv">7.15 ~ 10.14</div></div>
          </div>

          <div className="sech">활동 지원 (단, 신청 및 심사과정 있음)</div>
          <div className="g2">
            <div className="speccard" style={{ padding: "15px 16px" }}>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--primary)", marginBottom: 6 }}>라이선스 지원 : 참가신청서 작성 시 신청</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--fg-neutral)" }}>라이선스 신청서 제출자(팀) 심사 후 <b style={{ color: "var(--fg-strong)" }}>AI 라이선스(Claude Pro)</b> 제공. 팀은 팀원 개인별 제공. <span style={{ color: "var(--fg-alternative)" }}>Working Group 등으로 이미 지원받은 경우 제외.</span></div>
            </div>
            <div className="speccard" style={{ padding: "15px 16px" }}>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--primary)", marginBottom: 6 }}>AIR센터 지원 : 8.26(수)까지 별도 신청서 작성</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--fg-neutral)" }}>컨설팅 신청서 제출자(팀) 심사 후 <b style={{ color: "var(--fg-strong)" }}>AIR센터와의 컨설팅</b> 시행. 개인·팀 구분 없이 가능.</div>
            </div>
          </div>

          <div className="sech">평가 배점 <span style={{ fontSize: 14, fontWeight: 500, color: "var(--fg-alternative)", marginLeft: 2 }}>(100점)</span></div>
          <div className="bars">
            <div className="barrow"><span className="barlab">해결 대상 업무문제의 실재성</span><span className="bartrack"><span className="barfill" style={{ width: "100%" }}></span></span><span className="barval">40</span></div>
            <div className="barrow"><span className="barlab">AI 활용 역량 수준</span><span className="bartrack"><span className="barfill" style={{ width: "62.5%" }}></span></span><span className="barval">25</span></div>
            <div className="barrow"><span className="barlab">업무 효율화 성과</span><span className="bartrack"><span className="barfill" style={{ width: "50%" }}></span></span><span className="barval">20</span></div>
            <div className="barrow"><span className="barlab">타 부서 확산 가능성</span><span className="bartrack"><span className="barfill" style={{ width: "37.5%" }}></span></span><span className="barval">15</span></div>
          </div>

          <div className="g2x16">
            <div>
              <div className="sech" style={{ marginTop: 0 }}>시상</div>
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
                <div className="drow">AI 라이선스 신청서 (참가신청 시 제출)<span className="pill opt">선택</span></div>
                <div className="drow">AIR센터 컨설팅 신청서<span className="pill opt">선택</span></div>
              </div>
            </div>
          </div>

          <div className="fit"><div className="fith">이런 분께 딱 맞아요</div>
            <ul>
              <li><b>AI를 활용하여 업무 효율을 높이거나 업무를 자동화하는 등 AX 경험</b>이 있는 분</li>
              <li>정해진 커리큘럼 없이 자유롭게 도전해 성과를 인정받고 수상까지 노리고 싶은 분</li>
            </ul>
            <p className="fitnote">※ 개인 또는 팀으로 참여 가능</p>
          </div>

          <div className="applyzone">
            <div className="fith">신청방법</div>
            <p className="applyp">아래를 참고하여 신청</p>
            <div className="sech">공모전 참여 링크</div>
            <div className="links">
              <a className="linkbtn" href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=jOnzv8pcXEWtyF_ST8mQjfaXwssGAtFFnAAnJOxYAqlUMkRWSzQ4WlJBWFZEWDYzSEVITVcxTURESS4u" target="_blank" rel="noopener">
                <span className="ln">1</span><span className="lt"><span className="lk">참가신청서(AI 라이선스 신청 포함) 작성 (~7.29) <span className="pill req" style={{ marginLeft: 6 }}>필수</span></span><span className="lu">forms.cloud.microsoft/Pages/ResponsePage.aspx?id=…SEVITVcxTURESS4u</span></span><span className="lgo">열기 →</span>
              </a>
              <a className="linkbtn" href="https://forms.cloud.microsoft/r/ge3tZCAkLd" target="_blank" rel="noopener">
                <span className="ln">2</span><span className="lt"><span className="lk">AX 경험 설명서 작성 (~10.14) <span className="pill req" style={{ marginLeft: 6 }}>필수</span></span><span className="lu">forms.cloud.microsoft/r/ge3tZCAkLd</span></span><span className="lgo">열기 →</span>
              </a>
              <a className="linkbtn" href="https://forms.cloud.microsoft/r/VSRvGb0Asb" target="_blank" rel="noopener">
                <span className="ln">3</span><span className="lt"><span className="lk">컨설팅 신청서 작성 (~8.26) <span className="pill opt" style={{ marginLeft: 6 }}>선택</span></span><span className="lu">forms.cloud.microsoft/r/VSRvGb0Asb</span></span><span className="lgo">열기 →</span>
              </a>
            </div>
            <div className="sech">일정</div>
            <div className="tl">
              <div className="tlrow"><div className="tld">7. 15 (수)</div><div className="tlt">공모전 접수 시작</div></div>
              <div className="tlrow"><div className="tld">7. 29 (수)</div><div className="tlt">참가신청서(AI 라이선스 신청 포함) 마감</div></div>
              <div className="tlrow"><div className="tld">8. 26 (수)</div><div className="tlt">컨설팅 신청 마감</div></div>
              <div className="tlrow"><div className="tld">10. 14 (수)</div><div className="tlt">AX 경험 설명서 작성 마감</div></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
