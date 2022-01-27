module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
        gradient: 'hue 10s infinte',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(20px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-40px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
        hue: {
          '0%': {
            'filter': 'hue-rotate(0deg)',
          },
          '50%': {
            'filter': 'hue-rotate(-180deg)',
          },
          '100%': {
            'filter': 'hue-rotate(-360deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
