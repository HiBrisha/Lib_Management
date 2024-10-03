/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#E1DAEF',
      },
      fontSize:{
        'title':'40px'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}