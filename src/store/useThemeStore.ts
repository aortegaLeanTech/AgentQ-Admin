import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
  themeMode: ThemeMode;
  isDarkMode: boolean;
  systemPreference: boolean;
  setThemeMode: (mode: ThemeMode) => void;
  toggleThemeMode: () => void;
  setIsDarkMode: (isDark: boolean) => void;
}

// Usando type assertion para evitar el error de función no tipada
export const useThemeStore = create(
  persist(
    (set) => ({
      themeMode: 'system' as ThemeMode,
      isDarkMode: false,
      systemPreference: false,
      setThemeMode: (mode: ThemeMode) => set({ themeMode: mode }),
      toggleThemeMode: () => set((state) => ({ 
        themeMode: state.themeMode === 'dark' ? 'light' : 'dark' as ThemeMode 
      })),
      setIsDarkMode: (isDark: boolean) => set({ isDarkMode: isDark }),
    }),
    {
      name: 'agentq-theme-storage',
    }
  )
) as unknown as ((selector: (state: ThemeState) => unknown, equals?: (a: unknown, b: unknown) => boolean) => unknown) & { getState: () => ThemeState; setState: (partial: ThemeState | ((state: ThemeState) => ThemeState), replace?: boolean) => void };
