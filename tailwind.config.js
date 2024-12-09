/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shippori: ["Shippori Antique B1", "sans-serif"],
        manrope: ["Manrope", "sans-serif"]
      },
      colors: {
        white: "#F5F5F5",
        black: "#1e1e1e",
        yellow: "#ffbd59",
        red: "#FF746C",
        blue: "#589cf6",
        "blue-pressed": "#4179cc",
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      }
    },
  },
  plugins: [],
}

