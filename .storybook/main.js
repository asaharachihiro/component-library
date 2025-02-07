const { mergeConfig } = require("vite");

module.exports = {
  stories: ["../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))"],

  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
  ],

  framework: "@storybook/react-vite",

  staticDirs: ["../public"],

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      base: "/",
      assetsInclude: ["/sb-preview/runtime.js"], // 追加
    });
  },
};
