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

module.exports = webpackConfig;
