/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
