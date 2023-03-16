// module.exports = {
//   "stories": [
//     "../stories/**/*.stories.mdx",
//     "../stories/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions"
//   ],
//   "framework": "@storybook/react",
//   "core": {
//     "builder": "@storybook/builder-webpack5"
//   }
// }
const path = require('path')

module.exports = {
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  features: { emotionAlias: false },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@utils': path.resolve(__dirname, '../utils'),
      '@components': path.resolve(__dirname, '../components'),
      '@renderers': path.resolve(__dirname, '../components/renderers'),
      '@hooks': path.resolve(__dirname, '../hooks'),
      '@theme': path.resolve(__dirname, '../theme'),
    }
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    })
    return config
  },
}
