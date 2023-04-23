/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'abril': ['Abril Fatface','cursive'],
        'cookie': ['Cookie', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
        'display': ['DM Serif Display', 'serif']
      },
      colors:{
        'main-1':'#012626',
        'main-2':'#04BFAD',
        'main-3':'#038C7F',
        'main-4':'#027368',
        'main-5':'#01403A'
      }
    },
  },
  plugins: [],
}