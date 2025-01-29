/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-button2': '#DB4444',
        'c-hover-button2': '#E07575',
        'c-secondary': '#F5F5F5'
      }
    },
  },
  plugins: [],
}

