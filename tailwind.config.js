/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '3xl': '1920px',
    },
    backgroundImage: {
      'text-gradient': 'linear-gradient(223.75deg, #00A3FF 4.8%, #0054C6 95.02%)',
    },
    backgroundClip: {
      text: 'text',
    },
    textFillColor: {
      transparent: 'transparent',
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
