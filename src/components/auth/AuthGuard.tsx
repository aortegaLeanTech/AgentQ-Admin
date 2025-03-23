// Usar sintaxis compatible con React 19 y Next.js
import { useRouter } from 'next/router';
import React from 'react';
import { useCurrentUser } from '@/services/auth/auth';

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const { data: user, isLoading } = useCurrentUser();
  
  React.useEffect(() => {
    // Si no está cargando y no hay usuario, redirigir a login
    if (!isLoading) {
      if (user) {
        setIsAuthorized(true);
      } else {
        // No hay usuario autenticado, redirigir a login
        router.push('/auth/login');
      }
    }
  }, [isLoading, user, router]);

  // Mostrar loading o nada mientras verifica
  if (isLoading || !isAuthorized) {
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};
