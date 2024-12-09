/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
        Shippori: ["Shippori Antique B1", "sans-serif"]
      },
      color: {
        white: "#F5F5F5",
      }
    },
  },
  plugins: [],
}

