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
        primary: '#1DBF73',
        accent: '#12B3D6',
        secondary: '#FFE833',
        dark: '#333333',
      },
    },
  },
  plugins: [],
}
