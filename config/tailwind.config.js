const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      // custom color palette for branding, see https://tailwindcss.com/docs/customizing-colors
      colors: {
        primary: {
          50: '#fff9eb',
          100: '#ffe7c7',
          200: '#ffd28c',
          300: '#ffb951',
          400: '#ff9f24',
          500: '#ff8c0d',
          600: '#ff6b00',
          700: '#cc4e02',
          800: '#a13d0b',
          900: '#82340c'
        },
        secondary: colors.black
      },
      keyframes: {
        flashfade: { "0%, 100%": { opacity: "0" }, "5%, 80%": { opacity: "1" } },
        sparkle: {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1) rotate(0deg)',
            textShadow: '0 0 7px #ff8c0d, 0 0 10px #ff8c0d, 0 0 21px #ff8c0d'
          },
          '25%': {
            opacity: '0.8',
            transform: 'scale(1.1) rotate(2deg)',
            textShadow: '0 0 10px #ff8c0d, 0 0 20px #ff8c0d, 0 0 30px #ff8c0d'
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.2) rotate(-2deg)',
            textShadow: '0 0 15px #ff8c0d, 0 0 25px #ff8c0d, 0 0 40px #ff8c0d'
          },
          '75%': {
            opacity: '0.8',
            transform: 'scale(1.1) rotate(1deg)',
            textShadow: '0 0 10px #ff8c0d, 0 0 20px #ff8c0d, 0 0 30px #ff8c0d'
          }
        }
      },
      animation: {
        flashfade: 'flashfade 5s ease-in-out',
        sparkle: 'sparkle 2s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
