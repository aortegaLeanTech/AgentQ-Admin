import React from 'react';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon/Icon';

// Material UI imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';
import { keyframes } from '@mui/system';

// Definimos las animaciones que usaremos
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Componente para el lado izquierdo del login con degradado exacto como en la imagen
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
        background: 'linear-gradient(135deg, #FF6868 0%, #FF3030 30%, #F046FF 100%)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 40%)',
          pointerEvents: 'none'
        }
      }}
    >
      {/* Contenido superpuesto */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          px: 8,
          color: 'white'
        }}
      >
        <Box sx={{ mb: 16 }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: '4.5rem', 
              fontWeight: 700, 
              mb: 0, 
              lineHeight: 'tight', 
              textShadow: '0 2px 4px rgba(0,0,0,0.1)', 
              letterSpacing: '-0.02em',
              animation: `${fadeInUp} 0.8s ease forwards`,
              background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,1) 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animationDelay: '0.1s'
            }}
          >
            StudioQ:
          </Typography>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: '4.5rem', 
              fontWeight: 700, 
              mb: 0, 
              lineHeight: 'tight', 
              textShadow: '0 2px 4px rgba(0,0,0,0.1)', 
              letterSpacing: '-0.02em',
              animation: `${fadeInUp} 0.8s ease forwards`,
              animationDelay: '0.3s',
              opacity: 0
            }}
          >
            Creating a
          </Typography>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: '4.5rem', 
              fontWeight: 700, 
              mb: 0, 
              lineHeight: 'tight', 
              textShadow: '0 2px 4px rgba(0,0,0,0.1)', 
              letterSpacing: '-0.02em',
              animation: `${fadeInUp} 0.8s ease forwards`,
              animationDelay: '0.5s',
              opacity: 0
            }}
          >
            new age of
          </Typography>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: '4.5rem', 
              fontWeight: 700, 
              mb: 0, 
              lineHeight: 'tight', 
              textShadow: '0 2px 4px rgba(0,0,0,0.1)', 
              letterSpacing: '-0.02em',
              animation: `${fadeInUp} 0.8s ease forwards, ${shimmer} 3s infinite linear`,
              background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,204,250,1) 50%, rgba(255,255,255,1) 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animationDelay: '0.7s',
              opacity: 0
            }}
          >
            productivity
          </Typography>
        </Box>
        
        <Box 
          sx={{ 
            position: 'absolute', 
            bottom: 5, 
            left: 6,
            animation: `${float} 4s ease-in-out infinite`
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              fontSize: '1rem', 
              fontWeight: 500, 
              textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              opacity: 0.9,
              '&:hover': {
                opacity: 1
              },
              transition: 'opacity 0.3s ease'
            }}
          >
            A product by Lean Solutions Group
          </Typography>
        </Box>
        
        {/* Iconos en la parte inferior con animaciones */}
        <Box 
          sx={{ 
            position: 'absolute', 
            bottom: 5, 
            right: 6, 
            display: 'flex', 
            gap: 2,
            opacity: 0,
            animation: `${fadeInUp} 0.8s ease forwards`,
            animationDelay: '1.2s'
          }}
        >
          <Box sx={{ 
            width: 40, 
            height: 40, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: 'rgba(255, 255, 255, 0.25)', 
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 8px rgba(0,0,0,0.12)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              transform: 'translateY(-4px) scale(1.05)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.18)'
            }
          }}>
            <Icon icon="mdi:discord" color="white" />
          </Box>
          <Box sx={{ 
            width: 40, 
            height: 40, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: 'rgba(255, 255, 255, 0.25)', 
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 8px rgba(0,0,0,0.12)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              transform: 'translateY(-4px) scale(1.05)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.18)'
            }
          }}>
            <Icon icon="mdi:instagram" color="white" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// Componente para el logo exactamente como en StudioQ
export const LoginLogo = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 6 }}>
      <Box sx={{ mb: 2 }}>
        <Image 
          src="https://cdn.weweb.io/designs/dccbcc89-f92c-472c-b2a3-efd6157973ea/sections/Logo_Lockup.png?_wwcv=1706885111424" 
          alt="StudioQ Logo" 
          width={200} 
          height={58} 
          style={{ height: 'auto' }}
          priority
        />
      </Box>
      <Typography 
        variant="subtitle1" 
        sx={{ 
          fontSize: '1rem', 
          color: '#4B5563', 
          mt: 1,
          letterSpacing: '0.01em',
          fontWeight: 500,
          animation: `${fadeInUp} 0.6s ease forwards`,
        }}
      >
        Login to your account
      </Typography>
    </Box>
  );
};

// Componente para campo de formulario con el estilo exacto de StudioQ usando Material UI
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
    <Box sx={{ mb: 4 }}>
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
          ml: 0.5
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
            borderRadius: '0.5rem',
            backgroundColor: '#F9FAFB',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            '& fieldset': {
              borderColor: '#E5E7EB',
              borderWidth: '1px'
            },
            '&:hover fieldset': {
              borderColor: '#D1D5DB'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4F46E5',
              borderWidth: '2px'
            }
          },
          '& .MuiInputBase-input': {
            padding: '0.75rem 1rem',
            fontSize: '1rem',
            lineHeight: '1.5rem',
            color: '#1F2937',
            '&::placeholder': {
              color: '#9CA3AF',
              opacity: 1
            }
          },
          '& .MuiFormHelperText-root': {
            fontSize: '0.75rem',
            marginLeft: '8px',
            marginTop: '4px',
            fontWeight: 500,
            color: theme.palette.error.main
          }
        }}
      />
    </Box>
  );
};

// Componente para botón de inicio de sesión - idéntico al diseño de StudioQ
export const LoginButton = ({ isLoading, onClick }: { isLoading: boolean; onClick: () => void }) => {
  const theme = useTheme();
  
  return (
    <Button
      type="submit"
      onClick={onClick}
      disabled={isLoading}
      variant="contained"
      fullWidth
      sx={{
        backgroundColor: '#4338CA', // indigo-800
        '&:hover': {
          backgroundColor: '#3730A3' // indigo-900 - más oscuro para mejor contraste
        },
        '&:active': {
          backgroundColor: '#312E81' // indigo-950
        },
        '&:disabled': {
          backgroundColor: 'rgba(99, 102, 241, 0.7)',
          color: 'white'
        },
        textTransform: 'none',
        borderRadius: '0.5rem',
        padding: '0.75rem 0',
        fontSize: '1rem',
        fontWeight: 600,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        height: '48px',
        transition: 'all 0.2s ease',
        letterSpacing: '0.01em'
      }}
      startIcon={isLoading ? <CircularProgress size={20} color="inherit" sx={{ marginRight: '8px' }} /> : null}
    >
      {isLoading ? 'Signing in...' : 'Sign in'}
    </Button>
  );
};

// Componente para el enlace de recuperación de contraseña - idéntico al diseño de StudioQ
export const PasswordReset = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ textAlign: 'center', mt: 3 }}>
      <Link 
        href="#" 
        underline="hover" 
        sx={{
          fontSize: '0.875rem',
          color: '#4F46E5', // indigo-600 color - más saturado para mejor visibilidad
          '&:hover': {
            color: '#4338CA', // indigo-700 color
            textDecoration: 'underline' 
          },
          textDecoration: 'none',
          fontWeight: 600,
          letterSpacing: '0.01em',
          padding: '0.5rem',
          borderRadius: '0.25rem',
          transition: 'all 0.2s ease'
        }}
      >
        Reset password
      </Link>
    </Box>
  );
};
