/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        sky: {
          500: '#0ea5e9',
        },
        teal: {
          500: '#14b8a6',
          400: '#2dd4bf',
        },
        emerald: {
          500: '#10b981',
        },
        slate: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
        },
      },
      animation: {
        'blob-1': 'blob1 80s ease-in-out infinite',
        'blob-2': 'blob2 90s ease-in-out infinite',
        'blob-3': 'blob3 70s ease-in-out infinite',
        'blob-4': 'blob4 85s ease-in-out infinite',
        'blob-5': 'blob5 75s ease-in-out infinite',
        'orb-breathe': 'orbBreathe 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        blob1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(80px, -60px) scale(1.05)' },
          '50%': { transform: 'translate(40px, 100px) scale(0.95)' },
          '75%': { transform: 'translate(-60px, 40px) scale(1.02)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-100px, 80px) scale(1.08)' },
          '66%': { transform: 'translate(60px, -40px) scale(0.92)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '20%': { transform: 'translate(60px, 40px) scale(1.04)' },
          '60%': { transform: 'translate(-80px, -60px) scale(0.96)' },
          '80%': { transform: 'translate(20px, 80px) scale(1.03)' },
        },
        blob4: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '40%': { transform: 'translate(-60px, -80px) scale(1.06)' },
          '70%': { transform: 'translate(80px, 60px) scale(0.94)' },
        },
        blob5: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '30%': { transform: 'translate(100px, -40px) scale(1.03)' },
          '60%': { transform: 'translate(-40px, 80px) scale(0.97)' },
        },
        orbBreathe: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 60px rgba(14, 165, 233, 0.2), 0 0 120px rgba(16, 185, 129, 0.08)' },
          '50%': { transform: 'scale(1.03)', boxShadow: '0 0 80px rgba(14, 165, 233, 0.3), 0 0 160px rgba(16, 185, 129, 0.12)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
