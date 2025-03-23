import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// Import modular components
import { SidebarHeader, SidebarFooter, SidebarWatermark } from './SidebarComponents';

// Re-export components from FormComponents for backward compatibility
export { LoginLogo, FormField, LoginButton, PasswordReset } from './FormComponents';

// Component for the login sidebar with AgentQ background image
export const LoginSidebar = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        background: 'linear-gradient(125deg, #0A2540 0%, #1565C0 65%, #0A47A9 100%)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        borderRadius: 0, // Sin bordes redondeados en ningún tamaño de pantalla
        transition: 'all 0.3s ease-in-out',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(/images/agentq/background_image.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.22,
          mixBlendMode: 'overlay',
          pointerEvents: 'none'
        },
        '&::after': { // Add a subtle pattern overlay
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 25%), radial-gradient(circle at 85% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 20%)',
          opacity: 0.8,
          pointerEvents: 'none'
        }
      }}
    >
      {/* Watermark with AgentQ logo */}
      <SidebarWatermark />
      
      {/* Main content container */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          px: { xs: 4, sm: 6, md: 8 }, // Responsive padding
          color: 'white'
        }}
      >
        {/* Header text component */}
        <SidebarHeader />
        
        {/* Footer with Lean Solutions Group logo */}
        <SidebarFooter />
      </Box>
    </Box>
  );
};

// Note: The main LoginForm component is defined in LoginForm.tsx
