// Configuración mínima para vitest
import react from '@vitejs/plugin-react';

// Exportamos configuración estándar
export default {
  // Plugins para React
  plugins: [react()],
  // Configuración de pruebas
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup.ts',
  },
  // Alias para importaciones
  resolve: {
    alias: {
      '@': './src',
    },
  },
};
