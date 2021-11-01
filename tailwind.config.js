module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            'hci-lila': '#8034AD',
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
