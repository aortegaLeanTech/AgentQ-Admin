import { apiClient } from '@/services/api/client';
import { useMutation, useQuery } from '@tanstack/react-query';

// Interfaces
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

const TOKEN_KEY = 'auth_token';

// ====================================================
// SERVICIO BASE DE AUTENTICACIu00d3N
// ====================================================

/**
 * Servicio de autenticaciu00f3n que maneja login y manejo de sesiu00f3n
 * Mantiene la lu00f3gica separada de los componentes UI
 */
export const authService = {
  /**
   * Iniciar sesiu00f3n con credenciales
   */
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      const response = await apiClient.post<LoginResponse>('/api/auth/login', credentials);
      
      // Guardar token en localStorage (solo si estamos en el navegador)
      if (typeof window !== 'undefined' && response.token) {
        localStorage.setItem(TOKEN_KEY, response.token);
      }
      
      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  /**
   * Cerrar sesiu00f3n del usuario
   */
  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    // Opcional: invalidar el token en el servidor
  },

  /**
   * Obtener el token de autenticaciu00f3n
   */
  getToken(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem(TOKEN_KEY) : null;
  },

  /**
   * Verificar si el usuario estu00e1 autenticado
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  },

  /**
   * Obtener informaciu00f3n del usuario actual
   */
  async getCurrentUser(): Promise<User | null> {
    try {
      if (!this.isAuthenticated()) {
        return null;
      }
      
      const user = await apiClient.get<User>('/api/auth/me');
      return user;
    } catch (error) {
      this.logout(); // Si hay error, cerrar sesiu00f3n
      return null;
    }
  }
};

// ====================================================
// HOOKS DE REACT QUERY PARA AUTENTICACIu00d3N
// ====================================================

/**
 * Hook para manejar la autenticaciu00f3n de usuarios
 * Sigue el patru00f3n de separaciu00f3n de responsabilidades manteniendo
 * los componentes mu00e1s limpios y enfocados en la UI
 */
export const useLogin = () => {
  return useMutation({
    mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
    onSuccess: (data) => {
      // Opcional: Acciones adicionales tras login exitoso
      // Como invalidar cachu00e9 o redireccionar
    },
  });
};

/**
 * Hook para obtener el usuario actual autenticado
 */
export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: () => authService.getCurrentUser(),
    retry: false,
    refetchOnWindowFocus: false,
  });
};

/**
 * Hook para cerrar sesiu00f3n
 */
export const useLogout = () => {
  return useMutation({
    mutationFn: () => {
      authService.logout();
      return Promise.resolve();
    },
  });
};

/**
 * Verificar si un usuario estu00e1 autenticado sin necesidad de react-query
 */
export const useIsAuthenticated = () => {
  return authService.isAuthenticated();
};
