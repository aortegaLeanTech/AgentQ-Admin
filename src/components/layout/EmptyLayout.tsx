import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';

interface EmptyLayoutProps {
  children: React.ReactNode;
}

export const EmptyLayout = ({ children }: EmptyLayoutProps) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      minHeight: '100vh',
      bgcolor: 'background.default' 
    }}>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        {children}
      </Container>
    </Box>
  );
};
