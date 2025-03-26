import { useTheme } from './ThemeSwitcher';

/**
 * Hook que proporciona los colores del tema según el modo actual (claro/oscuro)
 * Centraliza la definición de colores para evitar duplicación en componentes
 */
export const useColorTheme = () => {
  const { isDarkMode } = useTheme();
  
  return {
    background: isDarkMode ? '#1A1C1E' : '#F8F9FA',
    contentBg: isDarkMode ? '#26282B' : '#FFFFFF',
    sidebar: isDarkMode ? '#212325' : '#FFFFFF',
    headerBar: isDarkMode ? '#26282B' : '#FFFFFF',
    primary: '#6366F1',
    primaryLight: isDarkMode ? '#2D2E5F' : '#EEF2FF',
    textPrimary: isDarkMode ? '#FFFFFF' : '#111827',
    textSecondary: isDarkMode ? '#9CA3AF' : '#4B5563',
    textMuted: isDarkMode ? '#6B7280' : '#9CA3AF',
    divider: isDarkMode ? '#383A3F' : '#E5E7EB',
    hoverBg: isDarkMode ? '#2F3136' : '#F3F4F6',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
  };
};
