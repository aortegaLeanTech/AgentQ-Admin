/**
 * Wrapper modular para @preact/signals-react compatible con React 19
 * Siguiendo el mismo enfoque de separaciu00f3n de responsabilidades usado en otros lugares
 */

import {
  signal as preactSignal,
  computed as preactComputed,
  useSignal as preactUseSignal,
  useComputed as preactUseComputed,
  // Re-exportar otros elementos necesarios
} from '@preact/signals-react';

// Tipos
// Definir tipos explicitamente para evitar errores
export type Signal<T> = { value: T };

// API pu00fablica simplificada y compatible
export const signal: <T>(value: T) => Signal<T> = preactSignal;
export const computed: <T>(fn: () => T) => Signal<T> = preactComputed;
export const useSignal = preactUseSignal;
export const useComputed = preactUseComputed;

/**
 * Funciu00f3n de utilidad para crear una notificaciu00f3n
 * Esta reemplaza el uso directo de addNotification de @preact/signals-react
 */
export function createNotification(
  message: string,
  type: 'info' | 'success' | 'warning' | 'error' = 'info',
  timeout: number = 5000
) {
  // Implementaciu00f3n segura que no depende de internals de React
  const id = Date.now().toString(36) + Math.random().toString(36).substring(2);
  
  // Agregar la notificaciu00f3n al estado global
  notifications.value = [
    ...notifications.value,
    { id, message, type, timeout }
  ];
  
  // Eliminar automu00e1ticamente despuu00e9s del timeout
  if (timeout > 0) {
    setTimeout(() => {
      removeNotification(id);
    }, timeout);
  }
  
  return id;
}

/**
 * Eliminar una notificaciu00f3n por su ID
 */
export function removeNotification(id: string) {
  notifications.value = notifications.value.filter(
    notification => notification.id !== id
  );
}

// Tipos para el sistema de notificaciones
export interface Notification {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timeout: number;
}

// Estado global para notificaciones (siguiendo el enfoque modular)
// Usando notación explícita para evitar errores de tipo
export const notifications: Signal<Notification[]> = signal([]);

// Re-exportar addNotification para compatibilidad con cu00f3digo existente
export const addNotification = createNotification;
