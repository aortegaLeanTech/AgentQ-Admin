'use client';

import React from 'react';

// Estado global del tema
export const ThemeState = {
  isDarkMode: false,
  setIsDarkMode: (value: boolean) => {}
};

/**
 * Hook que permite acceder y manipular el tema
 * IMPORTANTE: Este hook SOLO debe usarse en componentes cliente
 */
export function useTheme() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  
  // Sincronizamos con el estado global
  React.useEffect(() => {
    ThemeState.isDarkMode = isDarkMode;
    ThemeState.setIsDarkMode = setIsDarkMode;
  }, [isDarkMode]);
  
  // Cliente montado
  React.useEffect(() => {
    setMounted(true);
    
    // Detectar preferencia inicial
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Aplicar clase al documento
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);
  
  // Si no estamos montados, devolvemos valores por defecto
  if (!mounted) {
    return {
      isDarkMode: false,
      toggleTheme: () => {}
    };
  }
  
  return {
    isDarkMode,
    toggleTheme: () => setIsDarkMode(!isDarkMode)
  };
}
