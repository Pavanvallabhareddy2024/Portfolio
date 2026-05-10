/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#05060d',
          900: '#0a0c18',
          800: '#0f1224',
          700: '#161a32',
        },
        neon: {
          cyan: '#22d3ee',
          teal: '#2dd4bf',
          violet: '#a855f7',
          blue: '#3b82f6',
          pink: '#ec4899',
        },
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 20% 20%, rgba(34,211,238,0.18), transparent 40%), radial-gradient(circle at 80% 30%, rgba(168,85,247,0.18), transparent 45%), radial-gradient(circle at 50% 90%, rgba(45,212,191,0.16), transparent 50%)',
        'gradient-text':
          'linear-gradient(120deg, #22d3ee 0%, #a855f7 50%, #2dd4bf 100%)',
        'gradient-accent':
          'linear-gradient(120deg, rgba(34,211,238,0.9), rgba(168,85,247,0.9))',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(8, 10, 24, 0.45)',
        glow: '0 0 35px rgba(34, 211, 238, 0.35)',
        'glow-violet': '0 0 35px rgba(168, 85, 247, 0.35)',
        'glow-soft': '0 0 60px rgba(45, 212, 191, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(20px, -30px) scale(1.05)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34,211,238,0.25)' },
          '50%': { boxShadow: '0 0 40px rgba(34,211,238,0.55)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 12s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
