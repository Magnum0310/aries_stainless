/** @type {import('tailwindcss').Config} */
const defautTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "540px",
      "3xl": "1600px",
      ...defautTheme.screens,
    },
    extend: {
      fontFamily: {
        shareTech: "Share Tech, sans-serif",
        spaceMono: "Space Mono, monospace",
        bebas: "Bebas Neue, sans-serif",
      },
      colors: {
        "adobe-red": "#F91B15",
        "adobe-gray": "#808080",
        "adobe-darkGray": "#626262",
        "adobe-white": "#FAFAFA",
        "adobe-ivory": "#F7F5F2",
      },
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "border-spin": "border-spin 7s linear infinite",
      },
    },
  },
  plugins: [],
};
