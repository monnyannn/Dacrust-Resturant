const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      const imageRule = webpackConfig.module.rules.find(rule => rule.test?.test('.svg'));
      if (imageRule) {
        imageRule.test = /\.(ico|gif|jpe?g|png|svg)$/i;
      }
      return webpackConfig;
    }
  },
};
