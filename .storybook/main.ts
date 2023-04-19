import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  features: {
    // to enable composition
    buildStoriesJson: true
  },
  webpackFinal: (config, _) => {
    config.optimization = {
      minimize: false,
      minimizer: [],
      splitChunks: {
        chunks: "all",
        minSize: 30 * 1024, // 30KB
        maxSize: 1024 * 1024, // 1MB
      }
    };

    return {
      ...config,
    }
  }
};
export default config;
