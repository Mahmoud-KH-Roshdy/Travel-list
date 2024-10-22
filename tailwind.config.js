/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        'mainBg':'#121212' ,
        'darkBg':'#1F1F1F' ,
      },
    },
  },
  plugins: [],
}

