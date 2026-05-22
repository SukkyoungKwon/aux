import { useState } from 'react';
import { Stage, stages } from '../data/stagesData';
import { stagesKo } from '../data/stagesDataKo';
import { Card, CardContent, CardHeader, Chip, Typography, Box, Accordion, AccordionSummary, AccordionDetails, IconButton, Snackbar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BuildIcon from '@mui/icons-material/Build';
import GroupsIcon from '@mui/icons-material/Groups';
import TimelineIcon from '@mui/icons-material/Timeline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { translations, Language } from '../data/translations';

interface StageCardProps {
  stage: Stage;
  language: Language;
}

export function StageCard({ stage, language }: StageCardProps) {
  const t = translations[language];
  const allStages = language === 'ko' ? stagesKo : stages;
  const currentStage = allStages.find(s => s.id === stage.id) || stage;
  const stageIndex = allStages.findIndex(s => s.id === stage.id);
  const stageNumber = stageIndex + 1;
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(prompt);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <Box sx={{ mb: 4 }}>
      {/* Stage Header with Process Context */}
      <Box sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 3,
        p: 4,
        mb: 3,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background Stage Number */}
        <Typography sx={{
          position: 'absolute',
          top: -20,
          right: 20,
          fontSize: '200px',
          fontWeight: 900,
          opacity: 0.05,
          lineHeight: 1,
        }}>
          {stageNumber}
        </Typography>

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Chip
              icon={<TimelineIcon />}
              label={`${t.stage} ${stageNumber} ${t.of} ${stages.length}`}
              sx={{
                bgcolor: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontWeight: 700,
                '& .MuiChip-icon': {
                  color: 'white',
                }
              }}
            />
          </Box>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
            {currentStage.name}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95, maxWidth: 800, lineHeight: 1.7, fontWeight: 400 }}>
            {currentStage.description}
          </Typography>
        </Box>
      </Box>

      {/* Main Activities */}
      <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider' }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {t.mainActivities} ({currentStage.collaborativeActivities.length})
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {currentStage.collaborativeActivities.map((activity, activityIdx) => (
              <Accordion
                key={activityIdx}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '8px !important',
                  '&:before': { display: 'none' },
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      my: 1.5
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, width: '100%' }}>
                    <GroupsIcon color="primary" />
                    <Typography sx={{ fontWeight: 600, fontSize: '1.05rem' }}>{activity}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 3, bgcolor: '#fafafa' }}>
                  {/* Related Deliverables */}
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                    {t.deliverables}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {currentStage.deliverables.map((deliverable, delivIdx) => (
                      <Box
                        key={delivIdx}
                        sx={{
                          p: 2.5,
                          bgcolor: 'white',
                          borderRadius: 2,
                          border: '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                          <CheckCircleIcon color="success" sx={{ fontSize: 20 }} />
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            {deliverable.name}
                          </Typography>
                        </Box>

                        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.7 }}>
                          {deliverable.description}
                        </Typography>

                        {/* AI Tips */}
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5, fontWeight: 600 }}>
                            <AutoAwesomeIcon color="secondary" sx={{ fontSize: 18 }} />
                            {t.aiUtilizationTips}
                          </Typography>
                          <Box sx={{ pl: 1 }}>
                            {deliverable.aiTips.map((tip, tipIdx) => (
                              <Box
                                key={tipIdx}
                                sx={{
                                  mb: 1,
                                  p: 1.5,
                                  bgcolor: tip.startsWith('⚠️') ? '#fef3c7' : '#f0f9ff',
                                  borderRadius: 1,
                                  borderLeft: '3px solid',
                                  borderColor: tip.startsWith('⚠️') ? 'warning.main' : 'info.main',
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: 'text.primary',
                                    fontWeight: tip.startsWith('⚠️') ? 600 : 400,
                                    fontSize: '0.875rem',
                                  }}
                                >
                                  {tip}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>

                        {/* Prompt Examples */}
                        <Box sx={{ mb: 2, p: 2, bgcolor: '#f0fdf4', borderRadius: 2, border: '1px solid', borderColor: 'success.light' }}>
                          <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <AutoAwesomeIcon color="success" sx={{ fontSize: 18 }} />
                            {t.promptExamples}
                          </Typography>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {deliverable.aiTips.slice(0, 2).map((tip, promptIdx) => {
                              const promptText = tip.replace(/^⚠️\s*/, '');
                              return (
                                <Box
                                  key={promptIdx}
                                  sx={{
                                    p: 1.5,
                                    bgcolor: 'white',
                                    borderRadius: 1,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    gap: 1,
                                  }}
                                >
                                  <Typography variant="body2" sx={{ flex: 1, fontSize: '0.875rem' }}>
                                    {promptText}
                                  </Typography>
                                  <IconButton
                                    size="small"
                                    onClick={() => handleCopyPrompt(promptText)}
                                    sx={{
                                      flexShrink: 0,
                                      '&:hover': { bgcolor: 'success.light' }
                                    }}
                                  >
                                    <ContentCopyIcon sx={{ fontSize: 16 }} />
                                  </IconButton>
                                </Box>
                              );
                            })}
                          </Box>
                        </Box>

                        {/* Recommended Tools */}
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, fontWeight: 600 }}>
                            <BuildIcon sx={{ fontSize: 18 }} />
                            {t.recommendedTools}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {deliverable.tools.map((tool) => (
                              <Chip
                                key={tool}
                                label={tool}
                                variant="outlined"
                                size="small"
                                sx={{ fontWeight: 500 }}
                              />
                            ))}
                          </Box>
                        </Box>

                        {/* Project Types */}
                        <Box>
                          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                            {t.applicableProjectTypes}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {deliverable.projectTypes.newService && (
                              <Chip key="new-service" label={t.newServiceBuild} color="primary" size="small" />
                            )}
                            {deliverable.projectTypes.partialImprovement && (
                              <Chip key="partial-improvement" label={t.partialImprovement} color="secondary" size="small" />
                            )}
                            {deliverable.projectTypes.fullRenewal && (
                              <Chip key="full-renewal" label={t.fullRenewal} color="info" size="small" />
                            )}
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Snackbar for copy notification */}
      <Snackbar
        open={!!copiedPrompt}
        autoHideDuration={2000}
        onClose={() => setCopiedPrompt(null)}
        message={t.copied}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
}
