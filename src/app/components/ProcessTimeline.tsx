import { Box, Typography, Chip, useTheme, useMediaQuery } from '@mui/material';
import { Stage, stages } from '../data/stagesData';
import { stagesKo } from '../data/stagesDataKo';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { translations, Language } from '../data/translations';

interface ProcessTimelineProps {
  selectedStage: number;
  onStageClick: (index: number) => void;
  language?: Language;
  filteredStages?: Stage[];
  totalWeeks?: number;
}

// Distribute total working days across stages, weighted by deliverable count.
// Uses Hamilton's method (largest remainder) and ensures each stage gets at
// least 1 day when total >= number of stages.
function distributeDays(stages: Stage[], totalDays: number): number[] {
  const n = stages.length;
  if (n === 0 || totalDays <= 0) return stages.map(() => 0);

  const weights = stages.map((s) => Math.max(1, s.deliverables.length));
  const sumW = weights.reduce((a, b) => a + b, 0);

  const raw = weights.map((w) => (w / sumW) * totalDays);
  const floor = raw.map((v) => Math.floor(v));
  let remainder = totalDays - floor.reduce((a, b) => a + b, 0);

  const fracIdx = raw
    .map((v, i) => ({ i, frac: v - Math.floor(v) }))
    .sort((a, b) => b.frac - a.frac);

  const result = [...floor];
  let k = 0;
  while (remainder > 0 && k < fracIdx.length) {
    result[fracIdx[k].i] += 1;
    remainder -= 1;
    k += 1;
  }
  let i = 0;
  while (remainder > 0) {
    result[i % n] += 1;
    remainder -= 1;
    i += 1;
  }

  // Ensure min 1 day per stage when budget allows: steal from the largest.
  if (totalDays >= n) {
    while (result.some((v) => v === 0)) {
      const zeroIdx = result.findIndex((v) => v === 0);
      const maxIdx = result.reduce((best, v, idx) => (v > result[best] ? idx : best), 0);
      if (result[maxIdx] <= 1) break;
      result[maxIdx] -= 1;
      result[zeroIdx] += 1;
    }
  }
  return result;
}

// Format a working-day count: "3일" / "1주 2일" / "2주" (5 days = 1 week).
function formatDuration(days: number, language: Language): string {
  if (days <= 0) return language === 'ko' ? '0일' : '0d';
  const weeks = Math.floor(days / 5);
  const rem = days % 5;
  if (language === 'ko') {
    if (weeks === 0) return `${rem}일`;
    if (rem === 0) return `${weeks}주`;
    return `${weeks}주 ${rem}일`;
  }
  if (weeks === 0) return `${rem}d`;
  if (rem === 0) return `${weeks}w`;
  return `${weeks}w ${rem}d`;
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

export function ProcessTimeline({ selectedStage, onStageClick, language = 'ko', filteredStages, totalWeeks }: ProcessTimelineProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const t = translations[language];
  const defaultStages = language === 'ko' ? stagesKo : stages;
  const allStages = filteredStages && filteredStages.length > 0 ? filteredStages : defaultStages;
  const totalDays = totalWeeks && totalWeeks > 0 ? totalWeeks * 5 : 0;
  const daysPerStage = totalDays > 0 ? distributeDays(allStages, totalDays) : null;

  return (
    <Box sx={{
      py: 4,
      px: 2,
      overflowX: 'auto',
      bgcolor: 'white',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'center',
        gap: isMobile ? 0 : 2,
        minWidth: isMobile ? 'auto' : 'max-content',
        px: 2,
      }}>
        {allStages.map((stage, index) => (
          <Box key={stage.id} sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
            {/* Stage Node */}
            <Box
              onClick={() => onStageClick(index)}
              sx={{
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }}
            >
              {/* Stage Circle */}
              <Box
                sx={{
                  width: isMobile ? 80 : 120,
                  height: isMobile ? 80 : 120,
                  borderRadius: '50%',
                  background: selectedStage === index
                    ? `linear-gradient(135deg, ${stageColors[index]} 0%, ${stageColors[(index + 1) % stageColors.length]} 100%)`
                    : 'white',
                  border: '4px solid',
                  borderColor: selectedStage === index ? stageColors[index] : '#e5e7eb',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: selectedStage === index
                    ? `0 8px 24px ${stageColors[index]}40`
                    : '0 2px 8px rgba(0,0,0,0.1)',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {/* Stage Number Badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -8,
                    left: -8,
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    bgcolor: stageColors[index],
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
                >
                  {index + 1}
                </Box>

                <Typography
                  variant={isMobile ? 'caption' : 'body2'}
                  sx={{
                    fontWeight: 700,
                    color: selectedStage === index ? 'white' : 'text.primary',
                    textAlign: 'center',
                    px: 1,
                    fontSize: isMobile ? '0.65rem' : '0.875rem',
                  }}
                >
                  {stage.name}
                </Typography>

                {/* Allocated Duration */}
                {daysPerStage && (
                  <Chip
                    label={formatDuration(daysPerStage[index], language)}
                    size="small"
                    sx={{
                      mt: 0.5,
                      height: isMobile ? 20 : 24,
                      fontSize: isMobile ? '0.65rem' : '0.75rem',
                      bgcolor: selectedStage === index ? 'rgba(255,255,255,0.3)' : 'grey.100',
                      color: selectedStage === index ? 'white' : 'text.primary',
                      fontWeight: 600,
                    }}
                  />
                )}
              </Box>

              {/* Stage Label Below */}
            </Box>

            {/* Arrow Connector */}
            {index < allStages.length - 1 && (
              <Box sx={{
                mx: isMobile ? 0 : 2,
                my: isMobile ? 2 : 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {isMobile ? (
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    ml: 5,
                  }}>
                    <Box sx={{
                      width: 2,
                      height: 40,
                      background: `linear-gradient(180deg, ${stageColors[index]} 0%, ${stageColors[index + 1]} 100%)`,
                    }} />
                    <ArrowDownwardIcon sx={{ color: stageColors[index + 1], fontSize: 24, mt: -1 }} />
                  </Box>
                ) : (
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <Box sx={{
                      width: 60,
                      height: 2,
                      background: `linear-gradient(90deg, ${stageColors[index]} 0%, ${stageColors[index + 1]} 100%)`,
                    }} />
                    <ArrowForwardIcon sx={{ color: stageColors[index + 1], fontSize: 28, ml: -1 }} />
                  </Box>
                )}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
