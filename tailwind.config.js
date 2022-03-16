module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        half: '50%',
      },
      fontFamily: {
        fraunces: `'Fraunces', serif`,
        barlow: `'Barlow', sans-serif`,
      },
    },
    screens: {
      '2xl': { max: '1200px' },
      xl: { max: '1000px' },
      lg: { max: '800px' },
      md: { max: '600px' },
      sm: { max: '400px' },
    },
  },
  plugins: [],
};
