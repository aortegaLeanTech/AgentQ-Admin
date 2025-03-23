import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Box, Container, Paper } from "@mui/material";
import { LoginForm } from "@/components/features/AuthForm/LoginForm";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    try {
      // TODO: Implement actual login logic here
      console.log("Login attempt:", { email, password });
      // On successful login:
      // await router.push('/dashboard');
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
