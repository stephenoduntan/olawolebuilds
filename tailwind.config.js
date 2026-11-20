/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          base: '#08090b',
          raised: '#0e1115',
          elevated: '#151920',
          card: '#101319',
          overlay: 'rgba(8, 9, 11, 0.85)',
          heading: '#f3f4f6',
          body: '#d1d5db',
          muted: '#8b949e',
          subtle: '#525a66',
        },
        hairline: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          subtle: 'rgba(255, 255, 255, 0.04)',
          bright: 'rgba(255, 255, 255, 0.16)',
          focused: 'rgba(255, 255, 255, 0.3)',
        },
        accent: {
          DEFAULT: '#ff5c00', // Restrained signature cadmium solar amber
          hover: '#ff7324',
          subtle: 'rgba(255, 92, 0, 0.1)',
          glow: 'rgba(255, 92, 0, 0.25)',
          emerald: '#10b981', // Live status indicator
        }
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'SF Mono', 'ui-monospace', 'monospace'],
      },
      borderWidth: {
        'hairline': '1px',
      },
      letterSpacing: {
        'widest-mono': '0.12em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
