const path = require("path");

module.exports = {
  stories: ["../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {},
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules.filter(
      (rule) =>
        !(
          rule.test &&
          typeof rule.test.test === "function" &&
          rule.test.test(".css")
        )
    );

    config.module.rules.push({
      test: /\.css$/,
      include: path.resolve(__dirname, "../src"),
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: { importLoaders: 1 },
        },
        "postcss-loader",
      ],
    });

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
