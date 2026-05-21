export interface Deliverable {
  name: string;
  description: string;
  aiTips: string[];
  tools: string[];
  projectTypes: {
    newService: boolean;
    partialImprovement: boolean;
    fullRenewal: boolean;
  };
}

export interface Stage {
  id: string;
  name: string;
  description: string;
  deliverables: Deliverable[];
  collaborativeActivities: string[];
}

export const stages: Stage[] = [
  {
    id: 'discover',
    name: 'Discover',
    description: 'Understand the problem space and identify opportunities',
    collaborativeActivities: [
      'Stakeholder interviews',
      'Business goal identification',
      'Initial problem exploration',
      'Team alignment workshops'
    ],
    deliverables: [
      {
        name: 'Problem Statement',
        description: 'Clear articulation of the problem to be solved',
        aiTips: [
          'Use AI to analyze stakeholder interview transcripts and extract key pain points',
          'Generate multiple problem statement variations for team review',
          'Check for bias and ensure problem framing is user-centric'
        ],
        tools: ['Miro', 'FigJam', 'Notion', 'ChatGPT'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'Project Brief',
        description: 'Overview of project scope, objectives, and constraints',
        aiTips: [
          'AI can help draft initial brief from meeting notes',
          'Summarize complex requirements into digestible sections',
          'Generate timeline estimates based on similar projects'
        ],
        tools: ['Notion', 'Confluence', 'Google Docs'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'Stakeholder Map',
        description: 'Visual representation of all stakeholders and their relationships',
        aiTips: [
          'AI can suggest stakeholder categories based on project type',
          'Identify potential missing stakeholders from similar projects',
          'Generate influence-interest matrix automatically'
        ],
        tools: ['Miro', 'FigJam', 'Lucidchart'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      },
      {
        name: 'Domain Research Notes',
        description: 'Compilation of industry and domain-specific knowledge',
        aiTips: [
          'Use AI to summarize research articles and reports',
          'Extract key trends and insights from multiple sources',
          'Generate research question frameworks',
          '⚠️ Always verify AI-generated facts with primary sources'
        ],
        tools: ['Notion', 'Evernote', 'Perplexity', 'Research databases'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      }
    ]
  },
  {
    id: 'define',
    name: 'Define',
    description: 'Clarify scope, users, and project parameters',
    collaborativeActivities: [
      'Scope definition workshops',
      'User persona development sessions',
      'Journey mapping exercises',
      'Project planning meetings'
    ],
    deliverables: [
      {
        name: 'Project Plan (WBS)',
        description: 'Work breakdown structure with tasks, dependencies, and timeline',
        aiTips: [
          'AI can generate WBS templates based on project type',
          'Suggest task dependencies and critical path',
          'Estimate effort based on historical data'
        ],
        tools: ['Asana', 'Jira', 'Monday.com', 'Microsoft Project'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'Scope Definition',
        description: 'Clear boundaries of what is and is not included in the project',
        aiTips: [
          'AI can help identify scope creep risks',
          'Generate MoSCoW prioritization frameworks',
          'Draft acceptance criteria for features'
        ],
        tools: ['Confluence', 'Notion', 'Google Docs'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'Persona',
        description: 'Detailed user archetypes representing target audience segments',
        aiTips: [
          'Generate persona templates with demographic and psychographic attributes',
          'Synthesize user research data into persona narratives',
          'Create persona variations for A/B testing',
          '⚠️ Validate AI-generated personas with real user data'
        ],
        tools: ['Figma', 'Miro', 'Xtensio', 'UXPressia'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      },
      {
        name: 'As-is Journey Map',
        description: 'Current state user journey showing existing pain points',
        aiTips: [
          'AI can analyze user session data to identify journey patterns',
          'Generate emotion curves from user feedback',
          'Highlight friction points automatically from analytics'
        ],
        tools: ['Miro', 'FigJam', 'Smaply', 'UXPressia'],
        projectTypes: { newService: false, partialImprovement: true, fullRenewal: true }
      }
    ]
  },
  {
    id: 'research',
    name: 'Research',
    description: 'Gather user insights and competitive intelligence',
    collaborativeActivities: [
      'User interview sessions',
      'Usability testing',
      'Competitive analysis reviews',
      'Research synthesis workshops'
    ],
    deliverables: [
      {
        name: 'User Interview Report',
        description: 'Synthesis of findings from user interviews',
        aiTips: [
          'Auto-transcribe and summarize interview recordings',
          'Extract key quotes and themes using NLP',
          'Generate affinity diagram groupings',
          '⚠️ Protect user privacy - anonymize data before AI processing'
        ],
        tools: ['Dovetail', 'UserTesting', 'Otter.ai', 'Notion'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'Competitor Analysis',
        description: 'Evaluation of competitor products and strategies',
        aiTips: [
          'AI can scrape and analyze competitor websites for features',
          'Generate SWOT analysis frameworks',
          'Identify feature gaps and opportunities',
          'Track competitor updates automatically'
        ],
        tools: ['Figma', 'Notion', 'SimilarWeb', 'SEMrush'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      },
      {
        name: 'Insight Report',
        description: 'Key findings and actionable recommendations from research',
        aiTips: [
          'Synthesize multiple research sources into unified insights',
          'Generate executive summaries automatically',
          'Create data visualizations from research metrics',
          'Identify patterns across qualitative and quantitative data'
        ],
        tools: ['Dovetail', 'Notion', 'Google Slides', 'Tableau'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'Kick-off Materials',
        description: 'Presentations and documents for project kick-off meetings',
        aiTips: [
          'AI can generate presentation outlines from project briefs',
          'Create speaker notes and talking points',
          'Design slide layouts based on content type'
        ],
        tools: ['Figma', 'Google Slides', 'Pitch', 'Keynote'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      }
    ]
  },
  {
    id: 'ideate',
    name: 'Ideate',
    description: 'Generate and explore solution concepts',
    collaborativeActivities: [
      'Brainstorming sessions',
      'Design thinking workshops',
      'Concept validation',
      'Solution prioritization'
    ],
    deliverables: [
      {
        name: 'HMW List',
        description: 'How Might We questions that frame design challenges',
        aiTips: [
          'Generate HMW variations from problem statements',
          'Suggest reframing techniques for broader exploration',
          'Categorize HMWs by theme or user journey stage'
        ],
        tools: ['Miro', 'FigJam', 'Notion'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'Concept Board',
        description: 'Visual collection of solution concepts and ideas',
        aiTips: [
          'AI can generate concept variations from descriptions',
          'Find visual inspiration and moodboards automatically',
          'Suggest UI patterns for specific use cases',
          'Generate concept sketches from text descriptions'
        ],
        tools: ['Figma', 'Miro', 'Pinterest', 'Midjourney'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'Sitemap/IA',
        description: 'Information architecture and site structure',
        aiTips: [
          'Generate sitemap structures from content inventory',
          'Suggest navigation patterns based on user flows',
          'Validate IA with card sorting data analysis',
          'Optimize taxonomy and labeling'
        ],
        tools: ['Figma', 'Whimsical', 'Octopus.do', 'FlowMapp'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      },
      {
        name: 'User Flow',
        description: 'Step-by-step paths users take to complete tasks',
        aiTips: [
          'AI can generate user flow diagrams from task descriptions',
          'Identify optimal paths and potential shortcuts',
          'Suggest decision points and edge cases',
          'Validate flows against analytics data'
        ],
        tools: ['Figma', 'Whimsical', 'Miro', 'Overflow'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'Function Definition',
        description: 'Detailed specification of features and capabilities',
        aiTips: [
          'Generate user stories from feature descriptions',
          'Create acceptance criteria automatically',
          'Map features to user needs and business goals',
          'Prioritize features using scoring models'
        ],
        tools: ['Jira', 'Notion', 'Confluence', 'ProductBoard'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'To-be Journey Map',
        description: 'Future state user journey with proposed improvements',
        aiTips: [
          'Compare as-is vs to-be journeys automatically',
          'Visualize improvement opportunities',
          'Generate emotion curves for ideal experiences',
          'Suggest touchpoint innovations'
        ],
        tools: ['Miro', 'FigJam', 'Smaply', 'UXPressia'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      }
    ]
  },
  {
    id: 'design',
    name: 'Design',
    description: 'Create visual designs and interaction patterns',
    collaborativeActivities: [
      'Design critiques',
      'Stakeholder reviews',
      'Design system collaboration',
      'Content strategy sessions'
    ],
    deliverables: [
      {
        name: 'Wireframe',
        description: 'Low-fidelity layout and structure mockups',
        aiTips: [
          'Generate wireframes from user flow descriptions',
          'Auto-layout components based on design patterns',
          'Suggest responsive breakpoints and layouts',
          'Convert sketches to digital wireframes'
        ],
        tools: ['Figma', 'Sketch', 'Balsamiq', 'Whimsical'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'Visual Design',
        description: 'High-fidelity visual mockups with brand styling',
        aiTips: [
          'Generate color palettes from brand guidelines',
          'Suggest typography pairings',
          'Auto-apply design tokens to mockups',
          'Create design variations for A/B testing',
          '⚠️ Always review AI-generated designs for accessibility'
        ],
        tools: ['Figma', 'Sketch', 'Adobe XD', 'Framer'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'Component Specification',
        description: 'Detailed documentation of UI components',
        aiTips: [
          'Auto-generate component documentation from Figma',
          'Create props and state specifications',
          'Generate code snippets for developers',
          'Document component variants and usage guidelines'
        ],
        tools: ['Figma', 'Storybook', 'Zeroheight', 'Notion'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      },
      {
        name: 'UX Writing Guide',
        description: 'Content guidelines and microcopy standards',
        aiTips: [
          'Generate microcopy variations for UI elements',
          'Ensure tone and voice consistency',
          'Create error message templates',
          'Localization and translation suggestions',
          '⚠️ Review AI-generated copy for cultural sensitivity'
        ],
        tools: ['Figma', 'Google Docs', 'Notion', 'Frontitude'],
        projectTypes: { newService: true, partialImprovement: false, fullRenewal: true }
      }
    ]
  },
  {
    id: 'prototype',
    name: 'Prototype & Validate',
    description: 'Build interactive prototypes and test with users',
    collaborativeActivities: [
      'Prototype testing sessions',
      'Usability testing',
      'Accessibility reviews',
      'Iteration planning'
    ],
    deliverables: [
      {
        name: 'Interactive Prototype',
        description: 'Clickable prototype for user testing',
        aiTips: [
          'Auto-link screens based on user flows',
          'Generate realistic content and data',
          'Suggest interaction animations',
          'Create prototype variations for different scenarios'
        ],
        tools: ['Figma', 'Framer', 'ProtoPie', 'Principle'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'Usability Test Report',
        description: 'Findings from usability testing sessions',
        aiTips: [
          'Auto-transcribe and analyze testing sessions',
          'Calculate task success rates and time-on-task metrics',
          'Identify recurring usability issues',
          'Generate prioritized improvement recommendations',
          '⚠️ Protect participant privacy in AI processing'
        ],
        tools: ['UserTesting', 'Maze', 'Dovetail', 'Optimal Workshop'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'Heuristic Evaluation',
        description: 'Expert review against usability heuristics',
        aiTips: [
          'AI can perform initial heuristic screening',
          'Suggest improvements for common violations',
          'Compare against design best practices',
          '⚠️ Always combine with human expert review'
        ],
        tools: ['Figma', 'Notion', 'Google Sheets'],
        projectTypes: { newService: false, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'Accessibility Check',
        description: 'WCAG compliance audit and recommendations',
        aiTips: [
          'Automated contrast ratio checking',
          'Screen reader compatibility testing',
          'Keyboard navigation validation',
          'Generate ARIA label suggestions',
          '⚠️ AI cannot replace manual accessibility testing'
        ],
        tools: ['Figma plugins', 'axe DevTools', 'WAVE', 'Lighthouse'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      }
    ]
  },
  {
    id: 'handoff',
    name: 'Handoff & Deliver',
    description: 'Prepare and deliver design specifications to development',
    collaborativeActivities: [
      'Design-dev handoff meetings',
      'Technical feasibility reviews',
      'QA planning',
      'Documentation reviews'
    ],
    deliverables: [
      {
        name: 'UI Specification',
        description: 'Detailed visual specifications for developers',
        aiTips: [
          'Auto-generate CSS/styling code from designs',
          'Extract spacing and sizing tokens',
          'Create redline specifications automatically',
          'Generate responsive design specifications',
          'Export design tokens in multiple formats'
        ],
        tools: ['Figma', 'Zeplin', 'Avocode', 'Inspect (Figma)'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'Interaction Specification',
        description: 'Documentation of animations, transitions, and micro-interactions',
        aiTips: [
          'Generate interaction documentation from prototypes',
          'Convert animations to code specifications',
          'Document gesture interactions',
          'Create timing and easing function specs'
        ],
        tools: ['Figma', 'ProtoPie', 'Principle', 'Lottie'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      },
      {
        name: 'QA Checklist',
        description: 'Quality assurance criteria and test cases',
        aiTips: [
          'Generate test cases from user flows',
          'Create device/browser compatibility matrices',
          'Suggest edge cases and error scenarios',
          'Auto-populate regression test checklists'
        ],
        tools: ['Notion', 'Jira', 'TestRail', 'Google Sheets'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      }
    ]
  },
  {
    id: 'launch',
    name: 'Launch & Iterate',
    description: 'Deploy, monitor, and continuously improve',
    collaborativeActivities: [
      'Launch planning',
      'Metrics review sessions',
      'Retrospectives',
      'Continuous improvement planning'
    ],
    deliverables: [
      {
        name: 'Release Notes',
        description: 'Documentation of features and changes for each release',
        aiTips: [
          'Auto-generate release notes from commit messages',
          'Summarize feature updates for different audiences',
          'Create user-facing change logs',
          'Generate internal technical notes'
        ],
        tools: ['Notion', 'Confluence', 'GitHub', 'Jira'],
        projectTypes: { newService: true, partialImprovement: true, fullRenewal: true }
      }
    ]
  }
];

export const aiGuidelines = {
  principles: [
    {
      title: 'Human Oversight Required',
      description: 'AI is a tool to augment, not replace, human expertise. All AI outputs must be reviewed and validated by experienced professionals.',
      examples: [
        'Review AI-generated research summaries against original sources',
        'Validate persona data with real user research',
        'Test AI-suggested designs with actual users'
      ]
    },
    {
      title: 'Data Privacy & Security',
      description: 'Protect user data and sensitive information when using AI tools.',
      examples: [
        'Anonymize user data before AI processing',
        'Use enterprise AI tools with proper data handling agreements',
        'Never share confidential client information with public AI models',
        'Review AI tool privacy policies and data retention practices'
      ]
    },
    {
      title: 'Hallucination Prevention',
      description: 'AI can generate plausible but incorrect information. Always verify facts and claims.',
      examples: [
        'Cross-reference AI research findings with credible sources',
        'Validate statistical claims and metrics',
        'Test AI-generated code and specifications',
        'Verify accessibility and compliance claims'
      ]
    },
    {
      title: 'Bias Awareness',
      description: 'AI models can perpetuate biases from training data. Actively work to identify and mitigate bias.',
      examples: [
        'Review AI-generated personas for stereotypes',
        'Ensure diverse representation in AI-created content',
        'Test AI outputs with diverse user groups',
        'Question assumptions in AI recommendations'
      ]
    },
    {
      title: 'Transparency',
      description: 'Be transparent about AI usage in deliverables and with stakeholders.',
      examples: [
        'Document which deliverables used AI assistance',
        'Disclose AI-generated content to clients when appropriate',
        'Cite AI tools used in research and analysis',
        'Explain AI decision-making processes to teams'
      ]
    }
  ],
  bestPractices: [
    'Start with clear, specific prompts to get better AI outputs',
    'Iterate on AI outputs rather than accepting first results',
    'Combine AI automation with human creativity and judgment',
    'Use AI for time-consuming tasks like summarization and data analysis',
    'Keep humans in the loop for strategic decisions and creative direction',
    'Regularly update AI skills as technology evolves',
    'Share learnings about AI usage with your team'
  ]
};
