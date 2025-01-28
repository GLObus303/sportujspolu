/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-kanit)', 'sans-serif'],
      },
      colors: {
        primary: 'var(--lemon-grass)',
        secondary: 'var(--cherry-heart)',
        tertiary: "#822e2e",
        white: "#FFFFFF",
        "dark-gray": "#5D5D5D",
        "medium-gray": "#848484",
        'low-contrast': 'var(--low-contrast)',
        'faded': 'var(--faded)',
        'background': 'var(--background)',  
        'card': 'var(--card)',
        'button': 'var(--button)',
        'accent': 'var(--accent)',
        'text': 'var(--text)',
        "smoke-glass": "#00000070",
        "mandarin": "#FF9500",
        "pistachio": "var(--pistachio)",
        "pale-aloe": "var(--pale-aloe)",
        "soft-cheek": "var(--soft-cheek)",
        "baby-fox": "var(--baby-fox)",
      },
      backgroundImage: {
        'gradient-banner-primary': 'linear-gradient(135deg, var(--pistachio), var(--faded))',
        'gradient-banner-secondary': 'linear-gradient(135deg, var(--soft-cheek), var(--faded))',
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
      'header': '1',
      'modal': '2',
    },
  },
  variants: {},
  plugins: [],
  darkMode: 'class',
};


