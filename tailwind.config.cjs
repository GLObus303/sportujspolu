/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#84B0BA",
        secondary: "#AE4646",
        tertiary: "#822e2e",
        white: "#FFFFFF",
      },
      height: {
        article: "190px",
        hero: "calc(100vh - 238px)",
      },
      minHeight: {
        300: "300px",
      },
    },
  },
  variants: {},
  plugins: [],
};