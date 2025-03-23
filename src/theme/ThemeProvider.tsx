// Optimized imports to avoid TypeScript errors
import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import CssBaseline from '@mui/material/CssBaseline';
import { muiTheme, muiDarkTheme } from './muiTheme';

interface ThemeContextType {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mounted, setMounted] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState<string>('system');

  // Ensure rendering only happens client-side
  React.useEffect(() => {
    setMounted(true);
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme') || 'system';
    setCurrentTheme(savedTheme);
    
    // Check if dark mode is active
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(savedTheme === 'dark' || (savedTheme === 'system' && prefersDark));
    
    // Listen for changes in system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (currentTheme === 'system') {
        setIsDark(e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [currentTheme]);

  const setTheme = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      // System preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const theme = isDark ? muiDarkTheme : muiTheme;
  const themeContextValue: ThemeContextType = {
    theme: currentTheme,
    setTheme,
    isDark,
    toggleTheme,
    mounted
  };

  // Don't render until client-side to prevent hydration mismatch
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </NextThemeProvider>
    </ThemeContext.Provider>
  );
};
