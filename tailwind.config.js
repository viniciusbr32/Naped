/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '3xl': '1920px',
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(223.75deg, #00A3FF 4.8%, #0054C6 95.02%)',
    },
    fontFamily: {
      archivo: ['Archivo', 'sans-serfif'],
    },
    extend: {
      backgroundColor: {
        primary: '#06090F',
      },
    },
  },
  plugins: [],
};
