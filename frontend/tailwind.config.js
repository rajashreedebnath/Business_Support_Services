module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontWeight: {
        'custom-light': 350,
        'custom-semibold': 550,
        'custom-bold': 750,
      },

      colors: {
        'custom-blue': '#3CC3F2',
        'custom-navyblue': '#112949',
      },

      fontFamily: {
        exo: ["'Exo 2'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
