/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'sans-serif'],
    },
    spacing: {
      '25': '25px',
      '50': '50px',
      '150': '150px',
      '270': '270px',
      '200': '200px',
      '400': '400px',
      '450': '450px',
      '800': '800px',
    },
    colors: {
      "white-100": "#FCFCFC",
      "red-100": '#CF0C39',
      },
    },
  },
  plugins: [],
}

