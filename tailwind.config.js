/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        designer: {
          cream: '#F3F0E8',
          sand: '#ECE7DA',
          beige: '#E3DDD0',
          red: '#E8111B',
          'red-dark': '#C40D16',
          'red-light': '#FDE8E9',
          dark: '#111111',
          muted: '#62605C',
          border: '#DCD4C4',
        },
        dev: {
          bg: '#0F1117',
          surface: '#161922',
          card: '#1B202C',
          border: '#2A3042',
          amber: '#F5B041',
          'amber-hover': '#EDB95E',
          'amber-dim': 'rgba(245, 176, 65, 0.12)',
          text: '#E5E7EB',
          muted: '#8B949E',
          cyan: '#38BDF8',
          green: '#34D399',
        }
      },
      fontFamily: {
        heading: ['Syne', 'Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'brutalist-red': '4px 4px 0px #E8111B',
        'brutalist-dark': '4px 4px 0px #111111',
        'brutalist-amber': '4px 4px 0px #F5B041',
        'terminal-glow': '0 0 25px rgba(245, 176, 65, 0.15)',
        'designer-glow': '0 0 25px rgba(232, 17, 27, 0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        }
      }
    },
  },
  plugins: [],
}

