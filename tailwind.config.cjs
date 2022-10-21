/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#F6F4EC",
        'secondary': '#545748',
        'accent':"#de967d"
      }
      , fontSize: {
        "sm": '15px',
        "base": "18px",
        "xl": "50px"
      }

      , fontFamily: {
        'primary': 'Marcellus',
        'secondary': 'Montserrat',

      }
      
    },
  },
  plugins: [require("daisyui")],
}