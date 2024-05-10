/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens:{
      s:"375px",
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:"1440px"
    },
    extend: {
      fontFamily:{
        bodyFont:"poppins",
        titleFont:"nunito Sans"
      }
    },
  },
  plugins: [],
}

