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
        'low-contrast': 'var(--low-contrast)',
        'background': 'var(--background)',  
        'card': 'var(--card)',
        'button': 'var(--button)',
        'accent': 'var(--accent)',
        'text': 'var(--text)',
        "smoke-glass": "#00000070",
        "pistachio": "var(--pistachio)",
      },
      height: {
        article: "190px",
      },
      width: {
        '100': '400px',
      },
      maxWidth: {
        'layout': '1470px'
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
        shake: {
          '0%, 100%': { transform: 'rotate(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'rotate(5deg)' },
          '20%, 40%, 60%, 80%': { transform: 'rotate(-5deg)' }
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
        shake: 'shake 1s ease-in-out 3',
        none: 'none',
      },
      aspectRatio: {
        '3/1': '3 / 1',
      },
    },
    zIndex: {
      'button': '10',
      'modal': '20',
      'header': '40',
    },
  },
  variants: {},
  plugins: [],
  darkMode: 'class',
};


