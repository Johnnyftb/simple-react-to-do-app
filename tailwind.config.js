/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#31363F",
        third: "#76ABAE",
        light: "#EEEEEE"
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

