/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ios: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'SF Pro Display', 'Inter', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        ios: {
          blue: '#007AFF',
          green: '#34C759',
          indigo: '#5856D6',
          orange: '#FF9500',
          pink: '#FF2D55',
          purple: '#AF52DE',
          red: '#FF3B30',
          teal: '#5AC8FA',
          yellow: '#FFCC00',
          gray1: '#8E8E93',
          gray2: '#AEAEB2',
          gray3: '#C7C7CC',
          gray4: '#D1D1D6',
          gray5: '#E5E5EA',
          gray6: '#F2F2F7',
          darkBg: '#000000',
          darkCard: '#1C1C1E',
          darkCard2: '#2C2C2E',
          lightBg: '#F2F2F7',
          lightCard: '#FFFFFF',
          lightCard2: '#E5E5EA',
        }
      },
      boxShadow: {
        'liquid-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.18)',
        'liquid-glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.4)',
        'phone-frame': '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 80px -20px rgba(0, 0, 0, 0.9), inset 0 0 4px 2px rgba(255, 255, 255, 0.15)',
        'island': '0 10px 25px -5px rgba(0, 0, 0, 0.8), 0 4px 6px -2px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'jiggle': 'jiggle 0.22s infinite ease-in-out alternate',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
      },
      keyframes: {
        jiggle: {
          '0%': { transform: 'rotate(-1.8deg) scale(0.98)' },
          '100%': { transform: 'rotate(1.8deg) scale(1.02)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.04)' },
        }
      }
    },
  },
  plugins: [],
}
