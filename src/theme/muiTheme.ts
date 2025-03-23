import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#FF4E00',
      light: '#FF7D40',
      dark: '#CC3E00',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#665EF3',
      light: '#948DF7',
      dark: '#514BCF',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA',
    },
    text: {
      primary: '#3B3A5C',
      secondary: '#6B6B7B',
    },
    mode: 'light',
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
  },
});

// Dark theme
export const muiDarkTheme = createTheme({
  ...muiTheme,
  palette: {
    ...muiTheme.palette,
    mode: 'dark',
    primary: {
      main: '#FF4E00',
      light: '#FF7D40',
      dark: '#CC3E00',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#665EF3',
      light: '#948DF7',
      dark: '#514BCF',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#1A1A27',
      paper: '#242436',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B4B4C7',
    },
  },
});
