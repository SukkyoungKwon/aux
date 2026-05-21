import { Box, Typography, LinearProgress } from '@mui/material';
import { stages } from '../data/stagesData';

interface ProcessProgressProps {
  selectedStage: number;
}

export function ProcessProgress({ selectedStage }: ProcessProgressProps) {
  const progress = selectedStage === -1 ? 0 : ((selectedStage + 1) / stages.length) * 100;
  const currentStage = selectedStage === -1 ? null : stages[selectedStage];

  return (
    <Box sx={{
      bgcolor: 'white',
      borderBottom: '1px solid',
      borderColor: 'divider',
      py: 2,
      px: 3,
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
          {selectedStage === -1 ? 'Select a stage to begin' : `Stage ${selectedStage + 1} of ${stages.length}`}
        </Typography>
        {currentStage && (
          <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
            {currentStage.name}
          </Typography>
        )}
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          bgcolor: 'grey.200',
          '& .MuiLinearProgress-bar': {
            borderRadius: 4,
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #ec4899 100%)',
          }
        }}
      />
      {selectedStage !== -1 && (
        <Typography variant="caption" sx={{ mt: 1, display: 'block', color: 'text.secondary' }}>
          {Math.round(progress)}% of process completed
        </Typography>
      )}
    </Box>
  );
}
