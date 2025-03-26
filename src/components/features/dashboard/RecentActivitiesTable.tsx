import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Icon } from '@/components/ui/Icon/Icon';

// Interfaz para los datos de cada actividad
export interface ActivityData {
  id: number | string;
  agent: {
    name: string;
    avatar: string;
  };
  activity: string;
  ticketId: string;
  time: string;
  customer: string;
  status: 'success' | 'pending' | 'warning' | 'error';
}

// Datos mock para la tabla de actividades recientes
const defaultActivities: ActivityData[] = [
  {
    id: 1,
    agent: {
      name: 'Carlos Mu00e9ndez',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    activity: 'Ticket resuelto',
    ticketId: 'TKT-2593',
    time: '3 min',
    customer: 'LeanTech',
    status: 'success'
  },
  {
    id: 2,
    agent: {
      name: 'Ana Gu00f3mez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    activity: 'Nuevo ticket',
    ticketId: 'TKT-2594',
    time: '10 min',
    customer: 'AgentQ Inc',
    status: 'pending'
  },
  {
    id: 3,
    agent: {
      name: 'Mario Silva',
      avatar: 'https://randomuser.me/api/portraits/men/56.jpg'
    },
    activity: 'Ticket asignado',
    ticketId: 'TKT-2590',
    time: '32 min',
    customer: 'TechSoft',
    status: 'warning'
  },
  {
    id: 4,
    agent: {
      name: 'Laura Benu00edtez',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
    },
    activity: 'Chat finalizado',
    ticketId: 'TKT-2588',
    time: '1h 15m',
    customer: 'InnovaSys',
    status: 'success'
  },
  {
    id: 5,
    agent: {
      name: 'Eduardo Paz',
      avatar: 'https://randomuser.me/api/portraits/men/72.jpg'
    },
    activity: 'Ticket escalado',
    ticketId: 'TKT-2585',
    time: '2h 40m',
    customer: 'LeanTech',
    status: 'error'
  }
];

interface RecentActivitiesTableProps {
  data?: ActivityData[];
  loading?: boolean;
  onViewAll?: () => void;
}

export const RecentActivitiesTable: React.FC<RecentActivitiesTableProps> = ({ 
  data = defaultActivities,
  loading = false,
  onViewAll
}) => {
  // Funciu00f3n para determinar el color del chip de estado
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'success':
        return { color: 'success.main', bgColor: 'success.light', icon: 'mdi:check-circle' };
      case 'pending':
        return { color: 'info.main', bgColor: 'info.light', icon: 'mdi:clock-outline' };
      case 'warning':
        return { color: 'warning.main', bgColor: 'warning.light', icon: 'mdi:alert-circle' };
      case 'error':
        return { color: 'error.main', bgColor: 'error.light', icon: 'mdi:alert' };
      default:
        return { color: 'grey.500', bgColor: 'grey.200', icon: 'mdi:information' };
    }
  };

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
              width: 60,
              height: 20,
              borderRadius: '4px',
              backgroundColor: 'rgba(0,0,0,0.1)',
            }}
          />
        </Box>

        <TableContainer sx={{ flexGrow: 1 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell><Skeleton width={100} /></TableCell>
                <TableCell><Skeleton width={100} /></TableCell>
                <TableCell><Skeleton width={100} /></TableCell>
                <TableCell><Skeleton width={80} /></TableCell>
                <TableCell><Skeleton width={80} /></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton width={150} height={40} /></TableCell>
                  <TableCell><Skeleton width={120} height={40} /></TableCell>
                  <TableCell><Skeleton width={100} /></TableCell>
                  <TableCell><Skeleton width={80} /></TableCell>
                  <TableCell><Skeleton width={100} height={30} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
            Actividades Recientes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            u00daltimas {data.length} actividades de agentes
          </Typography>
        </div>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            cursor: 'pointer',
            '&:hover': { color: 'primary.main' }
          }}
          onClick={onViewAll}
        >
          <Typography variant="body2" fontWeight="medium">
            Ver todas
          </Typography>
          <Icon icon="mdi:chevron-right" />
        </Box>
      </Box>

      <TableContainer sx={{ flexGrow: 1 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Agente</TableCell>
              <TableCell>Actividad</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Tiempo</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((activity) => {
              const statusInfo = getStatusInfo(activity.status);
              return (
                <TableRow key={activity.id} hover>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar src={activity.agent.avatar} sx={{ width: 30, height: 30 }} />
                      <Typography variant="body2">{activity.agent.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{activity.activity}</Typography>
                    <Typography variant="caption" color="text.secondary">{activity.ticketId}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{activity.customer}</Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Icon icon="mdi:clock-outline" width="16px" height="16px" color="text.secondary" />
                      <Typography variant="body2">{activity.time}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      icon={<Icon icon={statusInfo.icon} />}
                      label={activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                      size="small"
                      sx={{
                        backgroundColor: statusInfo.bgColor,
                        color: statusInfo.color,
                        fontWeight: 'medium',
                        '& .MuiChip-icon': {
                          color: statusInfo.color
                        }
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
