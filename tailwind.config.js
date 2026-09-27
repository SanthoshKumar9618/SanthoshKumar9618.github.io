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
        bg: {
          DEFAULT: '#080B10',
          secondary: '#0D1117',
          card: '#11161D',
        },
        border: {
          DEFAULT: '#1E2935',
          subtle: '#273544',
          active: '#22D3EE',
        },
        primary: {
          DEFAULT: '#F1F5F9',
          muted: '#94A3B8',
        },
        cyan: {
          DEFAULT: '#22D3EE',
          glow: 'rgba(34, 211, 238, 0.15)',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          glow: 'rgba(139, 92, 246, 0.12)',
        },
        success: '#22C55E',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'cyan-glow': '0 0 20px -2px rgba(34, 211, 238, 0.25)',
        'violet-glow': '0 0 20px -2px rgba(139, 92, 246, 0.2)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 0.4 },
        },
        'line-flow': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        }
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'line-flow': 'line-flow 3s linear infinite',
      }
    },
  },
  plugins: [],
};
