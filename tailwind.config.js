const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-family-primary)", ...fontFamily.sans],
        secondary: ["var(--font-family-secondary)", ...fontFamily.serif],
      },
      textDecorationThickness: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
