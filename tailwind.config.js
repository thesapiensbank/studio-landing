/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E7881A",
      },
      boxShadow: {
        vigenette: "inset 0 0 100px #000",
      },
      keyframes: {
        wiggle: {
          "0%": { opacity: "0" },
          "50%": { opacity: "50%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in",
      },
    },
  },
  plugins: [],
};
