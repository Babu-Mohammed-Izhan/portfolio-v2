module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        blob1: "blob 5s infinite",
        blob2: "blob 8s infinite",
        blob3: "blob 11s infinite",
        gradient: "hue 5s infinte linear",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -30px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-30px, 30px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        hue: {
          to: {
            "background-position": "200%",
          },
        },
      },
    },
  },
  plugins: [],
};
