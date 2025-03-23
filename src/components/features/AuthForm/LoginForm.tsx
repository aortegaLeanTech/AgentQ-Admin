import React from 'react';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { useLogin } from '@/services/auth/auth';
import { addNotification } from '@/store/signals';
import { LoginFormData, loginValidationRules } from '@/schemas/authSchemas';

// Importamos los subcomponentes modulares para el login
import { LoginSidebar, LoginLogo, FormField, LoginButton, PasswordReset } from './LoginComponents';

/**
 * LoginForm - Replica exacta del diseño de StudioQ utilizando exclusivamente Material UI
 * Siguiendo el enfoque modular de separar componentes y validaciones
 */
interface LoginFormProps {
  onSubmit?: (email: string, password: string) => Promise<void>;
}

export const LoginForm = ({ onSubmit: externalSubmit }: LoginFormProps = {}) => {
  // Inicializar formulario con reglas de validaciu00f3n del esquema
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    defaultValues: { email: '', password: '' },
    mode: 'onBlur'
  });
  
  const login = useLogin();
  
  // Manejador de envu00edo del formulario
  const handleFormSubmit = async (data: LoginFormData) => {
    try {
      console.log('Sending login request with data:', data);
      
      // Use external submit handler if provided, otherwise use default login behavior
      if (externalSubmit) {
        await externalSubmit(data.email, data.password);
      } else {
        await login.mutateAsync(data);
        addNotification('Login successful', 'success');
      }
    } catch (error) {
      console.error('Error en login form:', error);
      addNotification(
        error instanceof Error ? error.message : 'Error al iniciar sesiu00f3n', 
        'error'
      );
    }
  };
  
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      {/* Lado izquierdo con degradado naranja a morado exactamente como en la imagen - ahora ocupa el 50% */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          width: '50%',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <LoginSidebar />
      </Box>
      
      {/* Contenedor del formulario - lado derecho blanco */}
      <Box
        sx={{
          width: '100%',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'white'
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '320px'
          }}
        >
          {/* Logo */}
          <LoginLogo />
          
          <Box
            component="form"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            {/* Campo de email */}
            <FormField 
              label="Email" 
              id="email"
              placeholder="Enter your email"
              register={register('email', loginValidationRules.email)}
              error={!!errors.email}
              errorMessage={errors.email?.message}
            />
            
            {/* Campo de contraseña */}
            <FormField 
              label="Password" 
              id="password"
              type="password"
              placeholder="Enter your password"
              register={register('password', loginValidationRules.password)}
              error={!!errors.password}
              errorMessage={errors.password?.message}
            />
            
            {/* Botón de inicio de sesión */}
            <Box sx={{ mt: 6 }}>
              <LoginButton 
                isLoading={login.isPending} 
                onClick={handleSubmit(handleFormSubmit)} 
              />
            </Box>
            
            {/* Enlace para resetear contraseña */}
            <PasswordReset />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
