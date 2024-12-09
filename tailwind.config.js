/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pjs: ["Plus Jakarta Sans", "sans-serif"],
        shippori: ["Shippori Antique B1", "sans-serif"]
      },
      colors: {
        white: "#F5F5F5",
        black: "#1e1e1e"
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      }
    },
  },
  plugins: [],
}

