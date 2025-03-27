/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-button2': '#D54D46',
        'c-hover-button2': '#E07575',
        'c-secondary': '#F5F5F5'
      }
    },
  },
  plugins: [],
}

