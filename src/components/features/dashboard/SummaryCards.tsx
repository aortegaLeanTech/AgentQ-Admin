import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { Icon } from '@/components/ui/Icon/Icon';

// Interfaz para los datos de las tarjetas
export interface SummaryCardData {
  title: string;
  value: string | number;
  change: string;
  icon: string;
  color: string;
  isPositive: boolean;
}

// Datos mock para las tarjetas de resumen
const defaultSummaryData: SummaryCardData[] = [
  {
    title: 'Agentes Activos',
    value: 87,
    change: '+12%',
    icon: 'mdi:account-group',
    color: '#4CAF50',
    isPositive: true
  },
  {
    title: 'Tickets Abiertos',
    value: 156,
    change: '-3%',
    icon: 'mdi:ticket',
    color: '#2196F3',
    isPositive: false
  },
  {
    title: 'Tiempo Promedio',
    value: '5.2m',
    change: '-10%',
    icon: 'mdi:clock-outline',
    color: '#FF9800',
    isPositive: true
  },
  {
    title: 'Satisfacciu00f3n',
    value: '94%',
    change: '+2%',
    icon: 'mdi:emoticon-happy-outline',
    color: '#E91E63',
    isPositive: true
  }
];

interface SummaryCardsProps {
  data?: SummaryCardData[];
  loading?: boolean;
}

export const SummaryCards: React.FC<SummaryCardsProps> = ({ 
  data = defaultSummaryData,
  loading = false 
}) => {
  return (
    <Grid container spacing={3}>
      {loading ? (
        // Si está cargando, mostrar placeholders
        Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={`skeleton-${index}`}>
            <Paper
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                borderRadius: 2,
                opacity: 0.7,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="subtitle2" sx={{ bgcolor: 'rgba(0,0,0,0.1)', width: '70%', height: '1rem' }} />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,0,0,0.1)',
                  }}
                />
              </Box>
              <Typography sx={{ bgcolor: 'rgba(0,0,0,0.1)', width: '50%', height: '2rem', mb: 1 }} />
              <Typography sx={{ bgcolor: 'rgba(0,0,0,0.1)', width: '40%', height: '1rem' }} />
            </Paper>
          </Grid>
        ))
      ) : (
        // Si hay datos, mostrar las tarjetas
        data.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                borderRadius: 2,
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
                }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  {card.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: `${card.color}20`,
                    color: card.color
                  }}
                >
                  <Icon icon={card.icon} />
                </Box>
              </Box>
              <Typography variant="h4" fontWeight="bold" mb={1}>
                {card.value}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: card.isPositive ? 'success.main' : 'error.main',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}
              >
                <Icon 
                  icon={card.isPositive ? 'mdi:arrow-up' : 'mdi:arrow-down'} 
                  width="16px" 
                  height="16px" 
                />
                {card.change} vs semana anterior
              </Typography>
            </Paper>
          </Grid>
        ))
      )}
    </Grid>
  );
};
