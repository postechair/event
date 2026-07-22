import type { Metadata } from "next";
import BackBar from "@/components/BackBar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Working Group 상반기 활동 사례 | 2026 AIR EVENT",
  description:
    "POSTECH AIR센터 Working Group 2026 상반기 활동 사례 — 표준 데이터 대시보드 실습에서 출발해 실제 업무 도메인으로 확장한 익명 산출물 사례집. 기술 스택·핵심 기능·작업 방식 정리.",
};

/* 완전 익명 사례집 — 학생 식별정보·보안이슈·평가 배제, 도메인 일반화 (오너 승인 방침) */
type Track = "심화" | "응용" | "기본";
const TRACK_LABEL: Record<Track, string> = {
  심화: "심화 · 독자 풀스택",
  응용: "응용 · 업무 도메인 재구성",
  기본: "기본 · 표준 실습 완성",
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
    stack: ["FastAPI", "React 19", "SQLite", "python-pptx", "Playwright"],
    features: [
      "엑셀 업로드 시 부서 업무현황을 자동 취합·재분류",
      "기관 공식 양식 주간업무보고를 표·도형·한글 폰트까지 PPT로 정밀 자동 생성",
      "뉴스 RSS를 인물·키워드로 자동 검색해 동향 수집(병렬 처리)",
      "무인증 공개 신청 포털 + 첨부 화이트리스트 검증",
    ],
    way: "100여 개 파트의 구현 이력·버그·교훈을 개발 일지로 축적하며 2.5만 줄 규모를 반복 개선. 코딩 에이전트·테스트(pytest·Playwright)를 워크플로에 통합.",
  },
  {
    track: "심화",
    title: "3D 지구본 자료 탐색기 + 연구성과 벤치마크 대시보드",
    summary: "두 개의 독자 풀스택을 테스트·CI·문서화까지 갖춰 완성.",
    stack: ["Next.js", "Cesium", "FastAPI", "SQLAlchemy", "Recharts", "Vitest"],
    features: [
      "검색어로 찾은 자료의 지리 정보를 3D 지구본에 마커·영역으로 시각화",
      "외부 키는 BFF(중계 서버)에서만 사용하고 미설정 시 목업으로 폴백",
      "여러 학술 소스를 수집·기관명 정규화해 연구성과 연도별 랭킹·지표 대시보드로 제공",
      "API 키 라운드로빈 + 429 쿨다운 등 수집 안정화 설계",
    ],
    way: "78개 커밋을 feat/fix/docs 컨벤션으로 관리하고, 의사결정 로그·기술설명서·자기 개발방식 분석까지 문서화. “타이피스트가 아닌 디렉터”로서 AI 산출물을 검증·정리.",
  },
  {
    track: "심화",
    title: "교원 연구정보 크롤러 + AI 주간보고 요약기",
    summary: "웹·공공 연구정보 수집과 멀티 LLM 자동요약을 결합한 자동화.",
    stack: ["Python", "BeautifulSoup", "Streamlit", "Plotly", "Gemini", "OpenAI"],
    features: [
      "연구자 검색 페이지를 페이징 크롤링하고 공공 연구정보로 세부전공·과제를 매핑(체크포인트 재개)",
      "수백 명 규모 마스터 DB로 KPI 카드·학과별 분포·과제 카드뷰·검색 필터 대시보드 구성",
      "보고서 전문을 LLM 2회 호출로 담당자별 업무·팀 개요 추출, 규칙기반(regex) 폴백 병행",
    ],
    way: "규칙기반과 LLM 파서를 이중으로 두는 폴백 설계, 로컬/원격 실행 분리 등 실무 견고성을 고려. 멀티 LLM(Gemini·OpenAI·Claude)을 용도별로 활용.",
  },
  {
    track: "심화",
    title: "연구규정 RAG 챗봇 + 국제평가 Peer 수집 시스템",
    summary: "로컬 전문검색 기반 RAG와 외부 학술 API 수집을 함께 구현.",
    stack: ["Node.js", "Express", "SQLite FTS5", "멀티 LLM 폴백", "OCR"],
    features: [
      "규정·업무자료 기반 RAG 답변 — SQLite FTS5 로컬 전문검색으로 검색 비용 최소화",
      "LLM 폴백 체인(1차 → 2차 → 3차)으로 가용성 확보, OCR로 문서 이미지까지 처리",
      "학술 API로 공동연구자를 조회해 Peer 후보를 수집·자동 링크",
      "프롬프트 인젝션·세션 고정 방어 등 실무급 보안",
    ],
    way: "route/service/db/middleware 계층을 교과서적으로 분리하고 전 파일에 한국어 docstring. 코딩 에이전트 협업 이력을 문서로 유지.",
  },
  {
    track: "심화",
    title: "KPI 체계 진단 탐색기 + 사업 효율성 대시보드",
    summary: "지표 체계와 효율성 분석을 정보설계까지 갖춰 웹으로 구현.",
    stack: ["Next.js", "React", "Tailwind", "Streamlit", "PyQt"],
    features: [
      "KPI 계층(대·중·소) 트리 탐색기 + 정의서 정합성 진단 배지(산식 누락·명칭 불일치 등)",
      "Python이 계산한 효율성 점수를 API로 받아 등급 분포·차트로 시각화(화면단 재계산 없이 단일 근거 유지)",
      "여러 형식의 파일을 서식 보존하며 하나의 PDF로 병합하는 데스크톱 도구",
    ],
    way: "단일 페이지에서 다중 페이지 앱으로 확장하며 디자인 토큰 중앙화·컴포넌트 재사용. 계산 로직과 표현을 분리해 데이터 정합성 원칙을 지킴.",
  },
  {
    track: "응용",
    title: "면담 신청 관리 대시보드",
    summary: "표준 실습을 실제 행정 업무(면담 예약·집계)로 재구성.",
    stack: ["Streamlit", "SQLite", "Plotly", "pandas", "openpyxl"],
    features: [
      "복합키 UPSERT·외래키를 갖춘 신청 데이터 모델",
      "요일×시간 히트맵, 담당자별 통계, 학과×유형 크로스탭, 월별 추이",
      "엑셀 업로드 이력·레코드 CRUD·샘플 템플릿 생성/다운로드",
    ],
    way: "표준 GPA 대시보드 실습을 마친 뒤 자기 업무를 상정한 독자 프로젝트로 확장(약 2,500줄). 함수 분리·색상 상수화·촘촘한 주석.",
  },
  {
    track: "응용",
    title: "이수현황 자동 리포트 (CLI + 웹)",
    summary: "헤더가 제각각인 엑셀도 견디는 방어적 집계 자동화.",
    stack: ["Python", "pandas", "Streamlit", "xlsxwriter", "CLI"],
    features: [
      "컬럼 후보 자동 탐지(한/영 별칭 매핑)로 서로 다른 양식의 파일을 그대로 처리",
      "이수 여부 정규화 → 이수율 피벗 → 미이수자 추출 → 다중 시트 서식 리포트 생성",
      "동일 로직을 CLI 배치 도구와 웹 뷰어 두 형태로 제공",
    ],
    way: "표준 실습을 다른 업무 도메인(이수 관리)으로 재해석하고, 실데이터의 형식 편차를 견디는 방어적 엔지니어링을 자기주도로 추가.",
  },
  {
    track: "응용",
    title: "성적 대시보드의 코호트 분석 확장",
    summary: "표준 실습을 분석 깊이 방향으로 확장한 사례.",
    stack: ["Streamlit", "pandas", "numpy", "Plotly", "SQLite"],
    features: [
      "계열(공학·이학) 차원을 추가하고 기존 DB 스키마를 마이그레이션(ALTER)으로 진화",
      "입학년도별 코호트 추이, 개인 vs 코호트 평균 이중 기준선",
      "박스플롯 이상치·히스토그램·인라인 CRUD(delta 추적)",
    ],
    way: "커스텀 CSS·hover 템플릿·필터 리셋 등 프레임워크 관용구를 정확히 구사. 데이터 모델을 살아있게 진화시키는 접근.",
  },
  {
    track: "기본",
    title: "서식 엑셀 리포트 자동 생성",
    summary: "표준 커리큘럼 전 과정을 완주하고 실무형 리포트 산출까지.",
    stack: ["Streamlit", "pandas", "Plotly", "xlsxwriter"],
    features: [
      "학과×입학년도 피벗(합계 행·열)과 부문별 통계",
      "업로드 한 번에 여러 시트로 서식화된 엑셀 리포트를 자동 생성",
      "선택 항목이 있으면 조건부로 차트를 추가하는 유연한 집계",
    ],
    way: "표준 실습 4단계를 끝까지 완주하고, 함수 단위 분해·docstring으로 “집계 → 서식 리포트” 파이프라인을 완성.",
  },
  {
    track: "기본",
    title: "정규화 스키마로 도메인 재적용",
    summary: "표준 패턴을 새 업무에 옮기며 관계형 설계를 적용.",
    stack: ["Streamlit", "pandas", "Plotly", "SQLite", "openpyxl"],
    features: [
      "두 테이블(마스터 ↔ 기록)을 외래키로 잇는 정규화 스키마",
      "집계 로직을 별도 모듈로 분리(UI·로직 분리)",
      "기관 브랜드 컬러 테마를 적용한 대시보드",
    ],
    way: "표준 성적 대시보드 패턴을 면담 분석이라는 새 도메인으로 재적용하고, 관심사 분리·정규화 등 소프트웨어 설계 원칙을 반영.",
  },
];

const PATTERNS: [string, string][] = [
  ["AI 코딩 에이전트를 페어로", "Claude Code 등 코딩 에이전트를 짝 삼아 설계·구현·디버깅을 함께 진행한 흔적이 대다수 산출물에 공통으로 나타났습니다."],
  ["표준 예제 → 내 업무로", "Streamlit·SQLite·Plotly 표준 실습에서 출발해, 면담 관리·이수 집계·업무 보고 등 각자의 실제 업무 도메인으로 재해석했습니다."],
  ["결정과 이력의 문서화", "CLAUDE.md·AGENTS.md 같은 문서에 의사결정과 개발 이력을 남기고, 일부는 100여 개 파트의 개발 일지로 축적했습니다."],
  ["스스로 검증하는 습관", "pytest·Playwright·수동 점검으로 만든 것을 스스로 검증하고, 정규화·모듈화·단일 근거(SSoT) 같은 설계 원칙을 적용했습니다."],
];

export default function WorkingGroupCases() {
  const tracks: Track[] = ["심화", "응용", "기본"];
  return (
    <>
      <BackBar />
      <main>
        <section className="wg-hero">
          <div className="wg-wrap">
            <div className="eyebrow">Working Group · 2026 상반기</div>
            <h1 className="wg-title">함께 만든 것들</h1>
            <p className="wg-lede">
              워킹그룹은 <b>Streamlit · SQLite · Plotly 데이터 대시보드</b> 표준 실습에서 출발했습니다. 여러 참여자가 여기서 멈추지 않고
              <b> 자기 업무 도메인</b>으로 프로젝트를 재구성했고, 일부는 RAG 챗봇·멀티 LLM 자동화·3D 시각화·업무 자동화 플랫폼까지 나아갔습니다.
              아래는 상반기 산출물 중 대표 사례를 <b>익명</b>으로 정리한 것입니다.
            </p>
            <p className="wg-note">※ 개인 식별정보 없이 프로젝트의 기술적 특징·기능·작업 방식만 담았습니다.</p>
          </div>
        </section>

        {tracks.map((tk) => {
          const items = CASES.filter((c) => c.track === tk);
          return (
            <section className="wg-sec" key={tk}>
              <div className="wg-wrap">
                <h2 className="wg-sech"><span className={"trk trk-" + tk}>{TRACK_LABEL[tk]}</span></h2>
                <div className="case-grid">
                  {items.map((c) => (
                    <article className="case" key={c.title}>
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
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="wg-sec wg-sec-alt">
          <div className="wg-wrap">
            <h2 className="wg-sech2">작업 방식에서 관찰된 공통 패턴</h2>
            <div className="pat-grid">
              {PATTERNS.map(([t, d]) => (
                <div className="pat" key={t}><h4>{t}</h4><p>{d}</p></div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
