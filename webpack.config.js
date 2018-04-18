const webpackConfig = require('terra-dev-site/config/webpack/webpack.config')();
// const I18nAggregatorPlugin = require('terra-i18n-plugin');
// const i18nSupportedLocales = require('terra-i18n/lib/i18nSupportedLocales');
// const path = require('path');
// const glob = require('glob');


// const searchPattern = path.resolve(process.cwd(), 'node_modules', 'terra-*', 'packages', '*');

// const translationsDirectories = glob.sync(searchPattern);

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


// const i18nAggregator = new I18nAggregatorPlugin({
//   baseDirectory: process.cwd(),
//   translationsDirectories,
//   supportedLocales: i18nSupportedLocales,
// });

// Remove the default default i18n aggregator plugin
// const startPlugins = webpackConfig.plugins.splice(0, 2);
// // Add the terra-ui's i18n aggregator plugin
// startPlugins.push(i18nAggregator);
// const endPlugins = webpackConfig.plugins.splice(1, webpackConfig.plugins.length);

// webpackConfig.plugins = startPlugins.concat(endPlugins);

module.exports = webpackConfig;
