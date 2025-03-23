import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Componente de redirecciu00f3n para /auth
export default function AuthIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir a /auth/login cuando alguien accede a /auth
    router.replace('/auth/login');
  }, [router]);

  // Mostrar una pantalla de carga o nada mientras se redirige
  return null;
}
