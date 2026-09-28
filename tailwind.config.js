/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Light mode surfaces */
        canvas: {
          DEFAULT: '#F7F7F5',
          white: '#FFFFFF',
        },
        /* Dark mode surfaces */
        ink: {
          DEFAULT: '#0F0F0E',
          secondary: '#1A1A18',
          card: '#1F1F1D',
        },
        /* Text */
        stone: {
          DEFAULT: '#171717',
          muted: '#5F6368',
          faint: '#9CA3AF',
        },
        /* Borders */
        line: {
          DEFAULT: '#E5E5E0',
          dark: '#2A2A28',
        },
        /* Accents */
        accent: {
          blue: '#155EEF',
          teal: '#0F766E',
          green: '#16A34A',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Manrope', 'var(--font-manrope)', 'system-ui', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'var(--font-ibm-mono)', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)',
        'card':   '0 4px 16px -4px rgba(0,0,0,0.08)',
        'elevated':'0 8px 32px -8px rgba(0,0,0,0.10)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'flow-down': {
          '0%':   { opacity: '0', transform: 'translateY(-4px)' },
          '50%':  { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
        'ping-slow': {
          '0%, 100%': { transform: 'scale(1)',   opacity: '0.8' },
          '50%':       { transform: 'scale(1.4)', opacity: '0' },
        },
      },
      animation: {
        'fade-up':   'fade-up 0.5s ease forwards',
        'fade-in':   'fade-in 0.4s ease forwards',
        'flow-down': 'flow-down 2.4s ease-in-out infinite',
        'ping-slow': 'ping-slow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
