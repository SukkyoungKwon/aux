import { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Slider, ToggleButtonGroup, ToggleButton, Chip } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { translations, Language } from '../data/translations';

interface ProjectSetupProps {
  language: Language;
  onComplete: (config: ProjectConfig) => void;
}

export interface ProjectConfig {
  projectType: string;
  duration: string;
  teamSize: number;
}

const stageColors = [
  '#667eea',
  '#764ba2',
  '#ec4899',
  '#8b5cf6',
  '#3b82f6',
  '#06b6d4',
  '#10b981',
  '#f59e0b',
];

export function ProjectSetup({ language, onComplete }: ProjectSetupProps) {
  const t = translations[language];
  const [projectType, setProjectType] = useState<string>('new');
  const [duration, setDuration] = useState<string>('3months');
  const [teamSize, setTeamSize] = useState<number>(3);

  const projectTypes = [
    { value: 'new', label: language === 'ko' ? '신규' : 'New', icon: 'N' },
    { value: 'renewal', label: language === 'ko' ? '리뉴얼' : 'Renewal', icon: 'R' },
    { value: 'improvement', label: language === 'ko' ? '개선' : 'Improve', icon: 'P' },
    { value: 'feature', label: language === 'ko' ? '기능' : 'Feature', icon: 'F' },
    { value: 'audit', label: language === 'ko' ? '진단' : 'Audit', icon: 'A' },
  ];

  const durations = [
    { value: '2weeks', label: language === 'ko' ? '2주' : '2 weeks' },
    { value: '1month', label: language === 'ko' ? '1개월' : '1 month' },
    { value: '3months', label: language === 'ko' ? '3개월' : '3 months' },
    { value: '6months', label: language === 'ko' ? '6개월' : '6 months' },
    { value: '6months+', label: language === 'ko' ? '6개월+' : '6+ months' },
  ];

  // Calculate expected outputs based on selection
  const getExpectedDeliverables = () => {
    if (projectType === 'new' || projectType === 'renewal') return 18;
    if (projectType === 'improvement') return 12;
    if (projectType === 'feature') return 8;
    return 15;
  };

  const getRecommendedWeeks = () => {
    if (duration === '2weeks') return 2;
    if (duration === '1month') return 4;
    if (duration === '3months') return 12;
    if (duration === '6months') return 24;
    return 30;
  };

  const getRecommendedRoles = () => {
    if (teamSize <= 2) return 2;
    if (teamSize <= 4) return 4;
    return 6;
  };

  const getRelevantStages = () => {
    const baseStages = [
      { name: language === 'ko' ? '발견' : 'Discover', count: 3 },
      { name: language === 'ko' ? '정의' : 'Define', count: 2 },
    ];

    if (projectType === 'new' || projectType === 'renewal') {
      baseStages.push(
        { name: language === 'ko' ? '리서치' : 'Research', count: 4 },
        { name: language === 'ko' ? '아이디어 도출' : 'Ideate', count: 3 },
        { name: language === 'ko' ? '디자인' : 'Design', count: 4 },
        { name: language === 'ko' ? '프로토타입 & 검증' : 'Prototype', count: 2 },
        { name: language === 'ko' ? '핸드오프' : 'Handoff', count: 2 },
        { name: language === 'ko' ? '출시' : 'Launch', count: 2 }
      );
    } else if (projectType === 'improvement') {
      baseStages.push(
        { name: language === 'ko' ? '리서치' : 'Research', count: 3 },
        { name: language === 'ko' ? '디자인' : 'Design', count: 3 },
        { name: language === 'ko' ? '프로토타입 & 검증' : 'Prototype', count: 2 },
        { name: language === 'ko' ? '핸드오프' : 'Handoff', count: 2 }
      );
    } else if (projectType === 'feature') {
      baseStages.push(
        { name: language === 'ko' ? '디자인' : 'Design', count: 3 },
        { name: language === 'ko' ? '프로토타입 & 검증' : 'Prototype', count: 2 },
        { name: language === 'ko' ? '핸드오프' : 'Handoff', count: 1 }
      );
    } else {
      baseStages.push(
        { name: language === 'ko' ? '리서치' : 'Research', count: 4 },
        { name: language === 'ko' ? '아이디어 도출' : 'Ideate', count: 3 },
        { name: language === 'ko' ? '디자인' : 'Design', count: 4 },
        { name: language === 'ko' ? '프로토타입 & 검증' : 'Prototype', count: 2 }
      );
    }

    return baseStages;
  };

  const handleSubmit = () => {
    onComplete({ projectType, duration, teamSize });
  };

  return (
    <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
      {/* Left Panel - User Input */}
      <Card sx={{ flex: '1 1 500px', border: '2px solid', borderColor: 'primary.main' }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
              {language === 'ko' ? 'AI와 함께 프로젝트를 시작하세요.' : 'Start Your Project with AI'}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {language === 'ko' ? '3가지만 알려주세요' : 'Tell us 3 things'}
            </Typography>
          </Box>

          {/* Project Type */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              ① {language === 'ko' ? '어떤 프로젝트인가요?' : 'What type of project?'}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {projectTypes.map((type) => (
                <Box
                  key={type.value}
                  onClick={() => setProjectType(type.value)}
                  sx={{
                    flex: '1 1 80px',
                    minWidth: 80,
                    p: 2,
                    textAlign: 'center',
                    border: '2px solid',
                    borderColor: projectType === type.value ? 'primary.main' : 'divider',
                    bgcolor: projectType === type.value ? 'primary.light' : 'white',
                    borderRadius: 2,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {type.icon}
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                    {type.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Duration */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              ② {language === 'ko' ? '기간은 얼마나 되나요?' : 'How long?'}
            </Typography>
            <ToggleButtonGroup
              value={duration}
              exclusive
              onChange={(e, value) => value && setDuration(value)}
              sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
            >
              {durations.map((d) => (
                <ToggleButton
                  key={d.value}
                  value={d.value}
                  sx={{
                    flex: '1 1 80px',
                    border: '2px solid',
                    borderColor: 'divider',
                    '&.Mui-selected': {
                      bgcolor: 'primary.main',
                      color: 'white',
                      borderColor: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      }
                    }
                  }}
                >
                  {d.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

          {/* Team Size */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              ③ {language === 'ko' ? '팀 규모는?' : 'Team size?'}
            </Typography>
            <Box sx={{ px: 2 }}>
              <Slider
                value={teamSize}
                onChange={(e, value) => setTeamSize(value as number)}
                min={1}
                max={10}
                marks
                valueLabelDisplay="on"
                sx={{
                  '& .MuiSlider-valueLabel': {
                    bgcolor: 'primary.main',
                  }
                }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'center' }}>
                {teamSize} {language === 'ko' ? '명' : 'people'}
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleSubmit}
            endIcon={<RocketLaunchIcon />}
            sx={{
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 700,
            }}
          >
            {language === 'ko' ? '결과 보기' : 'Show Results'} →
          </Button>
        </CardContent>
      </Card>

      {/* Right Panel - Preview */}
      <Card sx={{ flex: '1 1 400px', bgcolor: '#fafafa', border: '1px solid', borderColor: 'divider' }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            {language === 'ko' ? '단계별 미리보기' : 'Expected Output'}
          </Typography>

          {/* Stage Preview */}
          <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {getRelevantStages().map((stage, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1.5,
                    bgcolor: 'white',
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        bgcolor: stageColors[idx],
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        boxShadow: `0 2px 8px ${stageColors[idx]}40`,
                      }}
                    >
                      {idx + 1}
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {stage.name}
                    </Typography>
                  </Box>
                  <Chip
                    label={`${stage.count}${language === 'ko' ? '개' : ''}`}
                    size="small"
                    color="primary"
                    sx={{ fontWeight: 600 }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
