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
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        outline: "0 0 0 3px rgba(0, 0, 0, 0.9)",
      },
      backgroundColor: {
        strongTown: "rgb(28, 63, 96)",
        softTown: "rgb(201, 113, 84)",
      },
      aspectRatio: {
        sd: "4/3",
        sdInverse: "3/4",
        videoInverse: "9/16",
        goldenRatio: "16/10",
        ogImage: "1200/630",
      },
      maxWidth: {
        article: "612px",
      },
      colors: {
        accent: "var(--text-accent-color)",
        primary: "var(--text-primary-color)",
        secondary: "var(--text-secondary-color)",
        inverse: "var(--text-inverted-color)",
        pageColor: "var(--page-color)",
        strongTown: "rgb(28, 63, 96)",
        softTown: "rgb(201, 113, 84)",
      },
    },
  },
  plugins: [],
};
