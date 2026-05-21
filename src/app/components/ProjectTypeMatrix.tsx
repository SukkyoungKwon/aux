import { stages } from '../data/stagesData';
import { stagesKo } from '../data/stagesDataKo';
import { Card, CardContent, CardHeader, Box, Typography, Chip } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { translations, Language } from '../data/translations';

interface ProjectTypeMatrixProps {
  language: Language;
}

export function ProjectTypeMatrix({ language }: ProjectTypeMatrixProps) {
  const t = translations[language];
  const allStages = language === 'ko' ? stagesKo : stages;
  const totalDeliverables = allStages.reduce((acc, stage) => acc + stage.deliverables.length, 0);
  // Collect all deliverables across stages
  const allDeliverables = allStages.flatMap(stage =>
    stage.deliverables.map(d => ({
      id: `${stage.id}-${d.name}`,
      stage: stage.name,
      deliverable: d.name,
      newService: d.projectTypes.newService,
      partialImprovement: d.projectTypes.partialImprovement,
      fullRenewal: d.projectTypes.fullRenewal
    }))
  );

  const columns: GridColDef[] = [
    {
      field: 'stage',
      headerName: 'Stage',
      width: 150,
      renderCell: (params) => (
        <Chip label={params.value} size="small" color="default" />
      )
    },
    {
      field: 'deliverable',
      headerName: 'Deliverable',
      width: 220,
      flex: 1
    },
    {
      field: 'newService',
      headerName: 'New Service Build',
      width: 150,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        params.value ? <Chip label="✓" size="small" color="primary" /> : <span>-</span>
      )
    },
    {
      field: 'partialImprovement',
      headerName: 'Partial Improvement',
      width: 150,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        params.value ? <Chip label="✓" size="small" color="secondary" /> : <span>-</span>
      )
    },
    {
      field: 'fullRenewal',
      headerName: 'Full Renewal',
      width: 150,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        params.value ? <Chip label="✓" size="small" color="info" /> : <span>-</span>
      )
    }
  ];

  return (
    <Box>
      <Box sx={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
        borderRadius: 3,
        p: 4,
        mb: 4,
        color: 'white'
      }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
          {t.matrixTitle}
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.95, fontWeight: 400 }}>
          {t.matrixSubtitle.replace('{total}', totalDeliverables.toString())}
        </Typography>
      </Box>

      <Card sx={{ mb: 3, border: '2px solid', borderColor: 'info.light' }}>
        <CardHeader
          title={
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              {t.understandingProjectTypes}
            </Typography>
          }
          sx={{ pb: 2, bgcolor: '#f0f9ff', borderBottom: '1px solid', borderColor: 'divider' }}
        />
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{
              p: 3,
              bgcolor: '#eff6ff',
              borderRadius: 2,
              border: '2px solid',
              borderColor: 'primary.light',
            }}>
              <Chip label={t.newServiceBuild} color="primary" sx={{ mb: 1.5, fontWeight: 600 }} />
              <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                {t.newServiceDesc}
              </Typography>
            </Box>
            <Box sx={{
              p: 3,
              bgcolor: '#fdf4ff',
              borderRadius: 2,
              border: '2px solid',
              borderColor: 'secondary.light',
            }}>
              <Chip label={t.partialImprovement} color="secondary" sx={{ mb: 1.5, fontWeight: 600 }} />
              <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                {t.partialImprovementDesc}
              </Typography>
            </Box>
            <Box sx={{
              p: 3,
              bgcolor: '#f0f9ff',
              borderRadius: 2,
              border: '2px solid',
              borderColor: 'info.light',
            }}>
              <Chip label={t.fullRenewal} color="info" sx={{ mb: 1.5, fontWeight: 600 }} />
              <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                {t.fullRenewalDesc}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ border: '2px solid', borderColor: 'divider' }}>
        <CardHeader
          title={
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              {t.deliverableMatrix}
            </Typography>
          }
          subheader={t.whichDeliverablesApply}
          sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
        />
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
              rows={allDeliverables}
              columns={columns}
              pageSizeOptions={[10, 25, 50]}
              initialState={{
                pagination: { paginationModel: { pageSize: 25 } }
              }}
              disableRowSelectionOnClick
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
