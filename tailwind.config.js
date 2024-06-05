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
      },
      colors: {
        "adobe-red": "#F91B15",
        "adobe-gray": "#808080",
        "adobe-white": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
