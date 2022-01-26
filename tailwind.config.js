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
        blobdark: 'blob 5s infinite',
        gradient: 'hue 1s infinte',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-30px, 20px) scale(0.9)',
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
