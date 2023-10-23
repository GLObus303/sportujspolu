/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00E526",
        secondary: "#FF006B",
        tertiary: "#822e2e",
        white: "#FFFFFF",
        "dark-gray": "#5D5D5D",
        "medium-gray": "#848484",
        'light-gray': '#D9D9D9',
        'lightest-gray': '#F9F9FB',
        "smoke-glass": "#00000070",
      },
      height: {
        article: "190px",
      },
      width: {
        '100': '400px',
      },
      minHeight: {
        300: "300px",
      },
      scale: {
        '115': '1.15', 
        '120': '1.20', 
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
    },
    zIndex: {
      'button': '10',
      'header': '40',
    },
  },
  variants: {},
  plugins: [],
};


