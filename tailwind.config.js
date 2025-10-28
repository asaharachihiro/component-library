/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/styles/global.scss",
    "./storybook-static/**/*.html",
  ],
  safelist: [],
  theme: {
    colors: {
      primary: {
        DEFAULT: "rgb(7, 72, 207, 1)",
        sub: "rgb(7, 72, 207, 0.2)",
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
      transparent: "rgb(0, 0, 0, 0)",
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
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-out",
        slideInTop: "slideInTop 0.3s ease-out",
        slideInBottom: "slideInBottom 0.3s ease-out",
        fadeSlideInTop: "fadeSlideInTop 0.3s ease-in-out",
        shimmer: "shimmer 1.5s infinite",
        progress: "indeterminateAnimation 1.5s infinite linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeSlideInTop: {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeSlideInBottom: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        indeterminateAnimation: {
          "0%": {
            transform: "translateX(-100%) scaleX(0)",
          },
          "40%": {
            transform: "translateX(-100%) scaleX(0.4)",
          },
          "100%": {
            transform: "translateX(100%) scaleX(0.5)",
          },
        },
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
