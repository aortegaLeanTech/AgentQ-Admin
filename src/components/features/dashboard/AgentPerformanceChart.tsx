import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Icon } from '@/components/ui/Icon/Icon';

// Interfaz para los datos del gráfico
export interface PerformanceData {
  month: string;
  performance: number;
}

// Datos mock para el gráfico
const defaultPerformanceData: PerformanceData[] = [
  { month: 'Ene', performance: 65 },
  { month: 'Feb', performance: 59 },
  { month: 'Mar', performance: 80 },
  { month: 'Abr', performance: 81 },
  { month: 'May', performance: 56 },
  { month: 'Jun', performance: 55 },
  { month: 'Jul', performance: 40 },
];

interface AgentPerformanceChartProps {
  data?: PerformanceData[];
  loading?: boolean;
  average?: number;
  trend?: string;
  trendValue?: string;
  showPositiveTrend?: boolean;
}

export const AgentPerformanceChart: React.FC<AgentPerformanceChartProps> = ({ 
  data = defaultPerformanceData,
  loading = false,
  average = 62.3,
  trend = 'Tendencia',
  trendValue = '+5.2%',
  showPositiveTrend = true
}) => {
  // Altura máxima para las barras del gráfico
  const maxBarHeight = 150;

  if (loading) {
    return (
      <Paper
        sx={{
          p: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          borderRadius: 2,
          opacity: 0.7,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <div>
            <Typography sx={{ bgcolor: 'rgba(0,0,0,0.1)', width: '70%', height: '1.5rem', mb: 1 }} />
            <Typography sx={{ bgcolor: 'rgba(0,0,0,0.1)', width: '50%', height: '1rem' }} />
          </div>
          <Box
            sx={{
              width: 80,
              height: 30,
              borderRadius: '20px',
              backgroundColor: 'rgba(0,0,0,0.1)',
            }}
          />
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end', gap: 2, mb: 2 }}>
          {Array.from({ length: 7 }).map((_, index) => (
            <Box key={index} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                sx={{
                  height: `${Math.random() * 100}px`,
                  width: '100%',
                  maxWidth: '30px',
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  borderRadius: '4px',
                }}
              />
              <Typography sx={{ bgcolor: 'rgba(0,0,0,0.1)', width: '20px', height: '0.5rem', mt: 1 }} />
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto', pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
          <Box>
            <Typography sx={{ bgcolor: 'rgba(0,0,0,0.1)', width: '60%', height: '0.8rem', mb: 1 }} />
            <Typography sx={{ bgcolor: 'rgba(0,0,0,0.1)', width: '40%', height: '1.2rem' }} />
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography sx={{ bgcolor: 'rgba(0,0,0,0.1)', width: '40%', height: '0.8rem', mb: 1, ml: 'auto' }} />
            <Typography sx={{ bgcolor: 'rgba(0,0,0,0.1)', width: '30%', height: '1.2rem', ml: 'auto' }} />
          </Box>
        </Box>
      </Paper>
    );
  }

  return (
    <Paper
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        borderRadius: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <div>
          <Typography variant="h6" fontWeight="bold">
            Rendimiento de Agentes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Puntaje promedio de efectividad mensual
          </Typography>
        </div>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            backgroundColor: 'primary.main',
            color: 'white',
            borderRadius: '20px',
            px: 2,
            py: 0.5,
          }}
        >
          <Icon icon="mdi:calendar" />
          <Typography variant="body2" fontWeight="medium">
            Este año
          </Typography>
        </Box>
      </Box>

      {/* Gráfico de barras */}
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end', gap: 2, mb: 2 }}>
        {data.map((item, index) => {
          // Normalizar el valor de rendimiento para la altura de la barra
          const barHeight = (item.performance / 100) * maxBarHeight;
          
          return (
            <Box key={index} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="caption" color="text.secondary" sx={{ mb: 1 }}>
                {item.performance}%
              </Typography>
              <Box
                sx={{
                  height: `${barHeight}px`,
                  width: '100%',
                  maxWidth: '30px',
                  backgroundColor: index === 2 || index === 3 ? 'primary.main' : 'primary.light',
                  borderRadius: '4px',
                  transition: 'all 0.3s',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    transform: 'scaleY(1.05)',
                  },
                }}
              />
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                {item.month}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto', pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Promedio general
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {average}%
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <Typography variant="subtitle2" color="text.secondary">
            {trend}
          </Typography>
          <Typography 
            variant="h6" 
            fontWeight="bold" 
            sx={{ 
              color: showPositiveTrend ? 'success.main' : 'error.main',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}
          >
            <Icon icon={showPositiveTrend ? "mdi:arrow-up" : "mdi:arrow-down"} width="20px" height="20px" />
            {trendValue}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
