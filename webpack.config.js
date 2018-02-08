/* eslint import/no-extraneous-dependencies: ["error"] */
const path = require('path');
const webpackConfig = require('terra-site/src/config/webpack.config');
const I18nAggregatorPlugin = require('terra-i18n-plugin');
const i18nSupportedLocales = require('terra-i18n/lib/i18nSupportedLocales');

const babelLoderRule = {
  test: /\.(jsx|js)$/,
  exclude: /node_modules(?!\/terra-)/,
  use: 'babel-loader',
};

const moduleRules = webpackConfig.module.rules;
moduleRules.shift();
moduleRules.unshift(babelLoderRule);

webpackConfig.module.rules = moduleRules;

const translationsPath = path.join(__dirname, 'node_modules', 'terra-core', 'packages', 'terra-site-examples');

const i18nPlugin = new I18nAggregatorPlugin({
  baseDirectory: path.resolve(translationsPath),
  supportedLocales: i18nSupportedLocales,
});

const plugins = webpackConfig.plugins;
plugins[2] = i18nPlugin;

webpackConfig.plugins = plugins;

webpackConfig.resolve.modules = [path.resolve(path.join(translationsPath, 'aggregated-translations')), 'node_modules'];

module.exports = webpackConfig;
