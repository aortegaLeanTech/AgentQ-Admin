/**
 * Configuraciu00f3n bu00e1sica de Tailwind CSS 
 * Siguiendo el patru00f3n modular implementado en el proyecto
 */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root', // Ensures Tailwind can override MUI styles
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4E00',
          50: '#FFF2EB',
          100: '#FFE5D7',
          200: '#FFD0B3',
          300: '#FFAC80',
          400: '#FF7D40',
        },
      },
    },
  },
  plugins: [],
};
