/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#1D4396",
          DEFAULT: "#2196f3",
          dark: "#001529",
        },
        secondary: "#ff5722",
        neutral: {
          light: "#f5f5f5",
          DEFAULT: "#9e9e9e",
          dark: "#616161",
        },
      },
    },
  },
  plugins: [],
};
