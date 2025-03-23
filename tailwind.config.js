/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  // Aseguramos que los estilos de Tailwind puedan sobreescribir los de MUI
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Base colors (customizable) - siguiendo enfoque modular
        primary: {
          DEFAULT: '#FF4E00', // Esto permite usar bg-primary directamente
          50: '#FFF2EB',
          100: '#FFE5D7',
          200: '#FFD0B3',
          300: '#FFAC80',
          400: '#FF7D40',
          500: '#FF4E00',
          600: '#CC3E00', // Para hover:bg-primary-600
          700: '#992F00',
          800: '#661F00',
          900: '#331000',
        },
        secondary: {
          DEFAULT: '#665EF3',
          50: '#F2F1FE',
          100: '#E4E3FD',
          200: '#C9C7FB',
          300: '#AFABF9',
          400: '#948DF7',
          500: '#7A70F5',
          600: '#665EF3', // Base secondary color
          700: '#514BCF',
          800: '#3D39AB',
          900: '#292787',
        },
        darkblue: {
          DEFAULT: '#3B3A5C',
          50: '#ECECF0',
          100: '#D9D9E1',
          200: '#B4B3C3',
          300: '#8E8DA5',
          400: '#686786',
          500: '#4F4E6B',
          600: '#464568',
          700: '#3B3A5C', // Base darkblue color
          800: '#302F4A',
          900: '#242439',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Custom plugin to generate dynamic CSS variables
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-primary': theme('colors.primary.DEFAULT'),
          '--color-secondary': theme('colors.secondary.DEFAULT'),
          '--color-darkblue': theme('colors.darkblue.DEFAULT'),
          // Variables for the entire theme
        },
        '.dark': {
          '--color-primary': theme('colors.primary.600'),
          '--color-secondary': theme('colors.secondary.500'),
          '--color-darkblue': theme('colors.darkblue.900'),
        }
      });
    },
  ],
}
