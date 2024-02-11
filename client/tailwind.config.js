/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        100 : "83vh",
        900 : "90%",
      },
    },
  },
  plugins: [],
}