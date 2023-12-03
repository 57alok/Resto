/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "bg-green":'#31442D'
      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}

