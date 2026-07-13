export default function GuideTable() {
  return (
    <section className="sec alt" id="compare" data-screen-label="선택 가이드 · 비교표형">
      <div className="wrap">
      <div className="eyebrow">나에게 맞는 행사 찾기</div>
      <h2 className="ptitle">한 표로 비교하는 3개의 AI 행사</h2>
      <div className="tablewrap">
        <table className="cmp">
          <thead><tr>
            <th scope="col">기준</th>
            <th scope="col"><span className="cn">①</span><span className="ct">Working Group</span></th>
            <th scope="col"><span className="cn">②</span><span className="ct">AX부트캠프(고급교육)</span></th>
            <th scope="col"><span className="cn">③</span><span className="ct">공모전</span></th>
          </tr></thead>
          <tbody>
            <tr><th scope="row">한 줄 소개</th><td><b>실무 공동 구현</b><br />내 업무 문제를 함께 해결</td><td><b>집중 양성 과정</b><br />1인 1과제 완주형</td><td><b>자유 출품 챌린지</b><br />AX 사례 또는 산출물 제출</td></tr>
            <tr><th scope="row">참여 및 선발 형태&nbsp;</th><td>개인 또는 업무단위 그룹(총 10명 내외)<br />— 팀별 추천 또는 지원 후 선발 과정 있음</td><td>집합 교육(8명 이내)<br />— 수요에 따라 선발 과정이 발생할 수 있음</td><td>개인 또는 팀(4명 이하)<br />— 제한 없음</td></tr>
            <tr className="em"><th scope="row">필요 시간</th><td><b>높음</b> · 주 1회·1시간+ 미팅 + 개인 실습 (연말까지)</td><td><b>중간</b> · 3일 집중(일 5시간) + 현장 적용</td><td><b>낮음~자유</b> · 내 페이스로 준비해 제출</td></tr>
            <tr><th scope="row">권장 AI 경험수준<br /></th><td>중급 이상<br />(AI를 업무에 매일 사용)</td><td>중급 이상<br />(AI를 업무에 매일 사용)</td><td>제한 없음<br /></td></tr>
            <tr className="em"><th scope="row">목표·보상</th><td>실적용 가능한 업무 솔루션<br />AI 역량 강화</td><td>수료 + 현업 연계</td><td><b><span style={{ fontWeight: "normal" }}>수상</span></b>(태블릿·해외벤치마킹·포상휴가·상품권 등)</td></tr>
            <tr><th scope="row">일정</th><td>7월부터 연말까지 상시</td><td>차수별 3일(집합교육) <br />+ 현장적용 작업 상시</td><td>10월 14일까지 접수</td></tr>
            <tr><th scope="row">AIR센터 지원</th><td>AI 라이선스(Claude Pro)<br />+ 멘토링</td><td>좌동</td><td>좌동 <br />(단, 수요에 따라 지원을 위한 선발 과정이 발생할 수 있음)</td></tr>
            <tr><th scope="row">추천대상</th><td>장기적으로 꾸준히 참여하며 AX로 업무를 바꾸고 싶은 분</td><td>체계적이고 집중적으로 학습·실습하고 현업으로도 연계하고 싶은 분</td><td>자유롭게 도전하며 성과를 인정받고 싶은 분</td></tr>
          </tbody>
        </table>
      </div>
      <div className="scrollhint">← 옆으로 밀어 3개 행사를 비교하세요</div>
      <div className="chiprow">


        <span className="chip">꾸준히 함께 성장 → ① Working Group</span><span className="chip">집중·몰입·체계적 → ② AX부트캠프(고급교육)</span><span className="chip">시간 제약없이 자유롭게 참여 → ③ 공모전</span>
      </div>
      </div>
    </section>
  );
}
