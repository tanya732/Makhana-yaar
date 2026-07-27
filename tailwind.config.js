/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core brand identity (from packaging) — constant across all flavours
        navy: '#1E2A4A',
        'navy-soft': '#33406A',
        orange: '#E8622A',
        'orange-soft': '#F2854E',
        // Warm neutrals
        cream: '#FBF7F0',
        sand: '#F0E9DC',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        wiggle: 'wiggle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
