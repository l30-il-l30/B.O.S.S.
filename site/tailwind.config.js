/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "aguafina": "Aguafina Script",
        "oswald": ["Oswald", "sans-serif"],
        'ocr': ['OCR A Std', 'monospace'],
      },
      dropShadow: {
        "logo": "-5px 4px 4px rgba(150, 78, 218, 1)"
      }
    }
  },
  plugins: [],
}

