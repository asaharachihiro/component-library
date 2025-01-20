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
};
export default config;
