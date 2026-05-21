import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, AppBar, Toolbar, Typography, Tabs, Tab, Container, Fab, Tooltip, IconButton, Menu, MenuItem } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GridViewIcon from '@mui/icons-material/GridView';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { stages } from './data/stagesData';
import { stagesKo } from './data/stagesDataKo';
import { StageCard } from './components/StageCard';
import { AIGuidelinesPanel } from './components/AIGuidelinesPanel';
import { ProjectTypeMatrix } from './components/ProjectTypeMatrix';
import { DashboardOverview } from './components/DashboardOverview';
import { SearchFilter } from './components/SearchFilter';
import { ProcessTimeline } from './components/ProcessTimeline';
import { ProcessProgress } from './components/ProcessProgress';
import { StageNavigator } from './components/StageNavigator';
import { ProjectSetup, ProjectConfig } from './components/ProjectSetup';
import { translations, Language } from './data/translations';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6366f1',
    },
    secondary: {
      main: '#ec4899',
    },
    success: {
      main: '#10b981',
    },
    info: {
      main: '#3b82f6',
    },
    warning: {
      main: '#f59e0b',
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          '&:hover': {
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

export default function App() {
  const [selectedTab, setSelectedTab] = useState(-1); // -1 = overview
  const [showAIGuidelines, setShowAIGuidelines] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [language, setLanguage] = useState<Language>('ko');
  const [langMenuAnchor, setLangMenuAnchor] = useState<null | HTMLElement>(null);
  const [projectConfig, setProjectConfig] = useState<ProjectConfig | null>(null);

  const t = translations[language];

  // Filter stages based on project config
  const getFilteredStages = () => {
    if (!projectConfig) return [];

    const allStages = language === 'ko' ? stagesKo : stages;
    const { projectType } = projectConfig;

    // Define which stages are relevant for each project type
    const stageIndices: { [key: string]: number[] } = {
      'new': [0, 1, 2, 3, 4, 5, 6, 7], // All stages
      'renewal': [0, 1, 2, 3, 4, 5, 6, 7], // All stages
      'improvement': [0, 1, 2, 4, 5, 6], // Skip Ideate, Launch
      'feature': [0, 1, 4, 5, 6], // Discover, Define, Design, Prototype, Handoff
      'audit': [0, 1, 2, 3, 4, 5], // Skip Handoff, Launch
    };

    const relevantIndices = stageIndices[projectType] || [0, 1, 2, 3, 4, 5, 6, 7];
    return relevantIndices.map(idx => allStages[idx]);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    setShowAIGuidelines(false);
    setShowMatrix(false);
    setShowSearch(false);
  };

  const handleStageClick = (index: number) => {
    setSelectedTab(index);
    setShowAIGuidelines(false);
    setShowMatrix(false);
    setShowSearch(false);
  };

  const handleProjectSetupComplete = (config: ProjectConfig) => {
    setProjectConfig(config);
    setSelectedTab(0); // Go to first filtered stage
  };

  const renderContent = () => {
    if (showAIGuidelines) {
      return <AIGuidelinesPanel language={language} />;
    }

    if (showMatrix) {
      return <ProjectTypeMatrix language={language} />;
    }

    if (showSearch) {
      return <SearchFilter language={language} />;
    }

    if (!projectConfig) {
      return <ProjectSetup language={language} onComplete={handleProjectSetupComplete} />;
    }

    const filteredStages = getFilteredStages();
    if (selectedTab === -1 || selectedTab >= filteredStages.length) {
      setSelectedTab(0);
      return null;
    }

    return <StageCard stage={filteredStages[selectedTab]} language={language} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#fafafa' }}>
        {/* App Bar */}
        <AppBar position="static" elevation={0} sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <Toolbar sx={{ py: 1 }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              bgcolor: 'rgba(255,255,255,0.15)',
              px: 2,
              py: 0.75,
              borderRadius: 2,
              mr: 2
            }}>
              <AutoAwesomeIcon />
              <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                {t.appTitle}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.95, flexGrow: 1 }}>
              {language === 'ko' ? 'AI를 활용한 서비스 구축 프로세스' : t.appSubtitle}
            </Typography>
            <IconButton
              color="inherit"
              onClick={(e) => setLangMenuAnchor(e.currentTarget)}
              sx={{
                bgcolor: 'rgba(255,255,255,0.15)',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.25)',
                }
              }}
            >
              <LanguageIcon />
            </IconButton>
            <Menu
              anchorEl={langMenuAnchor}
              open={Boolean(langMenuAnchor)}
              onClose={() => setLangMenuAnchor(null)}
            >
              <MenuItem
                selected={language === 'ko'}
                onClick={() => {
                  setLanguage('ko');
                  setLangMenuAnchor(null);
                }}
              >
                한국어
              </MenuItem>
              <MenuItem
                selected={language === 'en'}
                onClick={() => {
                  setLanguage('en');
                  setLangMenuAnchor(null);
                }}
              >
                English
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        {/* Integrated Process Navigation */}
        {!showAIGuidelines && !showMatrix && !showSearch && projectConfig && (
          <Box>
            {/* Process Timeline Navigation */}
            <Box sx={{ bgcolor: 'white', borderBottom: '2px solid', borderColor: 'divider', py: 3 }}>
              <Container maxWidth="xl">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    onClick={() => {
                      setProjectConfig(null);
                      setSelectedTab(-1);
                    }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 3,
                      py: 1.5,
                      borderRadius: 2,
                      border: '2px solid',
                      borderColor: 'divider',
                      bgcolor: 'white',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    <HomeIcon color="action" />
                    <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      {language === 'ko' ? '처음으로' : 'Reset'}
                    </Typography>
                  </Box>
                </Box>

                {/* Process Timeline */}
                <ProcessTimeline
                  selectedStage={selectedTab}
                  onStageClick={handleStageClick}
                  language={language}
                  filteredStages={getFilteredStages()}
                />
              </Container>
            </Box>
          </Box>
        )}

        {/* Main Content */}
        <Container maxWidth="xl" sx={{ py: 5, flex: 1 }}>
          {renderContent()}
          {!showAIGuidelines && !showMatrix && !showSearch && selectedTab !== -1 && projectConfig && (
            <StageNavigator
              currentStage={selectedTab}
              onNavigate={handleStageClick}
              language={language}
              filteredStages={getFilteredStages()}
            />
          )}
        </Container>

        {/* Floating Action Buttons */}
        <Box sx={{ position: 'fixed', bottom: 32, right: 32, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Tooltip title={t.searchDeliverablesTooltip} placement="left" arrow>
            <Fab
              color={showSearch ? 'primary' : 'default'}
              onClick={() => {
                setShowSearch(!showSearch);
                setShowAIGuidelines(false);
                setShowMatrix(false);
              }}
              sx={{
                boxShadow: '0 4px 14px 0 rgba(0,0,0,0.15)',
                '&:hover': {
                  boxShadow: '0 6px 20px 0 rgba(0,0,0,0.2)',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <SearchIcon />
            </Fab>
          </Tooltip>
          <Tooltip title={t.aiGuidelinesTooltip} placement="left" arrow>
            <Fab
              color={showAIGuidelines ? 'secondary' : 'default'}
              onClick={() => {
                setShowAIGuidelines(!showAIGuidelines);
                setShowMatrix(false);
                setShowSearch(false);
              }}
              sx={{
                boxShadow: '0 4px 14px 0 rgba(0,0,0,0.15)',
                '&:hover': {
                  boxShadow: '0 6px 20px 0 rgba(0,0,0,0.2)',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <AutoAwesomeIcon />
            </Fab>
          </Tooltip>
          <Tooltip title={t.projectTypeMatrixTooltip} placement="left" arrow>
            <Fab
              color={showMatrix ? 'info' : 'default'}
              onClick={() => {
                setShowMatrix(!showMatrix);
                setShowAIGuidelines(false);
                setShowSearch(false);
              }}
              sx={{
                boxShadow: '0 4px 14px 0 rgba(0,0,0,0.15)',
                '&:hover': {
                  boxShadow: '0 6px 20px 0 rgba(0,0,0,0.2)',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <GridViewIcon />
            </Fab>
          </Tooltip>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 4,
            px: 2,
            mt: 'auto',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          }}
        >
          <Container maxWidth="xl">
            <Typography variant="body2" align="center" sx={{ fontWeight: 600, opacity: 0.95 }}>
              {t.footerText.replace('8', (language === 'ko' ? stagesKo : stages).length.toString())}
            </Typography>
            <Typography variant="caption" align="center" sx={{ display: 'block', mt: 1, opacity: 0.85 }}>
              {t.footerWarning}
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
