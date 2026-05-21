import { stages } from '../data/stagesData';
import { stagesKo } from '../data/stagesDataKo';
import { Card, CardContent, CardHeader, Box, Typography, Chip, LinearProgress } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TimelineIcon from '@mui/icons-material/Timeline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { translations, Language } from '../data/translations';

interface DashboardOverviewProps {
  language: Language;
}

export function DashboardOverview({ language }: DashboardOverviewProps) {
  const t = translations[language];
  const allStages = language === 'ko' ? stagesKo : stages;
  const totalDeliverables = allStages.reduce((acc, stage) => acc + stage.deliverables.length, 0);

  // Count AI-enhanced deliverables
  const aiEnhancedCount = allStages.reduce(
    (acc, stage) => acc + stage.deliverables.filter(d => d.aiTips.length > 0).length,
    0
  );

  // Count collaborative activities
  const totalActivities = allStages.reduce((acc, stage) => acc + stage.collaborativeActivities.length, 0);

  return (
    <Box>
      <Box sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 3,
        p: 5,
        mb: 4,
        color: 'white'
      }}>
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
          {t.welcomeTitle}
        </Typography>
        <Typography variant="h6" sx={{ mb: 0, opacity: 0.95, maxWidth: 900, lineHeight: 1.7, fontWeight: 400 }}>
          {t.welcomeSubtitle}
        </Typography>
      </Box>

      {/* Key Metrics */}
      <Box sx={{ display: 'flex', gap: 3, mb: 5, flexWrap: 'wrap' }}>
        <Box sx={{ flex: '1 1 calc(25% - 18px)', minWidth: 250 }}>
          <Card sx={{
            height: '100%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                <TimelineIcon sx={{ fontSize: 40 }} />
                <Typography variant="h3" sx={{ fontWeight: 700 }}>{stages.length}</Typography>
              </Box>
              <Typography variant="body1" sx={{ opacity: 0.95, fontWeight: 500 }}>
                {t.processStages}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 calc(25% - 18px)', minWidth: 250 }}>
          <Card sx={{ height: '100%', border: '2px solid', borderColor: 'success.light' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                <CheckCircleIcon color="success" sx={{ fontSize: 40 }} />
                <Typography variant="h3" color="success.main" sx={{ fontWeight: 700 }}>{totalDeliverables}</Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                {t.totalDeliverables}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 calc(25% - 18px)', minWidth: 250 }}>
          <Card sx={{ height: '100%', border: '2px solid', borderColor: 'secondary.light' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                <AutoAwesomeIcon color="secondary" sx={{ fontSize: 40 }} />
                <Typography variant="h3" color="secondary.main" sx={{ fontWeight: 700 }}>{aiEnhancedCount}</Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                {t.aiEnhanced}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={(aiEnhancedCount / totalDeliverables) * 100}
                sx={{ mt: 1.5, height: 6, borderRadius: 1 }}
                color="secondary"
              />
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 calc(25% - 18px)', minWidth: 250 }}>
          <Card sx={{ height: '100%', border: '2px solid', borderColor: 'info.light' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                <Typography variant="h3" color="info.main" sx={{ fontWeight: 700 }}>{totalActivities}</Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                {t.collaborativeActivities}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Stage Overview */}
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
        {t.theProcess}
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        {t.processDescription}
      </Typography>

      {/* Process Flow Visualization */}
      <Box sx={{
        mb: 5,
        p: 4,
        bgcolor: 'white',
        borderRadius: 3,
        border: '2px solid',
        borderColor: 'divider',
        overflowX: 'auto'
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minWidth: 'max-content',
          pb: 2,
        }}>
          {allStages.map((stage, index) => (
            <Box key={stage.id} sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 100,
              }}>
                <Box sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  bgcolor: `hsl(${250 + index * 15}, 70%, 60%)`,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  mb: 1,
                }}>
                  {index + 1}
                </Box>
                <Typography variant="caption" sx={{ fontWeight: 600, textAlign: 'center', mb: 0.5 }}>
                  {stage.name}
                </Typography>
                <Chip
                  label={`${stage.deliverables.length} ${t.items}`}
                  size="small"
                  sx={{ fontSize: '0.65rem', height: 20 }}
                />
              </Box>
              {index < stages.length - 1 && (
                <ArrowForwardIcon sx={{ mx: 2, color: 'text.secondary' }} />
              )}
            </Box>
          ))}
        </Box>
      </Box>


      {/* Quick Links */}
      <Card sx={{ mt: 5, border: '2px solid', borderColor: 'primary.light' }}>
        <CardHeader
          title={
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              {t.gettingStarted}
            </Typography>
          }
          sx={{ bgcolor: '#f0f9ff', borderBottom: '1px solid', borderColor: 'divider' }}
        />
        <CardContent sx={{ p: 3 }}>
          <Typography variant="body1" sx={{ mb: 3, fontWeight: 500 }}>
            {t.gettingStartedIntro}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: 280 }}>
              <Box sx={{ p: 2, bgcolor: '#fafafa', borderRadius: 2 }}>
                <Typography variant="body1" sx={{ mb: 0.5 }}>
                  <strong>{t.deliverables}</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t.deliverablesDesc}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: 280 }}>
              <Box sx={{ p: 2, bgcolor: '#fafafa', borderRadius: 2 }}>
                <Typography variant="body1" sx={{ mb: 0.5 }}>
                  <strong>{t.collaborativeActivities}</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t.collaborativeActivitiesDesc}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: 280 }}>
              <Box sx={{ p: 2, bgcolor: '#fafafa', borderRadius: 2 }}>
                <Typography variant="body1" sx={{ mb: 0.5 }}>
                  <strong>{language === 'ko' ? '프로젝트 유형 매핑' : 'Project Type Mapping'}</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t.projectTypeMappingDesc}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: 280 }}>
              <Box sx={{ p: 2, bgcolor: '#fafafa', borderRadius: 2 }}>
                <Typography variant="body1" sx={{ mb: 0.5 }}>
                  <strong>{language === 'ko' ? 'AI 통합' : 'AI Integration'}</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t.aiIntegrationDesc}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Chip
              icon={<AutoAwesomeIcon />}
              label={language === 'ko' ? 'AI 가이드라인 보기' : 'View AI Guidelines'}
              color="secondary"
              clickable
              sx={{ fontSize: '0.95rem', py: 2.5, px: 1 }}
            />
            <Chip
              label={language === 'ko' ? '프로젝트 유형 매트릭스 보기' : 'View Project Type Matrix'}
              color="primary"
              clickable
              sx={{ fontSize: '0.95rem', py: 2.5, px: 1 }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
