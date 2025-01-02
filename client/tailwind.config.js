/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff2f1",
          100: "#ffe2e0",
          200: "#ffc9c5",
          300: "#ffa49d",
          400: "#ff7165",
          500: "#fe4435",
          600: "#ec2818",
          700: "#c71c0e",
          800: "#a41b10",
          900: "#881d14",
          950: "#4a0a05",
        },
        secondary: {
          50: "#f0fdfc",
          100: "#ccfbf7",
          200: "#99f6ef",
          300: "#5fe9e5",
          400: "#2ed3d2",
          500: "#15b5b7",
          600: "#0e8e93",
          700: "#0f7276",
          800: "#115a5e",
          900: "#134b4e",
          950: "#053338",
        },
      },

      fontFamily: {
        primary: ["Manrope", "sans-serif"],
        secondary: ["Inter", "sans"],
      },
    },
  },
  plugins: [],
};
