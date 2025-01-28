/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
  module,
  exports: {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [],
    framework: "@storybook/react",
    staticDirs: ["../public"],
  },
  webpackFinal: async (config) => {
    config.resolve.extensions.push(".tsx", ".ts", ".js");
    return config;
  },
};
export default config;
