import { apiClient } from '../client';

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

/**
 * Endpoints de autenticación
 * Centralizando todas las llamadas a la API relacionadas con autenticación
 */
export const authEndpoints = {
  /**
   * Iniciar sesión
   */
  login: (credentials: LoginCredentials) => {
    return apiClient.post<LoginResponse>('/api/auth/login', credentials);
  },
  
  /**
   * Obtener información del usuario actual
   */
  getCurrentUser: () => {
    return apiClient.get<User>('/api/auth/me');
  }
};
