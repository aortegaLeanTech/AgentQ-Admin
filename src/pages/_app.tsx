// Importar el polyfill para compatibilidad con React 19
import "@/utils/react-polyfill";

import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/lib/react-query";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Rutas que no requieren autenticación
const publicRoutes = ["/auth/login", "/auth/register", "/auth/forgot-password"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Verificar si la ruta actual es pública
  const isPublicRoute = publicRoutes.includes(router.pathname);

  // Contenido principal con estilos de fuente
  const mainContent = (
    <div style={{ fontFamily: 'var(--font-geist-sans)', fontFeatureSettings: "'cv02', 'cv03', 'cv04', 'cv11'" }}>
      {isPublicRoute ? (
        // Rutas públicas no requieren autenticación
        <Component {...pageProps} />
      ) : (
        // Rutas protegidas con AuthGuard
        <AuthGuard children={<Component {...pageProps} />} />
      )}
    </div>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider children={mainContent} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
