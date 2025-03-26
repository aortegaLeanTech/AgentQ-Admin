'use client';

import * as React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ThemeMode, ThemeState } from './ThemeProvider';
import { muiTheme, muiDarkTheme } from './muiTheme';

// Definición del tipo para el contexto del tema
interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  mounted: boolean;
}

// Crear el contexto
const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'system',
  setTheme: () => {},
  isDarkMode: false,
  toggleTheme: () => {},
  mounted: false
});

/**
 * Hook para acceder al contexto del tema
 * Este hook SOLO debe usarse en componentes del cliente
 */
export function useTheme(): ThemeContextType {
  return React.useContext(ThemeContext);
}

interface ClientThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Componente proveedor de tema que se ejecuta ÚNICAMENTE en el cliente
 */
export const ClientThemeProvider: React.FC<ClientThemeProviderProps> = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState<ThemeMode>('system');

  // Efecto para inicializar el tema
  React.useEffect(() => {
    setMounted(true);
    // Solo se ejecuta en el cliente
    const savedTheme = localStorage.getItem('theme') as ThemeMode || 'system';
    setCurrentTheme(savedTheme);
    
    // Verificar si el modo oscuro está activo
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(savedTheme === 'dark' || (savedTheme === 'system' && prefersDark));
    
    // Escuchar cambios en la preferencia del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (currentTheme === 'system') {
        setIsDarkMode(e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [currentTheme]);

  // Función para cambiar el tema
  const setTheme = (theme: ThemeMode) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // System preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      prefersDark
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    }
  };

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  // Actualizar el estado global
  ThemeState.isDarkMode = isDarkMode;
  ThemeState.currentTheme = currentTheme;
  ThemeState.setTheme = setTheme;
  ThemeState.toggleTheme = toggleTheme;

  // Seleccionar el tema de Material UI
  const theme = isDarkMode ? muiDarkTheme : muiTheme;
  
  // Valores para el contexto
  const themeContextValue: ThemeContextType = {
    theme: currentTheme,
    setTheme,
    isDarkMode,
    toggleTheme,
    mounted
  };

  // No renderizar contenido visible hasta que estemos en el cliente
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <MuiThemeProvider theme={theme}>
          {children}
        </MuiThemeProvider>
      </NextThemeProvider>
    </ThemeContext.Provider>
  );
};
