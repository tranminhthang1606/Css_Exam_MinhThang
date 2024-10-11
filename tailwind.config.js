/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    screens: {
      'sm': { 'max': '376px' },
      'md': { 'max': '768px' }
    },
    extend: {
      colors: {
        'main': '#A53DFF',
        'submain': 'rgba(237, 216, 255, 0.5)',
        'colorText': '#556070'
      },

      backgroundColor: {
        'ovalBlue': 'rgba(196, 245, 233, 0.7)',
        'ovalPurple': 'rgba(218, 77, 241, 0.4)',
        'submain': 'rgba(237, 216, 255, 0.5)',
      },
      maxWidth: {
        'paragraphMax': '648px'
      }
    },

  },

  plugins: [],
}