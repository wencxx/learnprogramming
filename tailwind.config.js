/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
        mont: 'Montserrat, sans-serif'
      },
      colors: {
        "prime": '#1f2641',
        "second": '#31388b',
        "ter": '#f75842',
        "header": '#6c63ff',
      },
      boxShadow: {
        'inner-lg': 'rgba(0, 0, 0, 0.5) 0px 0px 48px 0px inset'
      }
    },
  },
  plugins: [],
}

