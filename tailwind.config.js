/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          // md: "2rem",
          // lg: "4rem",
          // xl: "5rem",
          // "2xl": "6rem",
        },
      },
      fontFamily: {
        "playfair-display": "'Playfair Display', serif",
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        primary: "#FCA22A",
        // title: "#0e385d",
        natural: "#0e385d",
        navy: "#0e385d",
        green: "#21b360",
      },
    },
  },
  plugins: [require("daisyui")],
};
