import '@testing-library/jest-dom';

// Declaración del espacio de nombres global
declare global {
  interface Window {
    matchMedia: (query: string) => MediaQueryList;
  }
  var global: any;
}

// Configuración global para pruebas
(global as any).ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Simular matchMedia para pruebas de temas oscuros/claros
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {},
    addEventListener: function() {},
    removeEventListener: function() {},
    dispatchEvent: function() {
      return true;
    },
  };
};
