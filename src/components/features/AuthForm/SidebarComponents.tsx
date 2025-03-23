import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fadeInUp, shimmer } from './animations';

// Common text style to avoid repetition
const headingTextStyle = {
  fontWeight: 700,
  mb: 0,
  lineHeight: 'tight',
  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
  letterSpacing: '-0.02em',
  opacity: 0,
  textAlign: { xs: 'center', sm: 'left' }
};

// Component for the header text in the sidebar
export const SidebarHeader = () => {
  return (
    <Box
      sx={{
        mb: 16,
        position: 'relative',
        zIndex: 2,
        pl: { xs: 0, sm: 2 },
        mt: { xs: 4, sm: 6 }
      }}
    >
      <Typography
        variant="h1"
        sx={{
          ...headingTextStyle,
          fontSize: { xs: '3.5rem', sm: '4.5rem' },
          animation: `${fadeInUp} 0.8s ease forwards`,
          background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,1) 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animationDelay: '0.2s',
        }}
      >
        AgentQ:
      </Typography>
      
      {['Creating a', 'intelligent', 'assistance'].map((text, index) => (
        <Typography
          key={`header-text-${index}`}
          variant="h1"
          sx={{
            ...headingTextStyle,
            fontSize: { xs: '3.5rem', sm: '4.5rem' },
            animation: `${fadeInUp} 0.8s ease forwards${index === 2 ? `, ${shimmer} 3s infinite linear` : ''}`,
            animationDelay: `${0.4 + (index * 0.2)}s`,
            ...(index === 2 && {
              background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(214,235,255,1) 50%, rgba(255,255,255,1) 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            })
          }}
        >
          {text}
        </Typography>
      ))}
    </Box>
  );
};

// Component for the footer with Lean Solutions Group logo
export const SidebarFooter = () => {
  return (
    <Box 
      sx={{ 
        position: 'absolute', 
        bottom: { xs: 16, sm: 24 },
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        opacity: 0,
        animation: `${fadeInUp} 0.8s ease forwards`,
        animationDelay: '1.2s'
      }}
    >
      <Image 
        src="/images/agentq/logo_lockup.png" 
        alt="Powered by Lean Solutions Group" 
        width={200} 
        height={45}
        style={{ 
          height: 'auto', 
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
          opacity: 0.9
        }}
      />
    </Box>
  );
};

// Watermark component for the sidebar with watermarks in corners
export const SidebarWatermark = () => {
  // Array of corner positions
  const corners = [
    { position: 'top-left', top: 20, left: 20, rotate: -15 },
    { position: 'top-right', top: 20, right: 20, rotate: 15 },
    { position: 'bottom-left', bottom: 80, left: 20, rotate: 15 },
    { position: 'bottom-right', bottom: 80, right: 20, rotate: -15 }
  ];
  
  return (
    <>
      {corners.map((corner, index) => (
        <Box
          key={`watermark-${index}`}
          sx={{
            position: 'absolute',
            top: corner.top,
            left: corner.left,
            right: corner.right,
            bottom: corner.bottom,
            transform: `rotate(${corner.rotate}deg)`,
            zIndex: 1,
            opacity: 0.04,
            pointerEvents: 'none',
            width: '120px',
            height: '50px'
          }}
        >
          <Image
            src="/images/agentq/main_logo.png"
            alt="AgentQ Watermark"
            width={120}
            height={40}
            style={{
              height: 'auto',
              width: '100%',
              filter: 'brightness(0) invert(1)'
            }}
          />
        </Box>
      ))}
    </>
  );
};
