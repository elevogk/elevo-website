/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'elevo-bg':         '#080B14',
        'elevo-card':       '#0D1420',
        'elevo-card-hover': '#111928',
        'elevo-blue':       '#4A90D9',
        'elevo-blue-dim':   '#1A3A6A',
        'elevo-teal':       '#00D4AA',
        'elevo-grey':       '#8899AA',
        'elevo-grey-dim':   '#4A6080',
        'elevo-border':     '#1A2A40',
        'elevo-border-hi':  '#2A4A6A',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: { content: '1100px' },
      animation: {
        'pulse-dot':  'pulse-dot 2s ease-in-out infinite',
        'float':      'float 4s ease-in-out infinite',
        'float-d':    'float 4s ease-in-out 1.5s infinite',
        'bar-grow':   'bar-grow 1s ease-out forwards',
        'cur-blink':  'cur-blink 0.75s step-end infinite',
        'teal-pulse': 'teal-pulse 2.4s ease-out infinite',
      },
      keyframes: {
        'pulse-dot': {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '0.5', transform: 'scale(1.4)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
        'bar-grow': {
          from: { transform: 'scaleY(0)' },
          to:   { transform: 'scaleY(1)' },
        },
        'cur-blink': {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        'teal-pulse': {
          '0%':   { boxShadow: '0 0 0 0 rgba(0,212,170,0.65)' },
          '60%':  { boxShadow: '0 0 0 16px rgba(0,212,170,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(0,212,170,0)' },
        },
      },
    },
  },
  plugins: [],
}

