import { aiGuidelines } from '../data/stagesData';
import { Card, CardContent, CardHeader, Typography, Box, Alert, Chip } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { translations, Language } from '../data/translations';

interface AIGuidelinesPanelProps {
  language: Language;
}

export function AIGuidelinesPanel({ language }: AIGuidelinesPanelProps) {
  const t = translations[language];
  return (
    <Box>
      <Box sx={{
        background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
        borderRadius: 3,
        p: 4,
        mb: 4,
        color: 'white'
      }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
          {t.aiGuidelinesTitle}
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.95, fontWeight: 400, lineHeight: 1.7 }}>
          {t.aiGuidelinesSubtitle}
        </Typography>
      </Box>

      {/* Principles */}
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
        {t.corePrinciples}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 5 }}>
        {aiGuidelines.principles.map((principle) => (
          <Card
            key={principle.title}
            sx={{
              border: '2px solid',
              borderColor: 'warning.light',
              boxShadow: 'none',
              '&:hover': {
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }
            }}
          >
            <CardHeader
              title={principle.title}
              titleTypographyProps={{ variant: 'h6', fontWeight: 700 }}
              avatar={
                <Box sx={{
                  bgcolor: 'warning.light',
                  p: 1,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <WarningAmberIcon sx={{ color: 'warning.dark', fontSize: 28 }} />
                </Box>
              }
              sx={{ pb: 2, bgcolor: '#fffbeb' }}
            />
            <CardContent sx={{ pt: 2, px: 3, pb: 3 }}>
              <Typography variant="body1" sx={{ mb: 3, color: 'text.primary', lineHeight: 1.7 }}>
                {principle.description}
              </Typography>
              <Typography variant="subtitle2" sx={{ display: 'block', mb: 2, fontWeight: 700 }}>
                {t.examples}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {principle.examples.map((example, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      p: 2,
                      bgcolor: '#fafafa',
                      borderRadius: 2,
                      borderLeft: '3px solid',
                      borderColor: 'warning.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                      • {example}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Best Practices */}
      <Card sx={{ border: '2px solid', borderColor: 'primary.light', boxShadow: 'none' }}>
        <CardHeader
          title={t.bestPractices}
          titleTypographyProps={{ variant: 'h5', fontWeight: 700 }}
          avatar={
            <Box sx={{
              bgcolor: 'primary.light',
              p: 1,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <LightbulbIcon sx={{ color: 'primary.dark', fontSize: 28 }} />
            </Box>
          }
          sx={{ pb: 2, bgcolor: '#f0f9ff' }}
        />
        <CardContent sx={{ pt: 2, px: 3, pb: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {aiGuidelines.bestPractices.map((practice, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  p: 2.5,
                  bgcolor: '#fafafa',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Chip
                  label={idx + 1}
                  color="primary"
                  sx={{ minWidth: 36, height: 36, fontWeight: 700, fontSize: '1rem' }}
                />
                <Typography variant="body1" sx={{ pt: 0.5, lineHeight: 1.7 }}>
                  {practice}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
