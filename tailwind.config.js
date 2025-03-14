/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,jsx,ts,tsx,mdx}",
    "./storybook-static/**/*.html",
  ],
  safelist: [],
  theme: {
    colors: {
      main: {
        DEFAULT: "rgb(7, 72, 207, 1)",
        bg: "rgb(7, 72, 207, 0.2)",
      },
      black: {
        DEFAULT: "rgb(1, 30, 42, 1)",
        sub: "rgb(1, 30, 42, 0.5)",
        overlay: "rgb(1, 30, 42, 0.3)",
        disabled: "rgb(1, 30, 42, 0.2)",
        "3-opacity": "rgb(1, 30, 42, 0.03)",
        "5-opacity": "rgb(1, 30, 42, 0.05)",
        "10-opacity": "rgb(1, 30, 42, 0.1)",
        "20-opacity": "rgb(1, 30, 42, 0.2)",
        "50-opacity": "rgb(1, 30, 42, 0.5)",
      },
      white: "#FFFFFF",
      danger: {
        DEFAULT: "rgb(224, 6, 6, 1)",
        light: "rgb(224, 6, 6, 0.1)",
      },
      success: "rgb(23, 179, 132, 1)",
      link: {
        DEFAULT: "rgb(58, 58, 230, 1)",
        visited: "rgb(138, 74, 236, 1)",
      },
    },
    boxShadow: {
      low: "0px 1px 4px 2px rgb(0, 0, 0, 0.075)",
      high: "0px 4px 12px 4px rgb(0, 0, 0, 0.1)",
      none: "0 0 rgb(0, 0, 0, 0)",
    },
    extend: {
      fontSize: {
        base: "16px",
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".icon-wght-500": {
          fontVariationSettings: '"wght" 500',
        },
        ".icon-fill": {
          fontVariationSettings: '"FILL" 1',
        },
      });
    },
  ],
};
