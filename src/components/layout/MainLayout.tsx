import * as React from 'react';
import { 
  Box, 
  Paper, 
  CssBaseline
} from '@mui/material';
import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import { Navbar } from '@/components/layout/navbar/Navbar';
import { useColorTheme } from '@/theme/colorTheme';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const theme = useColorTheme();
  
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  
  return (
    <Box sx={{ 
      display: 'flex', 
      height: '100vh', 
      overflow: 'hidden', 
      bgcolor: theme.background,
      color: theme.textPrimary
    }}>
      <CssBaseline />
      
      {/* Barra lateral */}
      <Sidebar 
        collapsed={collapsed} 
        toggleCollapsed={toggleCollapsed} 
      />
      
      {/* Contenido principal */}
      <Box 
        sx={{ 
          flexGrow: 1,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Barra de navegación superior */}
        <Navbar 
          collapsed={collapsed} 
          toggleCollapsed={toggleCollapsed} 
          title="Dashboard"
        />
        
        {/* Contenido principal */}
        <Box sx={{ flexGrow: 1, p: 3, overflowY: 'auto' }}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              borderRadius: 2, 
              bgcolor: theme.contentBg, 
              boxShadow: theme.boxShadow
            }}
          >
            {children}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
