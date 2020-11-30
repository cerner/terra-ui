const defaultWebpackConfig = require('terra-dev-site/config/webpack/webpack.config');

const webpackConfig = (env, argv) => {
  const config = defaultWebpackConfig(env, argv);
  config.stats = 'normal';
  return config;
};

module.exports = webpackConfig;
