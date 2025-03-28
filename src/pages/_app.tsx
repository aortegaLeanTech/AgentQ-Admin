// Importar el polyfill para compatibilidad con React 19
import "@/utils/react-polyfill";

import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/lib/react-query";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { useRouter } from "next/router";
import { MainLayout } from "@/components/layout/MainLayout";
import { EmptyLayout } from "@/components/layout/EmptyLayout";
import { ThemeProvider } from "@/theme/ThemeProvider";
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

// Configuración de layouts por página
const getLayout = (pathname: string) => {
  // Rutas que usan layout vacío
  if (pathname.startsWith("/auth/")) {
    return EmptyLayout;
  }
  // Rutas que usan layout principal
  return MainLayout;
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Verificar si la ruta actual es pública
  const isPublicRoute = publicRoutes.includes(router.pathname);

  // Determinar el layout a usar según la ruta actual
  const Layout = getLayout(router.pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className={`${geistSans.variable} ${geistMono.variable}`}>
          {isPublicRoute ? (
            <EmptyLayout>
              <Component {...pageProps} />
            </EmptyLayout>
          ) : (
            <AuthGuard>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AuthGuard>
          )}
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
