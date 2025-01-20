/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      main: {
        DEFAULT: "rgb(7, 72, 207, 1)",
        bg: "rgb(7, 72, 207, 0.2)",
      },
      black: {
        DEFAULT: "rgb(1, 30, 42, 1)",
        sub: "rgb(1, 30, 42, 0.5)",
        overlay: "rgb(0, 0, 0, 0.3)",
        disabled: "rgb(1, 30, 42, 0.2)",
      },
      white: "#FFFFFF",
      danger: "rgb(224, 6, 6, 1)",
      success: "rgb(23, 179, 132, 1)",
      link: {
        DEFAULT: "rgb(58, 58, 230, 1)",
        visited: "rgb(138, 74, 236, 1)",
      },
    },
    boxShadow: {
      low: "0px 1px 4px 2px rgb(0, 0, 0, 0.05)",
      high: "0px 4px 12px 4px rgb(0, 0, 0, 0.075)",
      none: "0 0 rgb(0, 0, 0, 0)",
    },
    extend: {
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
