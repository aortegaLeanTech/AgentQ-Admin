import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Divider,
  MenuItem,
  ListItemIcon,
  Tooltip,
  useTheme as useMuiTheme
} from '@mui/material';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import { Icon } from '@/components/ui/Icon/Icon';
import { ThemeToggle } from '@/components/ui/ThemeToggle/ThemeToggle';
import { useColorTheme } from '@/theme/colorTheme';
import { useUserStore } from '@/store/useUserStore';

interface NavbarProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
  title: string;
}

export const Navbar = ({ collapsed, toggleCollapsed, title }: NavbarProps) => {
  const [userMenuAnchor, setUserMenuAnchor] = React.useState<null | HTMLElement>(null);
  const theme = useColorTheme();
  const { user, logout } = useUserStore();
  
  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };
  
  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };
  
  const muiTheme = useMuiTheme();

  return (
    <AppBar 
      position="static" 
      elevation={0} 
      sx={{ 
        bgcolor: theme.headerBar, 
        borderBottom: `1px solid ${theme.divider}`,
        backdropFilter: 'blur(6px)',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      }}
    >
      <Toolbar sx={{ height: 64, px: { xs: 1.5, sm: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          {collapsed && (
            <IconButton 
              onClick={toggleCollapsed} 
              sx={{ 
                mr: 2, 
                color: theme.textSecondary,
                '&:hover': {
                  bgcolor: theme.hoverBg
                }
              }}
              size="small"
            >
              <Icon icon="mdi:menu" width={24} />
            </IconButton>
          )}
          <Typography 
            variant="h6" 
            sx={{ 
              color: theme.textPrimary, 
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Box 
              component="span" 
              sx={{ 
                display: { xs: 'none', sm: 'block' },
                mr: 0.5,
                fontSize: '1.375rem',
                color: theme.primary
              }}
            >
              |
            </Box>
            {title}
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1.5 } }}>
          <ThemeToggle />
          
          <Tooltip title="Notificaciones">
            <IconButton 
              size="medium" 
              sx={{ 
                color: theme.textSecondary,
                transition: 'all 0.2s ease',
                bgcolor: 'transparent',
                '&:hover': {
                  bgcolor: theme.hoverBg,
                  color: theme.primary
                }
              }}
            >
              <Badge 
                color="error" 
                variant="dot" 
                invisible={false}
                sx={{
                  '& .MuiBadge-badge': {
                    top: 5,
                    right: 5
                  }
                }}
              >
                <Icon icon="mdi:bell-outline" width={22} />
              </Badge>
            </IconButton>
          </Tooltip>
          
          <Divider orientation="vertical" flexItem sx={{ mx: { xs: 0.5, sm: 1.5 }, height: '28px', opacity: 0.6 }} />
          
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer',
              py: 0.5,
              px: { xs: 0.5, sm: 1 },
              borderRadius: 1.5,
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: theme.hoverBg
              }
            }} 
            onClick={handleUserMenuOpen}
          >
            <Avatar 
              src="/images/avatar.jpg" 
              alt="Usuario"
              sx={{ 
                width: 36, 
                height: 36, 
                mr: { xs: 0.5, sm: 1.5 },
                border: `2px solid ${theme.divider}`,
                background: `linear-gradient(45deg, ${theme.primary}20, ${theme.primary}30)`,
              }}
            />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 600, 
                  color: theme.textPrimary, 
                  lineHeight: 1.2,
                  fontSize: '0.9rem'
                }}
              >
                {user?.name || 'Carlos Muñoz'}
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: theme.textMuted, 
                  fontSize: '0.75rem',
                  fontWeight: 500
                }}
              >
                {user?.email || 'carlos@lean.tech'}
              </Typography>
            </Box>
            <Box sx={{ color: theme.textMuted, ml: { xs: 0, sm: '6px' } }}>
              <Icon icon="mdi:chevron-down" width={16} />
            </Box>
          </Box>
          
          <Menu
            anchorEl={userMenuAnchor}
            open={Boolean(userMenuAnchor)}
            onClose={handleUserMenuClose}
            sx={{ mt: 1.5 }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              elevation: 1,
              sx: { 
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
                minWidth: 200,
                borderRadius: 1.5,
                overflow: 'hidden',
                border: `1px solid ${theme.divider}`
              }
            }}
          >
            <Box 
              sx={{ 
                px: 2.5, 
                py: 2, 
                borderBottom: `1px solid ${theme.divider}`,
                backgroundColor: `${theme.primary}10`
              }}
            >
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 600,
                  color: theme.textPrimary
                }}
              >
                {user?.name || 'Carlos Muñoz'}
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: theme.textMuted,
                  fontWeight: 500
                }}
              >
                {user?.email || 'carlos@lean.tech'}
              </Typography>
            </Box>
            <MenuItem 
              onClick={handleUserMenuClose} 
              sx={{ 
                py: 1.75, 
                px: 2.5,
                transition: 'all 0.15s ease',
                '&:hover': {
                  backgroundColor: theme.hoverBg
                }
              }}
            >
              <ListItemIcon sx={{ color: theme.primary, minWidth: 36 }}>
                <Icon icon="mdi:account-outline" width={20} />
              </ListItemIcon>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>Your Profile</Typography>
            </MenuItem>
            <MenuItem 
              onClick={handleUserMenuClose} 
              sx={{ 
                py: 1.75, 
                px: 2.5,
                transition: 'all 0.15s ease',
                '&:hover': {
                  backgroundColor: theme.hoverBg
                }
              }}
            >
              <ListItemIcon sx={{ color: theme.primary, minWidth: 36 }}>
                <Icon icon="mdi:cog-outline" width={20} />
              </ListItemIcon>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>Settings</Typography>
            </MenuItem>
            <Divider />
            <MenuItem 
              onClick={() => {
                logout();
                handleUserMenuClose();
              }} 
              sx={{ 
                py: 1.75, 
                px: 2.5, 
                color: muiTheme.palette.error.main,
                transition: 'all 0.15s ease',
                '&:hover': {
                  backgroundColor: `${muiTheme.palette.error.main}10`
                }
              }}
            >
              <ListItemIcon sx={{ color: muiTheme.palette.error.main, minWidth: 36 }}>
                <Icon icon="mdi:logout-variant" width={20} />
              </ListItemIcon>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>Sign out</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
