const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    mode: 'layers',
    content: [
      './*.php',
      "./**.php",
      "./**/**.php",
      "./assets/js/**.js",
      "../JadweR/**.php",
      "../JadweR/**/**.php",
      "../JadweR/assets/js/**.js",
      ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
