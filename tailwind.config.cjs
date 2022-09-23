/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      keyframes: {
        showOverlay: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        hiddenOverlay: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        showDialog: {
          '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        hiddenDialog: {
          '0%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
          '100%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
        },
      },
      animation: {
        's-overlay': 'showOverlay 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'h-overlay': 'hiddenOverlay 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        's-dialog': 'showDialog 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'h-dialog': 'hiddenDialog 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        background: "url('/background.png')",
        arcoGradient: "linear-gradient(90deg, #9572FC 10%, #43E7AD 40%, #E1D55D 100%)",
        fadeGameGradient: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)"
      }
    },
  },
  plugins: [
    require('tailwindcss-radix')({
      variantPrefix: false,
    }),
    require('tailwind-scrollbar'),
  ]
}
