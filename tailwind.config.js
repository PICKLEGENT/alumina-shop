/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
    },
    spacing: {
      '15': '15px',
      '25': '25px',
      '50': '50px',
      '60': '60px',
      '100': '100px',
      '150': '150px',
      '200': '200px',
      '270': '270px',
      '300': '300px',
      '400': '400px',
      '450': '450px',
      '480': '480px',
      '800': '800px',
      '850': '850px',
    },
    colors: {
      "white-100": "#FCFCFC",
      "red-100": '#CF0C39',
      },
    },
  },
  plugins: [],
}

