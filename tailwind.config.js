/** @type {import('tailwindcss').Config} */
const designTokens = require("./tailwind.json");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/styles/global.scss",
    "./storybook-static/**/*.html",
  ],

  theme: {
    extend: {
      ...designTokens.theme,
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
