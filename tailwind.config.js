/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        120: '30rem'
      }
    },
    screens: {
      sm: [{ max: '810px' }]
    }
  },
  plugins: []
};
