import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { muiTheme } from './muiTheme';
import dynamic from 'next/dynamic';

// ThemeSwitcher cargado dinámicamente sin SSR
const ThemeSwitcher = dynamic(() => import('@/theme/ThemeSwitcher').then(mod => mod.ThemeSwitcher), {
  ssr: false
});

// Propiedades para ThemeProvider
interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Proveedor de tema simplificado que evita completamente usar hooks en SSR
 */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Rendereamos un tema por defecto
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <ThemeSwitcher>
        {children}
      </ThemeSwitcher>
    </MuiThemeProvider>
  );
};
