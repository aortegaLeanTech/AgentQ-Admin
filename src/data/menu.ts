import { MenuItem, MenuGroups } from '@/types/menu';

/**
 * Elementos principales del menu00fa de navegaciu00f3n
 */
export const menuItems: MenuItem[] = [
  {
    text: 'Dashboard',
    path: '/dashboard',
    icon: 'mdi:view-dashboard-outline',
  },
  {
    text: 'Agents',
    path: '/agents',
    icon: 'mdi:robot-outline',
  },
  {
    text: 'Conversations',
    path: '/conversations',
    icon: 'mdi:message-text-outline',
  },
  {
    text: 'Knowledge Base',
    path: '/knowledge-base',
    icon: 'mdi:database-outline',
  },
];

/**
 * Elementos del submenu00fa de rendimiento
 */
export const performanceItems: MenuItem[] = [
  {
    text: 'Analytics',
    path: '/analytics',
    icon: '',
  },
  {
    text: 'Reports',
    path: '/reports',
    icon: '',
  },
  {
    text: 'Usage',
    path: '/usage',
    icon: '',
  },
];

/**
 * Elementos del menu00fa inferior
 */
export const bottomItems: MenuItem[] = [
  {
    text: 'Settings',
    path: '/settings',
    icon: 'mdi:cog-outline',
  },
  {
    text: 'Help',
    path: '/help',
    icon: 'mdi:help-circle-outline',
  },
];

/**
 * Todos los grupos de menu00fa
 */
export const menuGroups: MenuGroups = {
  menuItems,
  performanceItems,
  bottomItems,
};
