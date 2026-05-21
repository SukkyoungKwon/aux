import { Box, Button, Typography } from '@mui/material';
import { Stage, stages } from '../data/stagesData';
import { stagesKo } from '../data/stagesDataKo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { translations, Language } from '../data/translations';

interface StageNavigatorProps {
  currentStage: number;
  onNavigate: (stage: number) => void;
  language: Language;
  filteredStages?: Stage[];
}

export function StageNavigator({ currentStage, onNavigate, language, filteredStages }: StageNavigatorProps) {
  const t = translations[language];
  const defaultStages = language === 'ko' ? stagesKo : stages;
  const allStages = filteredStages && filteredStages.length > 0 ? filteredStages : defaultStages;
  if (currentStage === -1) return null;

  const hasPrevious = currentStage > 0;
  const hasNext = currentStage < allStages.length - 1;

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mt: 4,
      p: 3,
      bgcolor: 'white',
      borderRadius: 3,
      border: '2px solid',
      borderColor: 'divider',
    }}>
      <Box sx={{ flex: 1 }}>
        {hasPrevious && (
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => onNavigate(currentStage - 1)}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2,
              }
            }}
          >
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="caption" sx={{ display: 'block', opacity: 0.7 }}>
                {t.previous}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                {allStages[currentStage - 1].name}
              </Typography>
            </Box>
          </Button>
        )}
      </Box>

      <Box sx={{ textAlign: 'center', px: 2 }}>
        <Typography variant="caption" color="text.secondary">
          {t.stage} {currentStage + 1} {t.of} {allStages.length}
        </Typography>
      </Box>

      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        {hasNext && (
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => onNavigate(currentStage + 1)}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #5568d3 0%, #653a8b 100%)',
              }
            }}
          >
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="caption" sx={{ display: 'block', opacity: 0.9 }}>
                {t.next}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                {allStages[currentStage + 1].name}
              </Typography>
            </Box>
          </Button>
        )}
      </Box>
    </Box>
  );
}
