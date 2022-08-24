/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.html",
  ],
  theme: {
    
    extend: {},
  },

  // solo para versiones 2.2.16 => ya estan por defecto en 3.1.8
  // variants: {
  //   opacity: ['resposive', 'hover', 'focus', 'disabled']
  // },
  plugins: [],
}
