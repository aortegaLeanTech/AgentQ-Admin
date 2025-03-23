import React from 'react';
import { AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Container, CssBaseline } from '@mui/material';
import { Icon } from '@/components/ui/Icon/Icon';
import { ThemeToggle } from '@/components/ui/ThemeToggle/ThemeToggle';

interface AppLayoutProps {
  children: React.ReactNode;
}

const sidebarWidth = 240;

const menuItems = [
  { title: 'Dashboard', icon: 'mdi:view-dashboard', path: '/' },
  { title: 'Usuarios', icon: 'mdi:account-group', path: '/users' },
  { title: 'Configuración', icon: 'mdi:cog', path: '/settings' },
  { title: 'Reportes', icon: 'mdi:chart-bar', path: '/reports' },
];

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box className="flex h-screen bg-gray-50 dark:bg-darkblue-900">
      <CssBaseline />
      <AppBar
        position="fixed"
        className="bg-white dark:bg-darkblue-800 text-darkblue-700 dark:text-white"
        sx={{ 
          width: `calc(100% - ${sidebarWidth}px)`, 
          ml: `${sidebarWidth}px`,
          boxShadow: 'sm' 
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AgentQ Admin
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>
      
      <Drawer
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: sidebarWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
        className="dark:bg-darkblue-800"
      >
        <Box className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-darkblue-700">
          <Typography variant="h6" className="font-bold text-primary dark:text-primary-400">
            AgentQ Admin
          </Typography>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.title} className="hover:bg-gray-100 dark:hover:bg-darkblue-700">
              <ListItemIcon>
                <Icon icon={item.icon} className="text-primary-500 dark:text-primary-400" />
              </ListItemIcon>
              <ListItemText primary={item.title} className="text-darkblue-700 dark:text-white" />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${sidebarWidth}px)` }}
        className="pt-20"
      >
        <Container maxWidth="lg">
          {children}
        </Container>
      </Box>
    </Box>
  );
};
