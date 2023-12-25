/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': {
          100: '#DBFDE2',
          200: '#F6F9FC',
          300: '#81F499',
          400: '#43E565',
          500: '#1BCC41',
          600: '#10A930',
          700: '#10852A',
          800: '#147129',
          900: '#115621'
        }
      }
    },
  },
  plugins: [],
}