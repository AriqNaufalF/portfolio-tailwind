/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.emerald['600'],
      'primary-light': colors.emerald['500'],
      secondary: colors.slate['600'],
      dark: colors.gray['900'],
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
