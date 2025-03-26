import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Icon } from '@/components/ui/Icon/Icon';
import { useTheme } from '@/theme/ThemeSwitcher';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const { isDarkMode: isDark, toggleTheme } = useTheme();

  return (
    <Tooltip title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}>
      <IconButton 
        onClick={toggleTheme} 
        className={`text-darkblue-700 dark:text-white ${className}`}
        size="large"
      >
        <Icon 
          icon={isDark ? 'mdi:weather-sunny' : 'mdi:weather-night'} 
          width={24} 
          height={24}
        />
      </IconButton>
    </Tooltip>
  );
};
