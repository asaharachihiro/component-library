const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
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
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@components": path.resolve(__dirname, "../src/components"),
    };

    config.module.rules = config.module.rules.filter(
      (rule) =>
        !(
          rule.test &&
          typeof rule.test.test === "function" &&
          rule.test.test(".css")
        )
    );

    config.module.rules.push({
      test: /\.scss$/,
      include: path.resolve(__dirname, "../src"),
      use: ["style-loader", "css-loader", "sass-loader", "postcss-Loader"],
    });

    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            ["@babel/preset-react", { runtime: "automatic" }],
            "@babel/preset-typescript",
            "@babel/preset-env",
          ],
        },
      },
    });

    config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx");

    config.performance = {
      hints: false,
    };

    return config;
  },
};
