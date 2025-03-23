/**
 * Cliente API centralizado para realizar peticiones HTTP
 * Siguiendo un patrón modular similar al sistema de validación
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

export interface ApiRequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
}

export const apiClient = {
  /**
   * Realizar una petición GET
   */
  async get<T>(endpoint: string, options: Omit<ApiRequestOptions, 'body'> = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  },

  /**
   * Realizar una petición POST
   */
  async post<T>(endpoint: string, data?: any, options: Omit<ApiRequestOptions, 'body'> = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'POST', body: data });
  },

  /**
   * Realizar una petición PUT
   */
  async put<T>(endpoint: string, data?: any, options: Omit<ApiRequestOptions, 'body'> = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'PUT', body: data });
  },

  /**
   * Realizar una petición DELETE
   */
  async delete<T>(endpoint: string, options: Omit<ApiRequestOptions, 'body'> = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  },

  /**
   * Método central para realizar peticiones
   */
  async request<T>(endpoint: string, options: ApiRequestOptions = {}): Promise<T> {
    const {
      method = 'GET',
      headers = {},
      body,
    } = options;

    // Agregar token de autenticación si existe
    const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
    
    const finalHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...headers
    };
    
    // Solo agregar header de Authorization si existe el token
    if (token) {
      finalHeaders['Authorization'] = `Bearer ${token}`;
    }

    const url = `${BASE_URL}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        method,
        headers: finalHeaders,
        body: body ? JSON.stringify(body) : undefined,
        // Mejorar compatibilidad con React 19 y Next.js 15
        cache: 'no-store'
      });

      // Manejo de errores más robusto
      if (!response.ok) {
        let errorMessage = `Request failed with status ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          // Si no podemos parsear la respuesta como JSON, usamos el mensaje genérico
        }
        console.error(`API error: ${errorMessage}`);
        throw new Error(errorMessage);
      }

      // Si la respuesta está vacía o es No Content (204)
      if (response.status === 204 || response.headers.get('content-length') === '0') {
        return {} as T;
      }

      return await response.json();
    } catch (error) {
      console.error(`API request error [${method} ${url}]:`, error);
      throw error;
    }
  }
};
