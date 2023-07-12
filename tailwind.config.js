/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      robo: ['Roboto']
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      colors: {
        purple: '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'gray-dark': '#273444',
        'gray-light': '#d3dce6',
        'rosado': 'var(--color-primary)',
        'amarillo': 'var(--color-amarillo)',
        info: {
          100: '#EDE9D5',
          400: '#E7AB9A',
          800: '#DF7857',
          900: '#617143'
        }
      },
      width: {
        '34': '136px'
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens: {
        // responsive max-width
          'small': { 'max': '640px' },
          'medium': { 'max': '768px' },
          'large': { 'max': '1024px' },
          'x-large': { 'max': '1279px' },
          '2-x-large': { 'max': '1535px' },
          // responsive rango fijo
          'f-small': { 'min': '640px', 'max': '767px' },
          'f-medium': { 'min': '768px', 'max': '1023px' },
          'f-large': { 'min': '1024px', 'max': '1279px' },
          'f-x-large': { 'min': '1280px', 'max': '1535px' },
          'f-2-x-large': { 'min': '1536px' }
      },
    }
  },
  plugins: [
    plugin(function({ addVariant, matchVariant }){
      addVariant('hocus', ['&:hover', '&:focus']),
      addVariant('optional', '&:optional'),
      addVariant('inverted-colors', '@media (inverted-colors: inverted)'),
      addVariant('third', '&:nth-child(3)'),
      matchVariant(
        'nth',
        (value) => {
          return `&:nth-child(${value})`
        }
      )
    })
  ],
}

