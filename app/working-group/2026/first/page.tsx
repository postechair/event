import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "2026 상반기 WG 참여자 산출물 사례집 | 2026 AIR EVENT",
  description:
    "POSTECH AIR센터 Working Group 2026년 상반기 참여자 산출물 사례집 — 표준 데이터 대시보드 실습에서 출발해 실제 업무 도메인으로 확장한 산출물을, 참여자가 스스로 설계·개발했습니다. 익명 정리(기술 스택·핵심 기능·작업 방식).",
};

/* 완전 익명 사례집 — 학생 식별정보·보안 세부·부정평가 배제, 도메인·구현 세부 일반화 (오너 승인).
   디자인 컨셉: 다크 청록 네이비 + 시안/바이올렛 네온 + 궤도 그래픽 (참고 디자인 컨셉 반영). */
type Track = "심화" | "응용" | "기본";
const TRACK_META: Record<Track, { code: string; label: string; sub: string }> = {
  심화: { code: "A", label: "심화 · 독자 풀스택", sub: "표준 실습을 넘어 독자 풀스택으로 확장한 결과물" },
  응용: { code: "B", label: "응용 · 업무 도메인 재구성", sub: "표준 패턴을 자기 업무 도메인으로 재적용" },
  기본: { code: "C", label: "기본 · 표준 실습 완성", sub: "표준 커리큘럼을 견실하게 완성" },
};

const CASES: {
  track: Track;
  title: string;
  summary: string;
  stack: string[];
  features: string[];
  way: string;
}[] = [
  {
    track: "심화",
    title: "부서 통합 업무 자동화 플랫폼",
    summary: "업무현황·주간보고·KPI·동향을 한곳에서 다루는 실서비스급 풀스택.",
    stack: ["FastAPI", "React", "SQLite", "문서 자동생성"],
    features: [
      "엑셀 업로드 시 부서 업무현황을 자동 취합·재분류",
      "기관 공식 양식 주간업무보고를 표·도형·서식까지 그대로 문서로 자동 생성",
      "관심 인물·키워드를 기준으로 관련 뉴스 동향을 자동 수집(병렬 처리)",
      "온라인 신청 접수 창구를 갖춘 업무 포털",
    ],
    way: "100여 개 파트에 걸친 구현 이력·교훈을 개발 일지로 축적하며 대규모 코드를 반복 개선. 코딩 에이전트와 자동 테스트를 작업 흐름에 통합.",
  },
  {
    track: "심화",
    title: "3D 지구본 자료 탐색기 + 연구성과 벤치마크 대시보드",
    summary: "두 개의 독자 풀스택을 테스트·문서화까지 갖춰 완성.",
    stack: ["Next.js", "3D 시각화", "FastAPI", "데이터 파이프라인"],
    features: [
      "검색한 자료의 지리 정보를 3D 지구본 위에 마커·영역으로 시각화",
      "외부 연동을 안전하게 분리한 서버 구조로 자료 검색을 중계",
      "여러 학술 소스를 모아 기관명을 정규화하고 연구성과를 연도별 랭킹·지표 대시보드로 제공",
    ],
    way: "수십 회의 커밋을 컨벤션에 맞춰 관리하고, 의사결정 로그·기술 설명서·자기 개발방식 분석까지 문서화. AI 산출물을 스스로 검증·정리하는 성숙한 작업 루프.",
  },
  {
    track: "심화",
    title: "교원 연구정보 수집 + AI 주간보고 요약기",
    summary: "공개 연구정보 수집과 여러 LLM을 결합한 업무 자동화.",
    stack: ["Python", "웹 수집", "Streamlit", "Plotly", "LLM 연동"],
    features: [
      "공개 연구정보 페이지에서 연구자·과제 정보를 모아 세부 전공·연구과제를 매핑(중단 지점 재개 지원)",
      "수백 명 규모의 마스터 데이터로 KPI 카드·부서별 분포·과제 카드뷰·검색 대시보드 구성",
      "보고서 전문을 LLM으로 담당자별 업무·팀 개요로 요약하고, 규칙 기반 처리와 병행",
    ],
    way: "규칙 기반과 LLM 처리를 함께 두는 이중 설계로 안정성을 확보. 여러 LLM을 용도에 맞게 골라 활용.",
  },
  {
    track: "심화",
    title: "연구규정 상담 챗봇 + 국제평가 Peer 수집",
    summary: "문서 기반 검색·응답(RAG)과 외부 학술 정보 수집을 함께 구현.",
    stack: ["Node.js", "RAG", "전문 검색", "LLM 연동", "OCR"],
    features: [
      "규정·업무자료를 근거로 답하는 문서 기반 상담 — 로컬 전문 검색으로 응답 비용을 최소화",
      "여러 LLM을 순차로 활용하는 구성으로 응답 가용성을 확보하고, 문서 이미지도 인식",
      "학술 정보로 공동연구자를 조회해 Peer 후보를 모으고 제출 건과 자동 연결",
    ],
    way: "요청 처리·업무 로직·데이터·공통 처리 계층을 교과서적으로 분리하고 전 파일에 한국어 설명 주석. 코딩 에이전트 협업 이력을 문서로 유지.",
  },
  {
    track: "심화",
    title: "KPI 체계 진단 탐색기 + 사업 효율성 대시보드",
    summary: "지표 체계와 효율성 분석을 정보설계까지 갖춰 웹으로 구현.",
    stack: ["Next.js", "React", "Streamlit", "데스크톱 앱"],
    features: [
      "KPI 계층(대·중·소) 트리 탐색기와 정의서 정합성 진단 배지(산식 누락·명칭 불일치 등)",
      "계산 결과를 화면단에서 다시 만들지 않고 단일 근거로 받아 등급 분포·차트로 시각화",
      "여러 형식의 파일을 서식을 보존하며 하나의 PDF로 병합하는 데스크톱 도구",
    ],
    way: "단일 페이지에서 다중 페이지 앱으로 확장하며 디자인 토큰을 중앙화하고 컴포넌트를 재사용. 계산과 표현을 분리해 데이터 정합성 원칙을 지킴.",
  },
  {
    track: "응용",
    title: "면담 신청 관리 대시보드",
    summary: "표준 실습을 실제 행정 업무(면담 예약·집계)로 재구성.",
    stack: ["Streamlit", "SQLite", "Plotly", "pandas"],
    features: [
      "요일×시간 히트맵, 담당자별 통계, 학과×유형 교차 분석, 월별 추이",
      "엑셀 업로드 이력 관리와 레코드 편집(CRUD)",
      "샘플 템플릿 생성·다운로드",
    ],
    way: "표준 대시보드 실습을 마친 뒤 자기 업무를 상정한 독자 프로젝트로 확장(약 2,500줄). 함수 분리·색상 상수화·촘촘한 주석.",
  },
  {
    track: "응용",
    title: "이수현황 자동 리포트 (도구 + 웹)",
    summary: "양식이 제각각인 엑셀도 견디는 방어적 집계 자동화.",
    stack: ["Python", "pandas", "Streamlit", "리포트 자동화"],
    features: [
      "컬럼 이름이 서로 달라도 자동으로 알아보고(한/영 별칭 매핑) 그대로 처리",
      "이수 여부 정규화 → 이수율 집계 → 미이수자 추출 → 여러 시트의 서식 리포트 생성",
      "같은 로직을 배치 도구와 웹 뷰어 두 형태로 제공",
    ],
    way: "표준 실습을 다른 업무 도메인(이수 관리)으로 재해석하고, 실제 데이터의 양식 편차를 견디는 방어적 처리를 스스로 추가.",
  },
  {
    track: "응용",
    title: "성적 대시보드의 코호트 분석 확장",
    summary: "표준 실습을 분석 깊이 방향으로 확장한 사례.",
    stack: ["Streamlit", "pandas", "numpy", "Plotly", "SQLite"],
    features: [
      "계열(공학·이학) 차원을 더하고 기존 데이터 구조를 유연하게 진화",
      "입학년도별 코호트 추이, 개인 대 코호트 평균 이중 기준선",
      "이상치 박스플롯·분포 히스토그램·편집형 표(변화량 추적)",
    ],
    way: "프레임워크 관용구를 정확히 구사하며, 데이터 모델을 필요에 따라 살아있게 진화시키는 접근.",
  },
  {
    track: "기본",
    title: "서식 리포트 자동 생성",
    summary: "표준 커리큘럼 전 과정을 완주하고 실무형 리포트 산출까지.",
    stack: ["Streamlit", "pandas", "Plotly", "리포트 자동화"],
    features: [
      "학과×입학년도 피벗(합계 행·열)과 부문별 통계",
      "업로드 한 번에 여러 시트로 서식화된 리포트를 자동 생성",
      "선택 항목이 있으면 조건부로 차트를 더하는 유연한 집계",
    ],
    way: "표준 실습 4단계를 끝까지 완주하고, 함수 단위로 분해해 “집계 → 서식 리포트” 파이프라인을 완성.",
  },
  {
    track: "기본",
    title: "정규화 설계로 도메인 재적용",
    summary: "표준 패턴을 새 업무에 옮기며 관계형 설계를 적용.",
    stack: ["Streamlit", "pandas", "Plotly", "SQLite"],
    features: [
      "두 테이블(마스터 ↔ 기록)을 잇는 정규화 데이터 구조",
      "집계 로직을 별도 모듈로 분리(화면·로직 분리)",
      "기관 브랜드 색을 적용한 대시보드",
    ],
    way: "표준 성적 대시보드 패턴을 면담 분석이라는 새 도메인으로 재적용하고, 관심사 분리·정규화 같은 설계 원칙을 반영.",
  },
];

const THEMES: { no: string; head: string; body: string }[] = [
  { no: "01", head: "표준을 넘어, 내 업무로", body: "주어진 실습에서 멈추지 않고, 각자 매일 쓰는 업무를 실제로 돌아가는 도구로 다시 지었습니다." },
  { no: "02", head: "처음부터 끝까지, 스스로의 손으로", body: "기획·설계·개발·검증까지 전 과정을 참여자가 직접 해냈습니다. 지식보다 의지가 만든 결과물입니다." },
  { no: "03", head: "AI를 파트너로, 사람이 디렉터로", body: "코딩 에이전트를 짝 삼아 반복을 자동화하고, 만든 것을 스스로 검증하는 방식으로 일했습니다." },
];

const PATTERNS: [string, string][] = [
  ["AI 코딩 에이전트를 페어로", "Claude Code 등 코딩 에이전트를 짝 삼아 설계·구현·디버깅을 함께 진행한 흔적이 대다수 산출물에 공통으로 나타났습니다."],
  ["표준 예제에서 내 업무로", "표준 데이터 대시보드 실습에서 출발해, 면담 관리·이수 집계·업무 보고 등 각자의 실제 업무 도메인으로 재해석했습니다."],
  ["결정과 이력의 문서화", "의사결정과 개발 이력을 문서로 남기고, 일부는 100여 개 파트의 개발 일지로 축적했습니다."],
  ["스스로 검증하는 습관", "자동·수동 점검으로 만든 것을 스스로 확인하고, 정규화·모듈화·단일 근거 같은 설계 원칙을 적용했습니다."],
];

const TRACK_ANCHOR: Record<Track, string> = { 심화: "track-a", 응용: "track-b", 기본: "track-c" };

export default function WorkingGroupCases2026H1() {
  const tracks: Track[] = ["심화", "응용", "기본"];
  const counters: Record<Track, number> = { 심화: 0, 응용: 0, 기본: 0 };
  return (
    <div className="wg" id="top">
      <header className="wg-nav">
        <div className="wg-wrap">
          <Link className="nav-brand" href="/">POSTECH <span>AIR</span></Link>
          <nav className="nav-links">
            <a href="#top">Overview</a>
            <a href="#track-a">Advanced</a>
            <a href="#track-b">Applied</a>
            <a href="#track-c">Foundation</a>
            <a href="#patterns">Patterns</a>
          </nav>
          <Link className="nav-back" href="/">2026 AIR EVENT →</Link>
        </div>
      </header>

      <main>
        <section className="wg-hero">
          <div className="wg-wrap hero-grid">
            <div className="hero-copy">
              <div className="wg-eyebrow"><span className="tick" />POSTECH AIR · WORKING GROUP · 2026 상반기</div>
              <p className="hero-kicker">2026년 상반기</p>
              <h1 className="wg-title">WG 참여자<br /><span className="grad">산출물 사례집</span></h1>
              <p className="wg-lede">
                워킹그룹은 <b>데이터 대시보드 표준 실습</b>에서 출발했습니다. 여러 참여자가 여기서 멈추지 않고
                <b> 자기 업무 도메인</b>으로 프로젝트를 재구성했고, 일부는 상담 챗봇·업무 자동화 플랫폼·3D 시각화까지 나아갔습니다.
              </p>
              <div className="hero-actions">
                <a className="wg-cta" href="#track-a">프로젝트 탐색하기 →</a>
                <div className="hero-self">
                  <span className="self-check">✓</span>
                  <div><b>100% 참여자 자체 개발</b><span>기획 · 설계 · 개발 · 검증</span></div>
                </div>
              </div>
              <p className="wg-note">※ 개인 식별정보 없이 프로젝트의 기술적 특징·기능·작업 방식만 담았습니다.</p>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="orbit">
                <div className="orbit-ring r1" />
                <div className="orbit-ring r2" />
                <div className="orbit-ring r3" />
                <div className="orbit-core"><span className="core-wg">WG</span><span className="core-sub">2026.1H</span></div>
                <i className="orbit-dot d1" /><i className="orbit-dot d2" /><i className="orbit-dot d3" />
                <span className="orbit-chip chip-tl"><b>OUTPUTS</b>10</span>
                <span className="orbit-chip chip-tr"><b>TRACKS</b>03</span>
                <span className="orbit-chip chip-bl"><b>BUILD MODE</b>SELF</span>
              </div>
            </div>
          </div>

          <div className="wg-wrap">
            <div className="theme-grid">
              {THEMES.map((t) => (
                <div className="theme" key={t.no}>
                  <div className="theme-no">{t.no}</div>
                  <h3 className="theme-head">{t.head}</h3>
                  <p className="theme-body">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {tracks.map((tk, ti) => {
          const items = CASES.filter((c) => c.track === tk);
          const meta = TRACK_META[tk];
          return (
            <section className={"wg-sec wg-band-" + tk} id={TRACK_ANCHOR[tk]} key={tk}>
              <div className="wg-wrap">
                <div className="track-head">
                  <div>
                    <div className="track-tag">TRACK #{String(ti + 1).padStart(2, "0")}</div>
                    <h2 className="wg-sech2">{meta.label}</h2>
                  </div>
                  <p className="track-sub">{meta.sub}</p>
                </div>
                <div className="case-grid">
                  {items.map((c) => {
                    counters[tk] += 1;
                    const code = `${meta.code}-${counters[tk]}`;
                    return (
                      <article className="case" key={c.title}>
                        <div className="case-code">{code}</div>
                        <h3 className="case-t">{c.title}</h3>
                        <p className="case-s">{c.summary}</p>
                        <div className="case-stack">
                          {c.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
                        </div>
                        <div className="case-block">
                          <div className="case-h">핵심 기능</div>
                          <ul className="case-feat">
                            {c.features.map((f, i) => <li key={i}>{f}</li>)}
                          </ul>
                        </div>
                        <div className="case-block">
                          <div className="case-h">작업 방식</div>
                          <p className="case-way">{c.way}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}

        <section className="wg-sec wg-sec-pattern" id="patterns">
          <div className="wg-wrap">
            <div className="track-head">
              <div>
                <div className="track-tag">PATTERNS</div>
                <h2 className="wg-sech2">작업 방식에서 관찰된 공통 패턴</h2>
              </div>
            </div>
            <div className="pat-grid">
              {PATTERNS.map(([t, d], i) => (
                <div className="pat" key={t}>
                  <div className="pat-no">{String(i + 1).padStart(2, "0")}</div>
                  <h4>{t}</h4>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wg-campaign">
          <div className="wg-wrap">
            <p className="camp-lead">POSTECH의 AX는<br /><span className="pt">여러분의 손으로 만들어집니다.</span></p>
            <p className="camp-sub">
              기술에 대한 지식과 경험보다, <b>무궁무진한 상상력과 바꿔보려는 의지</b>가 더 중요합니다.<br />
              다음 반기, 여러분의 아이디어가 다음 사례집의 주인공이 되기를 기다립니다.
            </p>
            <div className="camp-contact">
              산출물에 대한 상세 정보 확인을 원하시면 <b>AIR센터</b>로 문의해 주세요.
              <a href="mailto:postech-air@postech.ac.kr">postech-air@postech.ac.kr</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
