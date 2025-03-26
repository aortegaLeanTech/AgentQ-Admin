/**
 * Tipos para los elementos de menú en la aplicación
 */

/**
 * Elemento básico de menú
 */
export interface MenuItem {
  text: string;
  path: string;
  icon: string;
}

/**
 * Elementos de menú agrupados por categorías
 */
export interface MenuGroups {
  menuItems: MenuItem[];
  performanceItems: MenuItem[];
  bottomItems: MenuItem[];
}
