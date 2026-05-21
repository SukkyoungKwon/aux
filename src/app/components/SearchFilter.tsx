import { useState } from 'react';
import { stages } from '../data/stagesData';
import { stagesKo } from '../data/stagesDataKo';
import {
  Box,
  TextField,
  Card,
  CardContent,
  Typography,
  Chip,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { translations, Language } from '../data/translations';

interface SearchFilterProps {
  onClose?: () => void;
  language: Language;
}

export function SearchFilter({ onClose, language }: SearchFilterProps) {
  const t = translations[language];
  const [searchTerm, setSearchTerm] = useState('');
  const [projectType, setProjectType] = useState<string>('all');

  // Flatten all deliverables with stage context
  const allStages = language === 'ko' ? stagesKo : stages;
  const allDeliverables = allStages.flatMap(stage =>
    stage.deliverables.map(d => ({
      ...d,
      stageName: stage.name,
      stageId: stage.id
    }))
  );

  // Filter deliverables
  const filteredDeliverables = allDeliverables.filter(d => {
    const matchesSearch = !searchTerm ||
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.aiTips.some(tip => tip.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesProjectType = projectType === 'all' ||
      (projectType === 'new' && d.projectTypes.newService) ||
      (projectType === 'partial' && d.projectTypes.partialImprovement) ||
      (projectType === 'full' && d.projectTypes.fullRenewal);

    return matchesSearch && matchesProjectType;
  });

  return (
    <Box>
      <Box sx={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        borderRadius: 3,
        p: 4,
        mb: 4,
        color: 'white'
      }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
          {t.searchTitle}
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.95, fontWeight: 400 }}>
          {t.searchSubtitle}
        </Typography>
      </Box>

      <Card sx={{ mb: 3, border: '2px solid', borderColor: 'primary.light' }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
            <TextField
              fullWidth
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{
                flex: 1,
                minWidth: 250,
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'white',
                }
              }}
            />

            <FormControl sx={{ minWidth: 220 }}>
              <InputLabel>{t.projectType}</InputLabel>
              <Select
                value={projectType}
                label={t.projectType}
                onChange={(e) => setProjectType(e.target.value)}
              >
                <MenuItem value="all">{t.allTypes}</MenuItem>
                <MenuItem value="new">{t.newServiceBuild}</MenuItem>
                <MenuItem value="partial">{t.partialImprovement}</MenuItem>
                <MenuItem value="full">{t.fullRenewal}</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{
            p: 2,
            bgcolor: '#f0f9ff',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'primary.light',
          }}>
            <Typography variant="body1" sx={{ fontWeight: 600, color: 'primary.main' }}>
              {t.found} {filteredDeliverables.length} {t.deliverable}{filteredDeliverables.length !== 1 ? 's' : ''}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Results */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filteredDeliverables.length === 0 ? (
          <Card sx={{ border: '1px solid', borderColor: 'divider', p: 4 }}>
            <Typography variant="h6" color="text.secondary" align="center">
              {t.noResults}
            </Typography>
          </Card>
        ) : (
          filteredDeliverables.map((d) => (
            <Accordion
              key={`${d.stageId}-${d.name}`}
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%', flexWrap: 'wrap' }}>
                  <Typography sx={{ flexGrow: 1, fontWeight: 600, fontSize: '1.05rem' }}>{d.name}</Typography>
                  <Chip label={d.stageName} color="primary" />
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3, bgcolor: '#fafafa' }}>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.7 }}>
                  {d.description}
                </Typography>

                {/* AI Tips */}
                <Box sx={{ mb: 3, p: 2.5, bgcolor: 'white', borderRadius: 2, border: '1px solid', borderColor: 'secondary.light' }}>
                  <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, fontWeight: 600 }}>
                    <AutoAwesomeIcon color="secondary" />
                    {t.aiUtilizationTips}
                  </Typography>
                  <Box sx={{ pl: 1 }}>
                    {d.aiTips.map((tip, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          mb: 1.5,
                          p: 1.5,
                          bgcolor: tip.startsWith('⚠️') ? '#fef3c7' : '#f0f9ff',
                          borderRadius: 1,
                          borderLeft: '3px solid',
                          borderColor: tip.startsWith('⚠️') ? 'warning.main' : 'info.main',
                        }}
                      >
                        <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: tip.startsWith('⚠️') ? 600 : 400 }}>
                          {tip}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Tools */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 600 }}>
                    {t.recommendedTools}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {d.tools.map((tool) => (
                      <Chip key={tool} label={tool} variant="outlined" sx={{ fontWeight: 500 }} />
                    ))}
                  </Box>
                </Box>

                {/* Project Types */}
                <Box>
                  <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 600 }}>
                    {t.applicableProjectTypes}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {d.projectTypes.newService && (
                      <Chip key="new-service" label={t.newServiceBuild} color="primary" />
                    )}
                    {d.projectTypes.partialImprovement && (
                      <Chip key="partial-improvement" label={t.partialImprovement} color="secondary" />
                    )}
                    {d.projectTypes.fullRenewal && (
                      <Chip key="full-renewal" label={t.fullRenewal} color="info" />
                    )}
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))
        )}
      </Box>
    </Box>
  );
}
