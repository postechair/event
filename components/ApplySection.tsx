export default function ApplySection() {
  return (
    <section className="sec alt" id="pg-apply" data-screen-label="신청 · 일정 · 문의">
      <div className="wrap">
      <div className="eyebrow">신청 방법 · 일정 · 문의</div>
      <h2 className="ptitle">신청하고 시작하기</h2>

      <div className="sech" style={{ marginTop: 24 }}>행사별 신청 방법</div>
      <div className="g3">
        <div className="speccard" style={{ padding: "15px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}><span className="lgn">1</span><span style={{ fontSize: 16, fontWeight: 700, color: "var(--fg-strong)" }}>Working Group</span></div>
          <div style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--fg-neutral)" }}><b style={{ color: "var(--fg-strong)" }}>AIR센터에 참여 의사를 전달해주세요</b>. 참여 가능 상황 및 참여에 의해 달성하고자 하는 주제에 대해 충분히 의견을 나눈 뒤 참여를 결정하시면 됩니다.<br /><br />E: postech-air@postech.ac.kr<br />P: 054-279-3501</div>
        </div>
        <div className="speccard" style={{ padding: "15px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}><span className="lgn">2</span><span style={{ fontSize: 16, fontWeight: 700, color: "var(--fg-strong)" }}>AX 부트캠프(고급교육)</span></div>
          <div style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--fg-neutral)" }}><b style={{ color: "var(--fg-strong)" }}>사전 수요조사 설문</b><b>에 응답해주세요.</b> 참여 의사와 가능 일정을 받아 차수를 편성합니다.
            <div className="cardlinks">
              <div><a href="https://forms.cloud.microsoft/r/hfkNYYATZj" target="_blank" rel="noopener">사전수요조사 ↗</a></div>
            </div>
          </div>
        </div>
        <div className="speccard" style={{ padding: "15px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}><span className="lgn">3</span><span style={{ fontSize: 16, fontWeight: 700, color: "var(--fg-strong)" }}>AX 공모전</span></div>
          <div style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--fg-neutral)" }}>아래 <b style={{ color: "var(--fg-strong)" }}>온라인 신청서</b>를 작성해 제출하세요.
            <div className="cardlinks">
              <div><a href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=jOnzv8pcXEWtyF_ST8mQjfaXwssGAtFFnAAnJOxYAqlUMkRWSzQ4WlJBWFZEWDYzSEVITVcxTURESS4u" target="_blank" rel="noopener">참가신청서 (AI 라이선스 신청 포함) ↗</a><span className="pill req">필수</span></div>
              <div><a href="https://forms.cloud.microsoft/r/ge3tZCAkLd" target="_blank" rel="noopener">AX 경험 설명서 ↗</a><span className="pill req">필수</span></div>
              <div><a href="https://forms.cloud.microsoft/r/VSRvGb0Asb" target="_blank" rel="noopener">컨설팅 신청서 ↗</a><span className="pill opt">선택</span></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
