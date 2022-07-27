/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.emerald['500'],
      'primary-light': colors.emerald['400'],
      secondary: colors.slate['500'],
      dark: colors.gray['900'],
      'dark-lighter': colors.gray['800'],
      muted: colors.gray['600'],
      slate: colors.slate,
      white: colors.white,
      rose: colors.rose,
      tailwind: colors.sky['500'],
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
