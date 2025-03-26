'use client';

import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { muiTheme, muiDarkTheme } from './muiTheme';

// Definición del contexto del tema
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Crear el contexto con un valor por defecto
const ThemeContext = React.createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {}
});

// Hook para acceder al contexto del tema
export function useTheme() {
  return React.useContext(ThemeContext);
}

// Propiedades para ThemeSwitcher
interface ThemeSwitcherProps {
  children: React.ReactNode;
}

/**
 * Componente de cliente que maneja el estado del tema
 * Este componente SOLO se carga en el cliente, evitando errores de SSR
 */
export function ThemeSwitcher({ children }: ThemeSwitcherProps) {
  // Estado para el modo oscuro
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  // Estado para controlar el montaje
  const [mounted, setMounted] = React.useState(false);

  // Efecto para detectar preferencias del sistema y sincronizar el tema
  React.useEffect(() => {
    // Marcar que el componente está montado
    setMounted(true);
    
    // Comprobar preferencia del sistema o valor guardado
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Establecer el tema inicial
    setIsDarkMode(
      savedTheme === 'dark' || 
      (savedTheme === null && prefersDark)
    );
    
    // Escuchar cambios en la preferencia del sistema
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };
    
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  // Función para alternar el tema
  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem('theme', newIsDarkMode ? 'dark' : 'light');
    
    // Actualizar clase en el documento para estilos CSS
    if (newIsDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Usar el tema de Material UI según el modo
  const theme = isDarkMode ? muiDarkTheme : muiTheme;
  
  // No renderizar nada visible hasta que el componente esté montado
  // Esto previene errores de hidratación
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
