import { Stage } from './stagesData';

export const stagesKo: Stage[] = [
  {
    id: 'discover',
    name: '발견',
    description: '문제 공간을 이해하고 기회를 식별합니다',
    collaborativeActivities: [
      '이해관계자 인터뷰',
      '비즈니스 목표 정의',
      '초기 문제 탐색',
      '팀 정렬 워크샵'
    ],
    deliverables: [
      {
        name: '문제 정의서',
        description: '해결해야 할 문제에 대한 명확한 표현',
        aiTips: [
          'AI를 사용하여 이해관계자 인터뷰 내용을 분석하고 주요 불편 사항 추출',
          '팀 검토를 위한 여러 문제 정의서 변형 생성',
          '편향을 확인하고 문제 프레이밍이 사용자 중심인지 확인'
        ],
        tools: ['Miro', 'FigJam', 'Notion', 'ChatGPT'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '프로젝트 개요서',
        description: '프로젝트 범위, 목표 및 제약 조건 개요',
        aiTips: [
          'AI가 회의록에서 초기 개요 작성 지원',
          '복잡한 요구사항을 이해하기 쉬운 섹션으로 요약',
          '유사 프로젝트 기반 일정 예측 생성'
        ],
        tools: ['Notion', 'Confluence', 'Google Docs'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '이해관계자 맵',
        description: '모든 이해관계자와 관계를 시각적으로 표현',
        aiTips: [
          'AI가 프로젝트 유형에 따른 이해관계자 카테고리 제안',
          '유사 프로젝트에서 누락된 이해관계자 식별',
          '영향력-관심도 매트릭스 자동 생성'
        ],
        tools: ['Miro', 'FigJam', 'Lucidchart'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      },
      {
        name: '도메인 리서치 노트',
        description: '산업 및 도메인별 지식 모음',
        aiTips: [
          'AI를 사용하여 연구 논문 및 보고서 요약',
          '여러 출처에서 주요 트렌드와 인사이트 추출',
          '연구 질문 프레임워크 생성',
          '⚠️ AI 생성 사실을 항상 1차 출처로 검증'
        ],
        tools: ['Notion', 'Evernote', 'Perplexity', 'Research databases'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      }
    ]
  },
  {
    id: 'define',
    name: '정의',
    description: '범위, 사용자 및 프로젝트 매개변수를 명확히 합니다',
    collaborativeActivities: [
      '범위 정의 워크샵',
      '사용자 페르소나 개발 세션',
      '저니 매핑 연습',
      '프로젝트 계획 회의'
    ],
    deliverables: [
      {
        name: '프로젝트 계획 (WBS)',
        description: '작업, 종속성 및 일정이 포함된 작업 분해 구조',
        aiTips: [
          'AI가 프로젝트 유형에 따른 WBS 템플릿 생성',
          '작업 종속성 및 중요 경로 제안',
          '과거 데이터를 기반으로 노력 추정'
        ],
        tools: ['Asana', 'Jira', 'Monday.com', 'Microsoft Project'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '범위 정의서',
        description: '프로젝트에 포함되거나 제외되는 항목의 명확한 경계',
        aiTips: [
          'AI가 범위 확대 위험 식별 지원',
          'MoSCoW 우선순위 프레임워크 생성',
          '기능에 대한 승인 기준 초안 작성'
        ],
        tools: ['Confluence', 'Notion', 'Google Docs'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '페르소나',
        description: '대상 고객 세그먼트를 나타내는 상세한 사용자 원형',
        aiTips: [
          '인구통계 및 심리통계 속성이 포함된 페르소나 템플릿 생성',
          '사용자 연구 데이터를 페르소나 내러티브로 합성',
          'A/B 테스트를 위한 페르소나 변형 생성',
          '⚠️ 실제 사용자 데이터로 AI 생성 페르소나 검증'
        ],
        tools: ['Figma', 'Miro', 'Xtensio', 'UXPressia'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      },
      {
        name: '현재 상태 여정 맵',
        description: '기존 문제점을 보여주는 현재 사용자 여정',
        aiTips: [
          'AI가 사용자 세션 데이터 분석하여 여정 패턴 식별',
          '사용자 피드백에서 감정 곡선 생성',
          '분석에서 마찰 지점 자동 강조'
        ],
        tools: ['Miro', 'FigJam', 'Smaply', 'UXPressia'],
        projectTypes: { newService: false, partialImprovement: true, fullRenewal: true }
      }
    ]
  },
  {
    id: 'research',
    name: '리서치',
    description: '사용자 인사이트 및 경쟁 인텔리전스를 수집합니다',
    collaborativeActivities: [
      '사용자 인터뷰 세션',
      '사용성 테스트',
      '경쟁 분석 검토',
      '연구 종합 워크샵'
    ],
    deliverables: [
      {
        name: '사용자 인터뷰 보고서',
        description: '사용자 인터뷰 결과 종합',
        aiTips: [
          '인터뷰 녹음 자동 전사 및 요약',
          'NLP를 사용하여 주요 인용문 및 테마 추출',
          '친화도 다이어그램 그룹화 생성',
          '⚠️ 사용자 프라이버시 보호 - AI 처리 전 데이터 익명화'
        ],
        tools: ['Dovetail', 'UserTesting', 'Otter.ai', 'Notion'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '경쟁사 분석',
        description: '경쟁사 제품 및 전략 평가',
        aiTips: [
          'AI가 경쟁사 웹사이트 스크래핑 및 기능 분석',
          'SWOT 분석 프레임워크 생성',
          '기능 격차 및 기회 식별',
          '경쟁사 업데이트 자동 추적'
        ],
        tools: ['Figma', 'Notion', 'SimilarWeb', 'SEMrush'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      },
      {
        name: '인사이트 보고서',
        description: '연구에서 도출된 주요 발견 및 실행 가능한 권장사항',
        aiTips: [
          '여러 연구 출처를 통합 인사이트로 종합',
          '요약 보고서 자동 생성',
          '연구 메트릭에서 데이터 시각화 생성',
          '정성적 및 정량적 데이터 전반의 패턴 식별'
        ],
        tools: ['Dovetail', 'Notion', 'Google Slides', 'Tableau'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '킥오프 자료',
        description: '프로젝트 킥오프 미팅을 위한 프레젠테이션 및 문서',
        aiTips: [
          'AI가 프로젝트 개요서에서 프레젠테이션 개요 생성',
          '발표자 노트 및 토킹 포인트 생성',
          '콘텐츠 유형에 따른 슬라이드 레이아웃 디자인'
        ],
        tools: ['Figma', 'Google Slides', 'Pitch', 'Keynote'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      }
    ]
  },
  {
    id: 'ideate',
    name: '아이디어 도출',
    description: '솔루션 컨셉을 생성하고 탐색합니다',
    collaborativeActivities: [
      '브레인스토밍 세션',
      '디자인 씽킹 워크샵',
      '컨셉 검증',
      '솔루션 우선순위 지정'
    ],
    deliverables: [
      {
        name: 'HMW 목록',
        description: '디자인 과제를 프레임하는 How Might We 질문',
        aiTips: [
          '문제 정의서에서 HMW 변형 생성',
          '더 넓은 탐색을 위한 리프레이밍 기법 제안',
          'HMW를 테마 또는 사용자 여정 단계별로 분류'
        ],
        tools: ['Miro', 'FigJam', 'Notion'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '컨셉 보드',
        description: '솔루션 컨셉 및 아이디어의 시각적 모음',
        aiTips: [
          'AI가 설명에서 컨셉 변형 생성',
          '시각적 영감 및 무드보드 자동 검색',
          '특정 사용 사례에 대한 UI 패턴 제안',
          '텍스트 설명에서 컨셉 스케치 생성'
        ],
        tools: ['Figma', 'Miro', 'Pinterest', 'Midjourney'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '사이트맵/IA',
        description: '정보 아키텍처 및 사이트 구조',
        aiTips: [
          '콘텐츠 인벤토리에서 사이트맵 구조 생성',
          '사용자 플로우 기반 네비게이션 패턴 제안',
          '카드 소팅 데이터 분석으로 IA 검증',
          '분류 및 라벨링 최적화'
        ],
        tools: ['Figma', 'Whimsical', 'Octopus.do', 'FlowMapp'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      },
      {
        name: '사용자 플로우',
        description: '사용자가 작업을 완료하기 위해 거치는 단계별 경로',
        aiTips: [
          'AI가 작업 설명에서 사용자 플로우 다이어그램 생성',
          '최적 경로 및 잠재적 단축키 식별',
          '의사 결정 지점 및 엣지 케이스 제안',
          '분석 데이터와 플로우 검증'
        ],
        tools: ['Figma', 'Whimsical', 'Miro', 'Overflow'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '기능 정의서',
        description: '기능 및 성능에 대한 상세 사양',
        aiTips: [
          '기능 설명에서 사용자 스토리 생성',
          '승인 기준 자동 생성',
          '기능을 사용자 요구 및 비즈니스 목표에 매핑',
          '점수 모델을 사용한 기능 우선순위 지정'
        ],
        tools: ['Jira', 'Notion', 'Confluence', 'ProductBoard'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '미래 상태 여정 맵',
        description: '제안된 개선 사항이 포함된 미래 사용자 여정',
        aiTips: [
          '현재-미래 여정 자동 비교',
          '개선 기회 시각화',
          '이상적인 경험을 위한 감정 곡선 생성',
          '터치포인트 혁신 제안'
        ],
        tools: ['Miro', 'FigJam', 'Smaply', 'UXPressia'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      }
    ]
  },
  {
    id: 'design',
    name: '디자인',
    description: '시각적 디자인 및 인터랙션 패턴을 생성합니다',
    collaborativeActivities: [
      '디자인 크리틱',
      '이해관계자 검토',
      '디자인 시스템 협업',
      '콘텐츠 전략 세션'
    ],
    deliverables: [
      {
        name: '와이어프레임',
        description: '저충실도 레이아웃 및 구조 목업',
        aiTips: [
          '사용자 플로우 설명에서 와이어프레임 생성',
          '디자인 패턴 기반 컴포넌트 자동 레이아웃',
          '반응형 중단점 및 레이아웃 제안',
          '스케치를 디지털 와이어프레임으로 변환'
        ],
        tools: ['Figma', 'Sketch', 'Balsamiq', 'Whimsical'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '비주얼 디자인',
        description: '브랜드 스타일이 적용된 고충실도 시각적 목업',
        aiTips: [
          '브랜드 가이드라인에서 컬러 팔레트 생성',
          '타이포그래피 조합 제안',
          '목업에 디자인 토큰 자동 적용',
          'A/B 테스트를 위한 디자인 변형 생성',
          '⚠️ 접근성을 위해 AI 생성 디자인 항상 검토'
        ],
        tools: ['Figma', 'Sketch', 'Adobe XD', 'Framer'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '컴포넌트 사양서',
        description: 'UI 컴포넌트의 상세 문서',
        aiTips: [
          'Figma에서 컴포넌트 문서 자동 생성',
          'Props 및 상태 사양 생성',
          '개발자를 위한 코드 스니펫 생성',
          '컴포넌트 변형 및 사용 가이드라인 문서화'
        ],
        tools: ['Figma', 'Storybook', 'Zeroheight', 'Notion'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      },
      {
        name: 'UX 라이팅 가이드',
        description: '콘텐츠 가이드라인 및 마이크로카피 표준',
        aiTips: [
          'UI 요소에 대한 마이크로카피 변형 생성',
          '톤 앤 보이스 일관성 확보',
          '오류 메시지 템플릿 생성',
          '현지화 및 번역 제안',
          '⚠️ 문화적 민감성을 위해 AI 생성 카피 검토'
        ],
        tools: ['Figma', 'Google Docs', 'Notion', 'Frontitude'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      }
    ]
  },
  {
    id: 'prototype',
    name: '프로토타입 & 검증',
    description: '인터랙티브 프로토타입을 구축하고 사용자 테스트를 수행합니다',
    collaborativeActivities: [
      '프로토타입 테스트 세션',
      '사용성 테스트',
      '접근성 검토',
      '반복 계획'
    ],
    deliverables: [
      {
        name: '인터랙티브 프로토타입',
        description: '사용자 테스트를 위한 클릭 가능한 프로토타입',
        aiTips: [
          '사용자 플로우 기반 화면 자동 연결',
          '현실적인 콘텐츠 및 데이터 생성',
          '인터랙션 애니메이션 제안',
          '다양한 시나리오에 대한 프로토타입 변형 생성'
        ],
        tools: ['Figma', 'Framer', 'ProtoPie', 'Principle'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '사용성 테스트 보고서',
        description: '사용성 테스트 세션 결과',
        aiTips: [
          '테스트 세션 자동 전사 및 분석',
          '작업 성공률 및 작업 수행 시간 메트릭 계산',
          '반복되는 사용성 문제 식별',
          '우선순위가 지정된 개선 권장사항 생성',
          '⚠️ AI 처리 시 참가자 프라이버시 보호'
        ],
        tools: ['UserTesting', 'Maze', 'Dovetail', 'Optimal Workshop'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '휴리스틱 평가',
        description: '사용성 휴리스틱에 대한 전문가 검토',
        aiTips: [
          'AI가 초기 휴리스틱 스크리닝 수행',
          '일반적인 위반에 대한 개선 제안',
          '디자인 모범 사례와 비교',
          '⚠️ 항상 인간 전문가 검토와 결합'
        ],
        tools: ['Figma', 'Notion', 'Google Sheets'],
        projectTypes: { newService: false, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '접근성 체크',
        description: 'WCAG 준수 감사 및 권장사항',
        aiTips: [
          '자동 명암비 검사',
          '스크린 리더 호환성 테스트',
          '키보드 네비게이션 검증',
          'ARIA 라벨 제안 생성',
          '⚠️ AI가 수동 접근성 테스트를 대체할 수 없음'
        ],
        tools: ['Figma plugins', 'axe DevTools', 'WAVE', 'Lighthouse'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      }
    ]
  },
  {
    id: 'handoff',
    name: '핸드오프 & 전달',
    description: '디자인 사양을 준비하고 개발팀에 전달합니다',
    collaborativeActivities: [
      '디자인-개발 핸드오프 미팅',
      '기술 타당성 검토',
      'QA 계획',
      '문서 검토'
    ],
    deliverables: [
      {
        name: 'UI 사양서',
        description: '개발자를 위한 상세 시각적 사양',
        aiTips: [
          '디자인에서 CSS/스타일링 코드 자동 생성',
          '간격 및 크기 토큰 추출',
          '레드라인 사양 자동 생성',
          '반응형 디자인 사양 생성',
          '여러 형식으로 디자인 토큰 내보내기'
        ],
        tools: ['Figma', 'Zeplin', 'Avocode', 'Inspect (Figma)'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: '인터랙션 사양서',
        description: '애니메이션, 전환 및 마이크로인터랙션 문서',
        aiTips: [
          '프로토타입에서 인터랙션 문서 생성',
          '애니메이션을 코드 사양으로 변환',
          '제스처 인터랙션 문서화',
          '타이밍 및 이징 함수 사양 생성'
        ],
        tools: ['Figma', 'ProtoPie', 'Principle', 'Lottie'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'QA 체크리스트',
        description: '품질 보증 기준 및 테스트 케이스',
        aiTips: [
          '사용자 플로우에서 테스트 케이스 생성',
          '디바이스/브라우저 호환성 매트릭스 생성',
          '엣지 케이스 및 오류 시나리오 제안',
          '회귀 테스트 체크리스트 자동 채우기'
        ],
        tools: ['Notion', 'Jira', 'TestRail', 'Google Sheets'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      }
    ]
  },
  {
    id: 'launch',
    name: '출시 & 반복',
    description: '배포, 모니터링 및 지속적으로 개선합니다',
    collaborativeActivities: [
      '출시 계획',
      '메트릭 검토 세션',
      '회고',
      '지속적 개선 계획'
    ],
    deliverables: [
      {
        name: '릴리스 노트',
        description: '각 릴리스의 기능 및 변경 사항에 대한 문서',
        aiTips: [
          '커밋 메시지에서 릴리스 노트 자동 생성',
          '다양한 대상을 위한 기능 업데이트 요약',
          '사용자 대상 변경 로그 생성',
          '내부 기술 노트 생성'
        ],
        tools: ['Notion', 'Confluence', 'GitHub', 'Jira'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      }
    ]
  }
];
