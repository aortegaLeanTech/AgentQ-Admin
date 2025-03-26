// Tipos para el estado global

// Definición de un item de menú
export interface MenuItem {
  icon: string;
  text: string;
  path: string;
  active?: boolean;
  children?: MenuItem[];
}

// Definición de usuario
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

// Estado de la UI
export interface UIState {
  isDarkMode: boolean;
  sidebarCollapsed: boolean;
  activeMenu: string;
  expandedMenus: string[];
}

// Estado de menú
export interface MenuState {
  main: MenuItem[];
  bottom: MenuItem[];
}

// Estado de usuario
export interface UserState {
  data: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
