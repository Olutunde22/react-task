/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'mobile': ['1.75rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.05em',
          fontWeight: '700',
        }],
        'large': ['4.5rem', {
          lineHeight: '5.875rem',
          letterSpacing: '-0.05em',
          fontWeight: '700',
        }],
      },
      backgroundImage: theme => ({
        'landing': "url(assets/background.png)"
      })
    },
  },
  plugins: [],
}