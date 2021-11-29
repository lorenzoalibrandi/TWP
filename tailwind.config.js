module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': {'min': '300px', 'max': '639px'},
      'sm': {'min': '640px', 'max': '791px'},
      'md': {'min': '792px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
