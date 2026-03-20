/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#004A97",
          dark: "#003875",
        },
        secondary: {
          DEFAULT: "#AD1644",
          dark: "#8a1136",
        },
        accent: {
          DEFAULT: "#009482",
          dark: "#007a6b",
        },
        navy: {
          DEFAULT: "#0B3057",
          dark: "#07294C",
          darkest: "#102439",
        },
        divider: "#eaeaea",
      },
      fontFamily: {
        serif: ["source-serif", "serif"],
        sans: ["source-sans-pro", "sans-serif"],
        "sans-3": ["source-sans-3", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
