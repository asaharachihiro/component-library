const { mergeConfig } = require("vite");

module.exports = {
  stories: ["../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))"],

  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  viteFinal: async (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = "/";
    }
    return mergeConfig(config, {});
  },
};
