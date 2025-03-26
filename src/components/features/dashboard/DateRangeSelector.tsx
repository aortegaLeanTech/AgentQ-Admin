import React from 'react';
import { Box, Button, MenuItem, Paper, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import ButtonGroup from '@mui/material/ButtonGroup';
import Popover from '@mui/material/Popover';
import { Icon } from '@/components/ui/Icon/Icon';

export type DateRange = 'today' | 'week' | 'month' | 'year' | 'custom';

interface DateRangeSelectorProps {
  selectedRange: DateRange;
  onRangeChange: (range: DateRange) => void;
  customDateStart?: Date;
  customDateEnd?: Date;
  onCustomDateChange?: (start: Date, end: Date) => void;
}

export const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  selectedRange = 'week',
  onRangeChange,
  customDateStart,
  customDateEnd,
  onCustomDateChange
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRangeSelect = (range: DateRange) => {
    onRangeChange(range);
    handleClose();
  };

  // Formatear las fechas para mostrar
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  // Obtener el texto del rango seleccionado
  const getRangeText = () => {
    switch(selectedRange) {
      case 'today':
        return 'Hoy';
      case 'week':
        return 'Esta semana';
      case 'month':
        return 'Este mes';
      case 'year':
        return 'Este año';
      case 'custom':
        if (customDateStart && customDateEnd) {
          return `${formatDate(customDateStart)} - ${formatDate(customDateEnd)}`;
        }
        return 'Personalizado';
      default:
        return 'Seleccionar período';
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        endIcon={<Icon icon="mdi:chevron-down" />}
        sx={{
          borderRadius: '20px',
          px: 2,
          py: 0.5,
          textTransform: 'none',
          fontWeight: 'medium',
          fontSize: '0.875rem',
        }}
      >
        <Icon icon="mdi:calendar" className="mr-1" />
        {getRangeText()}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { width: 200, mt: 1 }
        }}
      >
        <MenuItem 
          onClick={() => handleRangeSelect('today')}
          selected={selectedRange === 'today'}
        >
          <Icon icon="mdi:calendar-today" className="mr-1.5" />
          Hoy
        </MenuItem>
        <MenuItem 
          onClick={() => handleRangeSelect('week')}
          selected={selectedRange === 'week'}
        >
          <Icon icon="mdi:calendar-week" className="mr-1.5" />
          Esta semana
        </MenuItem>
        <MenuItem 
          onClick={() => handleRangeSelect('month')}
          selected={selectedRange === 'month'}
        >
          <Icon icon="mdi:calendar-month" className="mr-1.5" />
          Este mes
        </MenuItem>
        <MenuItem 
          onClick={() => handleRangeSelect('year')}
          selected={selectedRange === 'year'}
        >
          <Icon icon="mdi:calendar-range" className="mr-1.5" />
          Este año
        </MenuItem>
        <MenuItem 
          onClick={() => handleRangeSelect('custom')}
          selected={selectedRange === 'custom'}
        >
          <Icon icon="mdi:calendar-edit" className="mr-1.5" />
          Personalizado
        </MenuItem>
      </Menu>
    </Box>
  );
};
