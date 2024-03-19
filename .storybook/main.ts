import type { StorybookConfig } from "@storybook/angular";
import path from "path";

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  staticDirs: ["./assets/images"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    '@storybook/addon-a11y',
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, '../src')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },

  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

  preview: {
    entry: './preview.ts',
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../src/styles'),
          },
        ],
      },
    },
  },
  
} as StorybookConfig;


export default config;
