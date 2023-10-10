/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      main: ["Poppins-Bold", "sans-serif"],
    },
    extend: {
      backgroundColor: {},
      colors: {
        main: "#0000DA",
        second: "#FEB800",
        third: "#EE3B0F",
        fourth: "#D4D4D4",
        white: "#ffff",
        red: "#FF0000",
        gray: "#808080",
        blue: "#3B82F6",
      },
    },
  },
  plugins: [],
};
