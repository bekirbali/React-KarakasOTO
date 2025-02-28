/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f6f5",
          100: "#e6e8e6",
          200: "#d1d4d1",
          300: "#b3b8b3",
          400: "#919791",
          500: "#757d75", // base color
          600: "#5d645d",
          700: "#4d524d",
          800: "#424542",
          900: "#393b39",
          950: "#242524",
        },
        secondary: {
          50: "#fefbec",
          100: "#fdf6d4",
          200: "#faeaa8",
          300: "#f9dd73",
          400: "#f7ca18", // base color
          500: "#eab808",
          600: "#c49006",
          700: "#9c6808",
          800: "#80520d",
          900: "#6b4410",
          950: "#3d2407",
        },
      },
    },
  },
  plugins: [],
};
