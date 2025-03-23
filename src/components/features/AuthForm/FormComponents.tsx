import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { fadeInUp } from './animations';

// Logo component
export const LoginLogo = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        mb: { xs: 6, md: 8 },
        animation: `${fadeInUp} 0.7s ease forwards`,
        opacity: 0
      }}
    >
      <Box 
        sx={{ 
          mb: 3, 
          position: 'relative',
          '&::after': { // Add subtle glow effect
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            filter: 'blur(20px)',
            backgroundColor: 'rgba(21, 101, 192, 0.08)',
            borderRadius: '50%',
            zIndex: -1
          }
        }}
      >
        <Image 
          src="/images/agentq/main_logo.png" 
          alt="AgentQ Logo" 
          width={240} 
          height={80} 
          style={{ 
            height: 'auto',
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05))'
          }}
          priority
        />
      </Box>
      <Typography 
        variant="subtitle1" 
        sx={{ 
          fontSize: { xs: '1rem', md: '1.1rem' },
          color: '#0A2540', 
          mt: 1,
          letterSpacing: '0.01em',
          fontWeight: 500,
          opacity: 0.85,
          textAlign: 'center'
        }}
      >
        Login to your AgentQ account
      </Typography>
    </Box>
  );
};

// Form field component
export const FormField = ({ label, id, type = 'text', placeholder, register, error, errorMessage }: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  register: any;
  error?: boolean;
  errorMessage?: string;
}) => {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{ 
        mb: 4,
        opacity: 0,
        animation: `${fadeInUp} 0.6s ease forwards`,
        animationDelay: id === 'password' ? '0.2s' : '0.1s', // Delay for second field
      }}
    >
      <Typography 
        variant="subtitle2" 
        component="label" 
        htmlFor={id} 
        sx={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#374151',
          mb: 1,
          ml: 1.5 // Increased left margin
        }}
      >
        {label}
      </Typography>
      <TextField
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        fullWidth
        size="medium"
        variant="outlined"
        error={error}
        helperText={error ? errorMessage : ''}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '0.75rem', // Increased border radius
            backgroundColor: '#F9FAFB',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)', // Enhanced shadow
            transition: 'all 0.2s ease',
            '& fieldset': {
              borderColor: '#E5E7EB',
              borderWidth: '1px',
              transition: 'all 0.2s ease'
            },
            '&:hover fieldset': {
              borderColor: '#D1D5DB'
            },
            '&.Mui-focused': {
              boxShadow: '0 4px 6px rgba(79, 70, 229, 0.1)' // Focus shadow with brand color
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4F46E5',
              borderWidth: '2px'
            }
          },
          '& .MuiInputBase-input': {
            padding: '0.875rem 1.25rem', // Slightly larger padding
            fontSize: '1rem',
            lineHeight: '1.5rem',
            color: '#1F2937',
            '&::placeholder': {
              color: '#9CA3AF',
              opacity: 1
            }
          },
          '& .MuiFormHelperText-root': {
            fontSize: '0.8rem', // Slightly larger error text
            marginLeft: '12px',
            marginTop: '6px',
            fontWeight: 500,
            color: theme.palette.error.main
          }
        }}
      />
    </Box>
  );
};

// Login button component
export const LoginButton = ({ isLoading, onClick }: { isLoading: boolean; onClick: () => void }) => {
  return (
    <Box
      sx={{
        opacity: 0,
        animation: `${fadeInUp} 0.6s ease forwards`,
        animationDelay: '0.3s',
        mt: 2 // Added margin top
      }}
    >
      <Button
        type="submit"
        onClick={onClick}
        disabled={isLoading}
        variant="contained"
        fullWidth
        sx={{
          background: 'linear-gradient(90deg, #4338CA 0%, #4F46E5 100%)', // Gradient background
          '&:hover': {
            background: 'linear-gradient(90deg, #3730A3 0%, #4338CA 100%)', // Darker gradient on hover
            boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)' // Enhanced shadow on hover
          },
          '&:active': {
            background: 'linear-gradient(90deg, #312E81 0%, #3730A3 100%)', // Even darker when active
            transform: 'translateY(1px)' // Subtle press effect
          },
          '&:disabled': {
            background: 'linear-gradient(90deg, rgba(79, 70, 229, 0.6) 0%, rgba(99, 102, 241, 0.6) 100%)',
            color: 'white'
          },
          textTransform: 'none',
          borderRadius: '0.75rem', // Larger border radius
          padding: '0.875rem 0', // Taller button
          fontSize: '1.1rem', // Larger font
          fontWeight: 600,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(79, 70, 229, 0.1)', // Enhanced shadow
          height: '54px', // Taller button
          transition: 'all 0.2s ease',
          letterSpacing: '0.01em'
        }}
        startIcon={isLoading ? <CircularProgress size={22} color="inherit" sx={{ marginRight: '8px' }} /> : null}
      >
        {isLoading ? 'Signing in...' : 'Sign in'}
      </Button>
    </Box>
  );
};

// Password reset component
export const PasswordReset = () => {
  return (
    <Box 
      sx={{ 
        textAlign: 'center', 
        mt: 4,
        opacity: 0,
        animation: `${fadeInUp} 0.6s ease forwards`,
        animationDelay: '0.4s'
      }}
    >
      <Link 
        href="#" 
        underline="hover" 
        sx={{
          fontSize: '0.9rem', // Slightly larger font
          color: '#4F46E5', // indigo-600 color
          '&:hover': {
            color: '#4338CA', // indigo-700 color on hover
            textDecoration: 'underline'
          },
          '&:active': {
            color: '#3730A3', // indigo-800 color when active
          },
          textDecoration: 'none',
          fontWeight: 600,
          letterSpacing: '0.01em',
          padding: '0.5rem 1rem', // Increased horizontal padding
          borderRadius: '0.375rem', // Increased border radius
          transition: 'all 0.2s ease',
          display: 'inline-block' // Makes padding work better
        }}
      >
        Reset password
      </Link>
    </Box>
  );
};
