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

export function ProcessTimeline({ selectedStage, onStageClick, language = 'ko', filteredStages }: ProcessTimelineProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const t = translations[language];
  const defaultStages = language === 'ko' ? stagesKo : stages;
  const allStages = filteredStages && filteredStages.length > 0 ? filteredStages : defaultStages;

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

                {/* Deliverable Count */}
                <Chip
                  icon={<CheckCircleIcon sx={{ fontSize: isMobile ? 12 : 16 }} />}
                  label={stage.deliverables.length}
                  size="small"
                  sx={{
                    mt: 0.5,
                    height: isMobile ? 20 : 24,
                    fontSize: isMobile ? '0.65rem' : '0.75rem',
                    bgcolor: selectedStage === index ? 'rgba(255,255,255,0.3)' : 'grey.100',
                    color: selectedStage === index ? 'white' : 'text.primary',
                    fontWeight: 600,
                    '& .MuiChip-icon': {
                      color: selectedStage === index ? 'white' : 'success.main',
                    }
                  }}
                />
              </Box>

              {/* Stage Label Below */}
              <Typography
                variant="caption"
                sx={{
                  position: 'absolute',
                  bottom: isMobile ? -32 : -36,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  whiteSpace: 'nowrap',
                  color: 'text.secondary',
                  fontWeight: 500,
                  fontSize: isMobile ? '0.65rem' : '0.75rem',
                }}
              >
                {stage.deliverables.length} {language === 'ko' ? '산출물' : 'deliverables'}
              </Typography>
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
