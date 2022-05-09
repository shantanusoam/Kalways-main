module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
    },
    extend: {
      colors: {
        'Site-green': '#3bea1f',
        'Site-blue': '#0064bf',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
