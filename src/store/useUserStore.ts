import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { StateCreator } from 'zustand';
import { User, SessionState, UserRole } from '@/types/user';

interface UserStore extends SessionState {
  // Acciones
  login: (userData: User) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

/**
 * Store de Zustand para manejar el estado de la sesión del usuario
 */
export const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        // Estado inicial
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,

        // Acciones
        login: (userData: User) => {
          set({
            user: userData,
            isAuthenticated: true,
            error: null,
          });
        },
        logout: () => {
          set({
            user: null,
            isAuthenticated: false,
            error: null,
          });
        },
        updateUser: (userData: Partial<User>) => {
          set((state) => ({
            user: state.user ? { ...state.user, ...userData } : null,
          }));
        },
        setLoading: (isLoading: boolean) => {
          set({ isLoading });
        },
        setError: (error: string | null) => {
          set({ error });
        },
      }),
      {
        name: 'user-storage', // nombre para localStorage
      }
    )
  )
);
