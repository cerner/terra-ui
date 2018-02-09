const webpackConfig = require('terra-site/src/config/webpack.config');

const babelLoderRule = {
  test: /\.(jsx|js)$/,
  exclude: /node_modules(?!\/terra-)/,
  use: 'babel-loader',
};

const moduleRules = webpackConfig.module.rules;
moduleRules.shift();
moduleRules.unshift(babelLoderRule);

webpackConfig.module.rules = moduleRules;

// Don't run the i18n plugin.
const startPlugins = webpackConfig.plugins.splice(0, 2);
const endPlugins = webpackConfig.plugins.splice(1, webpackConfig.plugins.length);

webpackConfig.plugins = startPlugins.concat(endPlugins);

module.exports = webpackConfig;
