/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/images/tattoo22.jpg')",
      },
      fontFamily: {
        Great: ["Great", "sans-serif"],
        Shadows: ["Shadows", "sans-serif"],
      },
    },
  },
  plugins: [],
};
