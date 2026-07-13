import PageFoot from "@/components/PageFoot";

export default function ApplySection() {
  return (
    <section className="page" id="pg-apply" data-screen-label="신청 · 일정 · 문의">
      <div className="eyebrow">신청 방법 · 일정 · 문의</div>
      <h2 className="ptitle">신청하고 시작하기</h2>
      <p className="psub">나에게 맞는 행사를 정했다면, 아래 방법으로 신청하세요. 행사별로 신청 경로가 다릅니다.</p>

      <div className="sech" style={{ marginTop: 24 }}>행사별 신청 방법</div>
      <div className="g3">
        <div className="speccard" style={{ padding: "15px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}><span className="lgn">1</span><span style={{ fontSize: 14, fontWeight: 700, color: "var(--fg-strong)" }}>Working Group</span></div>
          <div style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--fg-neutral)" }}><b style={{ color: "var(--fg-strong)" }}><span></span><span style={{ color: "var(--fg-strong)" }}>AIR센터에 참여 의사를 전달해주세요</span></b>. 참여 가능 상황 및 참여에 의해 달성하고자 하는 주제에 대해 충분히 의견을 나눈 뒤 참여를 결정하시면 됩니다.<br /><br />E: postech-air@postech.ac.kr<br />P: 054-279-3501</div>
        </div>
        <div className="speccard" style={{ padding: "15px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}><span className="lgn">2</span><span style={{ fontSize: 14, fontWeight: 700, color: "var(--fg-strong)" }}>고급교육</span></div>
          <div style={{ fontSize: "12.5px", lineHeight: 1.6, color: "var(--fg-strong)" }}><b><span style={{ color: "var(--fg-strong)" }}>사전 수요조사 설문</span>에 응답해주세요.</b> 참여 의사와 가능 일정을 받아 차수를 편성합니다.<br /><br /><br />Link : <a href="https://forms.cloud.microsoft/r/hfkNYYATZj" target="_blank" rel="noopener">[사전수요조사]</a><br /><br /></div>
        </div>
        <div className="speccard" style={{ padding: "15px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}><span className="lgn">3</span><span style={{ fontSize: 14, fontWeight: 700, color: "var(--fg-strong)" }}>공모전</span></div>
          <div style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--fg-neutral)" }}>아래 <b style={{ color: "var(--fg-strong)" }}>온라인 신청서</b>를 작성해 제출하세요. 라이선스·컨설팅 지원이 필요하면 해당 신청서도 함께 제출합니다.</div>
        </div>
      </div>

      <div className="sech">공모전 신청 링크</div>
      <div className="links">
        <a className="linkbtn" href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=jOnzv8pcXEWtyF_ST8mQjfaXwssGAtFFnAAnJOxYAqlUMkRWSzQ4WlJBWFZEWDYzSEVITVcxTURESS4u" target="_blank" rel="noopener">
          <span className="ln">1</span><span className="lt"><span className="lk">참가신청서 작성 <span className="pill req" style={{ marginLeft: 6 }}>필수</span></span><span className="lu">forms.cloud.microsoft/Pages/ResponsePage.aspx?id=…SEVITVcxTURESS4u</span></span><span className="lgo">열기 →</span>
        </a>
        <a className="linkbtn" href="https://forms.cloud.microsoft/r/ge3tZCAkLd" target="_blank" rel="noopener">
          <span className="ln">2</span><span className="lt"><span className="lk">AX 경험 설명서 (서면평가 양식) <span className="pill req" style={{ marginLeft: 6 }}>필수</span></span><span className="lu">forms.cloud.microsoft/r/ge3tZCAkLd</span></span><span className="lgo">열기 →</span>
        </a>
        <a className="linkbtn" href="https://forms.cloud.microsoft/r/VSRvGb0Asb" target="_blank" rel="noopener">
          <span className="ln">3</span><span className="lt"><span className="lk">컨설팅 신청서 작성 <span className="pill opt" style={{ marginLeft: 6 }}>선택</span></span><span className="lu">forms.cloud.microsoft/r/VSRvGb0Asb</span></span><span className="lgo">열기 →</span>
        </a>
      </div>

      <div className="sech">하반기 주요 일정</div>
      <div className="tl">
        <div className="tlrow"><div className="tld">7. 15 (수)</div><div className="tlt">공모전 접수 시작<small>Working Group은 7월부터 상시 · 고급교육은 사전 수요조사 후 차수 편성</small></div></div>
        <div className="tlrow"><div className="tld">7. 29 (수)</div><div className="tlt">공모전 · 라이선스 신청 마감</div></div>
        <div className="tlrow"><div className="tld">8. 26 (수)</div><div className="tlt">공모전 · 컨설팅 신청 마감</div></div>
        <div className="tlrow"><div className="tld">10. 14 (수)</div><div className="tlt">공모전 접수 마감</div></div>
        <div className="tlrow"><div className="tld">연말</div><div className="tlt">우수 사례 성과 공유회<small>고급교육 현장 적용 성과 발표와 함께 진행</small></div></div>
      </div>

      <div className="note-strip" style={{ marginTop: "auto" }}>
        <span><b>문의</b> &nbsp;AIR센터 &nbsp;postech-air@postech.ac.kr &nbsp;<span style={{ color: "var(--fg-alternative)" }}>(3개 행사 공통)</span></span>
      </div>
      <PageFoot right={<>인사팀 · AIR센터 &nbsp;|&nbsp; 05</>} />
    </section>
  );
}
