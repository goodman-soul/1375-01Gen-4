/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
    extend: {
      colors: {
        canal: {
          deep: '#1F3A5F',
          deepLight: '#2E4D78',
          deepDark: '#152942',
        },
        earth: {
          DEFAULT: '#8B6914',
          light: '#A6822C',
          dark: '#6B4F0E',
          pale: '#E8DFC9',
        },
        paper: {
          DEFAULT: '#F5F0E1',
          dark: '#E8E0CB',
          light: '#FBF8F0',
        },
        rust: {
          DEFAULT: '#A9442E',
          light: '#C15A43',
          dark: '#7E3222',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['"Noto Sans SC"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "linear-gradient(135deg, rgba(139,105,20,0.03) 0%, rgba(31,58,95,0.03) 100%)",
        'hero-gradient': "linear-gradient(180deg, rgba(15,29,48,0.4) 0%, rgba(21,41,66,0.85) 100%)",
        'wave-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120'%3E%3Cpath fill='%231F3A5F' fill-opacity='0.08' d='M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,120L0,120Z'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-12px) translateX(8px)' },
        },
        'wave': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'wave': 'wave 20s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
