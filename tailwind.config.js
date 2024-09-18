/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{vue,js}",
    "./components/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#FFB8D3',
        'emphasis': '#BFE2F5',
        'background': '#000000',
      },
      fontSize: {
        'regular': '16px',
        'bold': '32px',
        'small': '12px',
      },
      spacing: {
        'margin': '30px',
      },
    },
  },
  plugins: [],
}
