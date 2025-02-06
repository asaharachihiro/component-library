/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./.storybook/**/*.{ts,tsx,mdx}",
  ],
  safelist: [
    "bg-blue-500",
    "bg-gray-200",
    "bg-red-500",
    "text-white",
    "text-black",
    "text-gray-900",
  ],
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
        "5-opacity": "rgb(1, 30, 42, 0.05)",
        "10-opacity": "rgb(1, 30, 42, 0.1)",
        "20-opacity": "rgb(1, 30, 42, 0.2)",
        "50-opacity": "rgb(1, 30, 42, 0.5)",
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
  plugins: [],
};
