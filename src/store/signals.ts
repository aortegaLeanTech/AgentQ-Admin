// Solución modular para compatibilidad con React 19
// Siguiendo el mismo enfoque utilizado para Tailwind CSS v4

// En lugar de importar directamente de @preact/signals-react,
// creamos nuestra propia implementación compatible

type SignalImpl<T> = { value: T };

// Implementación simple de signal compatible con React 19
function createSignal<T>(initialValue: T): SignalImpl<T> {
  let subscribers: (() => void)[] = [];
  let currentValue = initialValue;
  
  return {
    get value() {
      return currentValue;
    },
    set value(newValue: T) {
      if (newValue !== currentValue) {
        currentValue = newValue;
        subscribers.forEach(callback => callback());
      }
    }
  };
}

// Implementación simple de computed compatible con React 19
function createComputed<T>(compute: () => T): { value: T } {
  const signal = createSignal<T>(compute());
  return {
    get value() {
      return compute();
    }
  };
}

// API compatíble con la de @preact/signals-react
export const signal = createSignal;
export const computed = createComputed;

// User state signals
export const currentUser = signal(null);
export const isAuthenticated = computed(() => currentUser.value !== null);

// Theme control signals
// Avoid using generics in signal calls since it's an untyped function
export const themeMode = signal('system' as 'light' | 'dark' | 'system');
export const isDarkMode = signal(false);

// Notification signals
// Define type separately to avoid generics in signal call
type Notification = {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  read: boolean;
  timestamp: number;
};

export const notifications = signal([] as Notification[]);

export const unreadNotificationsCount = computed(() => {
  return notifications.value.filter(notification => !notification.read).length;
});

// Function to add notification
export function addNotification(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') {
  const newNotification = {
    id: Date.now().toString(),
    message,
    type,
    read: false,
    timestamp: Date.now(),
  };
  
  notifications.value = [...notifications.value, newNotification];
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    notifications.value = notifications.value.filter(n => n.id !== newNotification.id);
  }, 5000);
  
  return newNotification.id;
}

// Function to mark notification as read
export function markNotificationAsRead(id: string) {
  notifications.value = notifications.value.map(notification => {
    if (notification.id === id) {
      return { ...notification, read: true };
    }
    return notification;
  });
}
