module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react-vite",
  core: {
    builder: "@storybook/builder-vite",
  },
  staticDirs: ["../public"],
};
