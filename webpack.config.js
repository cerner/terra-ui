const webpackConfig = require('terra-dev-site/src/config/webpack.config');

const babelLoaderRule = {
  test: /\.(jsx|js)$/,
  exclude: /node_modules(?!\/terra-)/,
  use: 'babel-loader',
};

const moduleRules = webpackConfig.module.rules;
// Remove the default babel loader rule
moduleRules.shift();
// Add the terra-ui's babel loader rule
moduleRules.unshift(babelLoaderRule);

webpackConfig.module.rules = moduleRules;

// Don't run the i18n plugin.
const startPlugins = webpackConfig.plugins.splice(0, 2);
const endPlugins = webpackConfig.plugins.splice(1, webpackConfig.plugins.length);

webpackConfig.plugins = startPlugins.concat(endPlugins);

module.exports = webpackConfig;
