export type Language = 'ko' | 'en';

export const translations = {
  ko: {
    // Header
    appTitle: 'With AI',
    appSubtitle: 'AI 기반 8단계 디자인 프로세스',
    deliverables: '산출물',

    // Navigation
    overview: '개요',
    search: '검색',
    aiGuidelines: 'AI 가이드라인',
    projectTypeMatrix: '프로젝트 유형 매트릭스',

    // Dashboard
    welcomeTitle: 'UX 서비스 플랫폼에 오신 것을 환영합니다',
    welcomeSubtitle: '8단계 UX 디자인 프로세스에 대한 포괄적인 가이드입니다. AI 기반 권장사항, 협업 프레임워크 및 모든 프로젝트 유형에 대한 산출물 템플릿을 제공합니다.',
    processStages: '프로세스 단계',
    totalDeliverables: '전체 산출물',
    aiEnhanced: 'AI 향상',
    collaborativeActivities: '협업 활동',
    mainActivities: '주요 활동',
    promptExamples: '프롬프트 예시',
    copyPrompt: '프롬프트 복사',
    copied: '복사됨!',
    theProcess: '8단계 프로세스',
    processDescription: '발견에서 출시까지 포괄적인 워크플로우를 따르세요',
    processFlowTitle: '프로세스 플로우 시각화',
    items: '항목',

    // Getting Started
    gettingStarted: '시작하기',
    gettingStartedIntro: '위의 단계 탭을 사용하여 UX 프로세스를 탐색하세요. 각 단계에는 다음이 포함됩니다:',
    deliverablesDesc: 'AI 팁 및 도구 권장사항이 포함된 상세 사양',
    collaborativeActivitiesDesc: '팀 워크샵 및 퍼실리테이션 프레임워크',
    projectTypeMappingDesc: '프로젝트 유형에 적용되는 산출물',
    aiIntegrationDesc: '책임감 있는 AI 사용 가이드라인 및 자동화 기회',

    // Stage Card
    stage: '단계',
    of: '/',
    activities: '활동',
    aiUtilizationTips: 'AI 활용 팁',
    recommendedTools: '권장 도구',
    applicableProjectTypes: '적용 가능한 프로젝트 유형',

    // Project Types
    newServiceBuild: '신규 서비스 구축',
    partialImprovement: '부분 개선',
    fullRenewal: '전체 리뉴얼',

    // AI Guidelines
    aiGuidelinesTitle: 'AI 사용 가이드라인',
    aiGuidelinesSubtitle: 'AI는 UX 작업을 위한 강력한 도구이지만 책임감 있는 사용이 필요합니다. 프로젝트에서 품질 높고 윤리적이며 효과적인 AI 통합을 보장하기 위해 다음 가이드라인을 따르세요.',
    corePrinciples: '핵심 원칙',
    bestPractices: '모범 사례',
    examples: '예시:',

    // Search
    searchTitle: '산출물 검색',
    searchSubtitle: '모든 단계에서 산출물, AI 팁, 도구 등을 찾으세요',
    searchPlaceholder: '산출물, AI 팁 또는 도구 검색...',
    projectType: '프로젝트 유형',
    allTypes: '모든 유형',
    found: '찾음',
    deliverable: '산출물',
    noResults: '검색 조건과 일치하는 산출물이 없습니다',

    // Project Type Matrix
    matrixTitle: '프로젝트 유형 매트릭스',
    matrixSubtitle: '모든 프로젝트 유형에 걸친 {total}개 산출물 매핑',
    understandingProjectTypes: '프로젝트 유형 이해',
    newServiceDesc: '완전히 새로운 제품 또는 서비스를 처음부터 만들기',
    partialImprovementDesc: '기존 제품 내에서 특정 기능 또는 플로우 개선',
    fullRenewalDesc: '기존 서비스의 포괄적인 재설계 및 재구축',
    deliverableMatrix: '산출물 매트릭스',
    whichDeliverablesApply: '각 프로젝트 유형에 적용되는 산출물',

    // Navigation
    previous: '이전',
    next: '다음',

    // Footer
    footerText: 'UX 서비스 구축 플랫폼 • 8단계 • AI 향상 워크플로우',
    footerWarning: '⚠️ 기억하세요: AI는 인간 전문성을 보완합니다. 항상 전문가 판단으로 AI 출력을 검증하세요.',

    // Tooltips
    searchDeliverablesTooltip: '산출물 검색',
    aiGuidelinesTooltip: 'AI 가이드라인',
    projectTypeMatrixTooltip: '프로젝트 유형 매트릭스',
  },
  en: {
    // Header
    appTitle: 'UX Service Platform',
    appSubtitle: 'AI-Enhanced 8-Stage Design Process',
    deliverables: 'Deliverables',

    // Navigation
    overview: 'Overview',
    search: 'Search',
    aiGuidelines: 'AI Guidelines',
    projectTypeMatrix: 'Project Type Matrix',

    // Dashboard
    welcomeTitle: 'Welcome to the UX Service Platform',
    welcomeSubtitle: 'A comprehensive guide through the 8-stage UX design process, with AI-powered recommendations, collaborative frameworks, and deliverable templates for every project type.',
    processStages: 'Process Stages',
    totalDeliverables: 'Total Deliverables',
    aiEnhanced: 'AI-Enhanced',
    collaborativeActivities: 'Collaborative Activities',
    mainActivities: 'Main Activities',
    promptExamples: 'Prompt Examples',
    copyPrompt: 'Copy Prompt',
    copied: 'Copied!',
    theProcess: 'The 8-Stage Process',
    processDescription: 'Follow this comprehensive workflow from discovery to launch',
    processFlowTitle: 'Process Flow Visualization',
    items: 'items',

    // Getting Started
    gettingStarted: 'Getting Started',
    gettingStartedIntro: 'Use the stage tabs above to navigate through the UX process. Each stage contains:',
    deliverablesDesc: 'Detailed specifications with AI tips and tool recommendations',
    collaborativeActivitiesDesc: 'Team workshops and facilitation frameworks',
    projectTypeMappingDesc: 'Which deliverables apply to your project type',
    aiIntegrationDesc: 'Responsible AI usage guidelines and automation opportunities',

    // Stage Card
    stage: 'Stage',
    of: 'of',
    activities: 'Activities',
    aiUtilizationTips: 'AI Utilization Tips',
    recommendedTools: 'Recommended Tools',
    applicableProjectTypes: 'Applicable Project Types',

    // Project Types
    newServiceBuild: 'New Service Build',
    partialImprovement: 'Partial Improvement',
    fullRenewal: 'Full Renewal',

    // AI Guidelines
    aiGuidelinesTitle: 'AI Usage Guidelines',
    aiGuidelinesSubtitle: 'AI is a powerful tool for UX work, but it requires responsible use. Follow these guidelines to ensure quality, ethical, and effective AI integration in your projects.',
    corePrinciples: 'Core Principles',
    bestPractices: 'Best Practices',
    examples: 'Examples:',

    // Search
    searchTitle: 'Search Deliverables',
    searchSubtitle: 'Find deliverables, AI tips, tools, and more across all stages',
    searchPlaceholder: 'Search deliverables, AI tips, or tools...',
    projectType: 'Project Type',
    allTypes: 'All Types',
    found: 'Found',
    deliverable: 'deliverable',
    noResults: 'No deliverables found matching your criteria',

    // Project Type Matrix
    matrixTitle: 'Project Type Matrix',
    matrixSubtitle: 'Mapping {total} deliverables across all project types',
    understandingProjectTypes: 'Understanding Project Types',
    newServiceDesc: 'Creating a completely new product or service from the ground up',
    partialImprovementDesc: 'Enhancing specific features or flows within an existing product',
    fullRenewalDesc: 'Comprehensive redesign and rebuild of an existing service',
    deliverableMatrix: 'Deliverable Matrix',
    whichDeliverablesApply: 'Which deliverables apply to each project type',

    // Navigation
    previous: 'Previous',
    next: 'Next',

    // Footer
    footerText: 'UX Service Building Platform • 8 Stages • AI-Enhanced Workflows',
    footerWarning: '⚠️ Remember: AI augments human expertise. Always validate AI outputs with professional judgment.',

    // Tooltips
    searchDeliverablesTooltip: 'Search Deliverables',
    aiGuidelinesTooltip: 'AI Guidelines',
    projectTypeMatrixTooltip: 'Project Type Matrix',
  }
};
