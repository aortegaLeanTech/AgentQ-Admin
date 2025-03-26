import "@/utils/react-polyfill";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Box, Container, Paper } from "@mui/material";
import { LoginForm } from "@/components/features/AuthForm/LoginForm";
import { useLogin } from "@/services/auth/auth";

export default function LoginPage() {
  const router = useRouter();
  const { mutateAsync: login, isPending } = useLogin();

  const handleLogin = async (email: string, password: string) => {
    try {
      console.log("Login attempt:", { email, password });
      
      // Simulamos un login exitoso creando un token manualmente
      // En producción, esto se obtendría de la API real
      const mockResponse = {
        user: {
          id: '1',
          name: 'Admin User',
          email: email
        },
        token: 'mock-jwt-token-' + Date.now()
      };
      
      // Guardar token en localStorage
      localStorage.setItem('auth_token', mockResponse.token);
      
      // Redirigir al dashboard después de iniciar sesión
      await router.push('/dashboard');
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Login - StudioQ Admin</title>
        <meta name="description" content="Login to your StudioQ account" />
      </Head>
      <Box component="div" sx={{ height: '100vh', display: 'flex', overflow: 'hidden' }}>
        <LoginForm onSubmit={handleLogin} />
      </Box>
    </>
  );
}
