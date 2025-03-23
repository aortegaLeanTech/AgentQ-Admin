import { createTheme } from '@mui/material/styles';

// Definiendo la paleta de colores completa migrada desde Tailwind
const colors = {
  primary: {
    50: '#FFF2EB',
    100: '#FFE5D7',
    200: '#FFD0B3',
    300: '#FFAC80',
    400: '#FF7D40',
    500: '#FF4E00', // DEFAULT color
    600: '#CC3E00',
    700: '#992F00',
    800: '#661F00',
    900: '#331000',
    main: '#FF4E00', // Para compatibilidad con MUI
    light: '#FF7D40',
    dark: '#CC3E00',
    contrastText: '#FFFFFF',
  },
  secondary: {
    50: '#F2F1FE',
    100: '#E4E3FD',
    200: '#C9C7FB',
    300: '#AFABF9',
    400: '#948DF7',
    500: '#7A70F5',
    600: '#665EF3', // DEFAULT color
    700: '#514BCF',
    800: '#3D39AB',
    900: '#28266E',
    main: '#665EF3', // Para compatibilidad con MUI
    light: '#948DF7',
    dark: '#514BCF',
    contrastText: '#FFFFFF',
  },
  // Puedes agregar más colores personalizados aquí
  darkblue: {
    50: '#F5F7FA',
    100: '#E4E7F0',
    200: '#CBD2E1',
    300: '#A8B3CC',
    400: '#8795B7',
    500: '#667AA1',
    600: '#4E6085',
    700: '#3A4866',
    800: '#263047',
    900: '#0A2540'
  }
};

// Extender MUI theme con los colores personalizados
export const extendTheme = (options: any = {}) => {
  return createTheme({
    ...options,
    palette: {
      ...(options.palette || {}),
      primary: colors.primary,
      secondary: colors.secondary,
    },
    // Puedes acceder a los colores personalizados en componentes con theme.colors.primary[500]
    colors,
  });
};

// Tema claro principal
export const muiTheme = extendTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA',
    },
    text: {
      primary: '#3B3A5C',
      secondary: '#6B6B7B',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '6px',
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '6px',
          },
        },
      },
    },
    // Sobreescritura global para asegurar que MUI pueda ser sobrescrito
    MuiCssBaseline: {
      styleOverrides: {
        '#root': {
          // Esto es equivalente a 'important: true' en Tailwind
          '& .MuiButtonBase-root': {
            zIndex: 1,
          },
        },
      },
    },
  },
});

// Tema oscuro
export const muiDarkTheme = extendTheme({
  palette: {
    mode: 'dark',
    primary: colors.primary,
    secondary: colors.secondary,
    background: {
      default: '#1A1A27',
      paper: '#242436',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B4B4C7',
    },
  },
  components: {
    ...muiTheme.components,
  },
});

// Acceso a los colores a través del tema
// Para usar estos colores, puedes escribir: 
// theme.colors.primary[500] o theme.colors.secondary[600]
declare module '@mui/material/styles' {
  interface Theme {
    colors: typeof colors;
  }
  interface ThemeOptions {
    colors?: typeof colors;
  }
}
