/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        amit: '#1e317f'
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
