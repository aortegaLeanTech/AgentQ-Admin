import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
  Tooltip,
  IconButton,
  Divider
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/router';
import { Icon } from '@/components/ui/Icon/Icon';
import { useColorTheme } from '@/theme/colorTheme';
import { menuItems, performanceItems, bottomItems } from '@/data/menu';

// Ancho de barra lateral
const sidebarWidth = 240;
const collapsedWidth = 70;

// Los items del menú ahora se obtienen del store global

interface SidebarProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

export const Sidebar = ({ collapsed, toggleCollapsed }: SidebarProps) => {
  const router = useRouter();
  const [expandedItem, setExpandedItem] = React.useState('performance');
  const [activePath, setActivePath] = React.useState('/dashboard');
  const theme = useColorTheme();
  
  const handleNavigation = (path: string) => {
    setActivePath(path);
    router.push(path);
  };
  
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? collapsedWidth : sidebarWidth,
        flexShrink: 0,
        transition: 'width 0.2s ease-in-out',
        '& .MuiDrawer-paper': {
          width: collapsed ? collapsedWidth : sidebarWidth,
          boxSizing: 'border-box',
          bgcolor: theme.sidebar,
          border: 'none',
          boxShadow: theme.boxShadow,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          overflowX: 'hidden',
          transition: 'width 0.2s ease-in-out',
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: '4px',
          },
        },
      }}
    >
      <Box>
        {/* Logo y Toggle de collapse */}
        <Box sx={{ 
          p: collapsed ? 1 : 2, 
          pt: collapsed ? 2 : 3, 
          pb: collapsed ? 2 : 4, 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'space-between'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Avatar 
              src="/assets/logo.svg" 
              alt="AgentQ" 
              sx={{ 
                width: 35, 
                height: 35, 
                bgcolor: theme.primary,
                mr: collapsed ? 0 : 1.5,
                borderRadius: '8px'
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>Q</Typography>
            </Avatar>
            {!collapsed && (
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.textPrimary, display: 'flex', alignItems: 'center' }}>
                Agent<Typography component="span" sx={{ color: theme.primary, fontWeight: 'bold' }}>Q</Typography>
              </Typography>
            )}
          </Box>
          
          <IconButton 
            onClick={toggleCollapsed}
            sx={{ 
              color: theme.textSecondary,
              display: collapsed ? 'none' : 'flex',
              padding: '4px'
            }}
          >
            <Icon icon="mdi:chevron-left" width={20} />
          </IconButton>
        </Box>
        
        {/* Botón de expandir cuando está colapsado */}
        {collapsed && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <IconButton 
              onClick={toggleCollapsed}
              sx={{ color: theme.textSecondary, padding: '4px' }}
            >
              <Icon icon="mdi:chevron-right" width={20} />
            </IconButton>
          </Box>
        )}
        
        {/* Menú principal */}
        <List sx={{ px: collapsed ? 1 : 2 }}>
          {menuItems.map((item) => (
            <Tooltip 
              key={item.text}
              title={collapsed ? item.text : ""}
              placement="right"
              arrow
            >
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                sx={{
                  borderRadius: '8px',
                  mb: 0.5,
                  py: 1,
                  px: collapsed ? 1 : 2,
                  minHeight: '40px',
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  bgcolor: activePath === item.path ? theme.primaryLight : 'transparent',
                  color: activePath === item.path ? theme.primary : theme.textSecondary,
                  '&:hover': {
                    bgcolor: activePath === item.path ? theme.primaryLight : theme.hoverBg,
                  }
                }}
              >
                <ListItemIcon sx={{ 
                  minWidth: collapsed ? 0 : 40, 
                  mr: collapsed ? 0 : 1,
                  color: activePath === item.path ? theme.primary : theme.textSecondary
                }}>
                  <Icon icon={item.icon} width={22} />
                </ListItemIcon>
                {!collapsed && (
                  <ListItemText 
                    primary={item.text} 
                    primaryTypographyProps={{ 
                      fontSize: '14px',
                      fontWeight: activePath === item.path ? 600 : 500
                    }} 
                  />
                )}
              </ListItemButton>
            </Tooltip>
          ))}
          
          {/* Performance submenu */}
          <Box sx={{ mb: 0.5 }}>
            <Tooltip 
              title={collapsed ? "Performance" : ""}
              placement="right"
              arrow
            >
              <ListItemButton
                onClick={() => setExpandedItem(expandedItem === 'performance' ? '' : 'performance')}
                sx={{
                  borderRadius: '8px',
                  py: 1,
                  px: collapsed ? 1 : 2,
                  minHeight: '40px',
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  color: expandedItem === 'performance' ? theme.primary : theme.textSecondary,
                  bgcolor: expandedItem === 'performance' ? theme.primaryLight : 'transparent',
                  '&:hover': {
                    bgcolor: expandedItem === 'performance' ? theme.primaryLight : theme.hoverBg,
                  }
                }}
              >
                <ListItemIcon sx={{ 
                  minWidth: collapsed ? 0 : 40, 
                  mr: collapsed ? 0 : 1,
                  color: expandedItem === 'performance' ? theme.primary : theme.textSecondary
                }}>
                  <Icon icon="mdi:trending-up" width={22} />
                </ListItemIcon>
                {!collapsed && (
                  <>
                    <ListItemText 
                      primary="Performance" 
                      primaryTypographyProps={{ 
                        fontSize: '14px',
                        fontWeight: expandedItem === 'performance' ? 600 : 500,
                      }}
                    />
                    <Icon 
                      icon={expandedItem === 'performance' ? 'mdi:chevron-up' : 'mdi:chevron-down'} 
                      width={20} 
                    />
                  </>
                )}
              </ListItemButton>
            </Tooltip>
            
            {expandedItem === 'performance' && !collapsed && (
              <List component="div" disablePadding>
                {performanceItems.map((item) => (
                  <ListItemButton
                    key={item.text}
                    onClick={() => handleNavigation(item.path)}
                    sx={{
                      pl: 7,
                      py: 0.75,
                      borderRadius: '8px',
                      mb: 0.5,
                      color: activePath === item.path ? theme.primary : theme.textSecondary,
                      bgcolor: activePath === item.path ? theme.primaryLight : 'transparent',
                      '&:hover': {
                        bgcolor: activePath === item.path ? theme.primaryLight : theme.hoverBg,
                      }
                    }}
                  >
                    <ListItemText 
                      primary={item.text}
                      primaryTypographyProps={{ 
                        fontSize: '14px',
                        fontWeight: activePath === item.path ? 600 : 500
                      }} 
                    />
                  </ListItemButton>
                ))}
              </List>
            )}
          </Box>
        </List>
      </Box>
      
      {/* Menu inferior */}
      <List sx={{ p: collapsed ? 1 : 2 }}>
        {bottomItems.map((item) => (
          <Tooltip 
            key={item.text}
            title={collapsed ? item.text : ""}
            placement="right"
            arrow
          >
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              sx={{
                borderRadius: '8px',
                mb: 0.5,
                py: 1,
                px: collapsed ? 1 : 2,
                minHeight: '40px',
                justifyContent: collapsed ? 'center' : 'flex-start',
                color: activePath === item.path ? theme.primary : theme.textSecondary,
                '&:hover': {
                  bgcolor: theme.hoverBg,
                }
              }}
            >
              <ListItemIcon sx={{ 
                minWidth: collapsed ? 0 : 40, 
                mr: collapsed ? 0 : 1,
                color: activePath === item.path ? theme.primary : theme.textSecondary
              }}>
                <Icon icon={item.icon} width={22} />
              </ListItemIcon>
              {!collapsed && (
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{ 
                    fontSize: '14px',
                    fontWeight: 500
                  }} 
                />
              )}
            </ListItemButton>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};
