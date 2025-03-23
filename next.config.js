/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuración minimalista para mayor compatibilidad
  compiler: {
    // Desactivar eliminación de console.log en desarrollo
    removeConsole: false,
  },
  // Configuración para permitir imágenes externas
  images: {
    domains: ['cdn.weweb.io'],
  },
};

module.exports = nextConfig;
