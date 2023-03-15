/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#33A3DC',
        accent: '#14B8A6',
        dark: '#333333',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
