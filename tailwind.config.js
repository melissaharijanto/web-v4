/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "zoomBounce": {
          '0%': { transform: 'scale(0.6)' },
          '50%': { transform: 'scale(1.2)' }, // Zoom in
          '70%': { transform: 'scale(0.9)' },  // Zoom out a bit
          '100%': { transform: 'scale(1)' },   // Back to normal
        },
      },
      fontFamily: {
        shippori: ["Shippori Antique B1", "sans-serif"],
        manrope: ["Manrope", "sans-serif"]
      },
      colors: {
        white: "#F2F3F4",
        black: "#1e1e1e",
        yellow: "#ffbd59",
        red: "#FF746C",
        blue: "#589cf6",
        "blue-pressed": "#4179cc",
        "black-pressed": "#121212",
        "red-pressed": "#d85c56",
        "yellow-pressed":"#d99b43",
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 16s linear infinite',
        'zoom-bounce': 'zoomBounce 1.5s ease-out', // Animation that lasts 1 second
      }
    },
  },
  variants: {
    extend: {
        borderColor: ['hover', 'group-hover'],
    },
},
  plugins: [],
}

