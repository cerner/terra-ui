const webpackConfig = require('terra-dev-site/config/webpack/webpack.config')();
const path = require('path');

const babelLoaderRule = {
  test: /\.(jsx|js)$/,
  exclude: /node_modules(?!\/terra-)/,
  use: 'babel-loader',
};

const propsTable = path.resolve(path.join(process.cwd(), 'node_modules', 'terra-props-table'));
const momentAlias = path.resolve(path.join(process.cwd(), 'node_modules', 'moment'));
const intl = path.resolve(path.join(process.cwd(), 'node_modules', 'intl'));
const terraMarkdown = path.resolve(path.join(process.cwd(), 'node_modules', 'terra-markdown'));
const terraDatePicker = path.resolve(path.join(process.cwd(), 'node_modules', 'terra-core', 'packages', 'terra-date-picker'));
const resizeObserver = path.resolve(path.join(process.cwd(), 'node_modules', 'resize-observer-polyfill'));
const reactRouterDom = path.resolve(path.join(process.cwd(), 'node_modules', 'react-router-dom'));
const babelRuntime = path.resolve(path.join(process.cwd(), 'node_modules', 'babel-runtime'));
const terraButton = path.resolve(path.join(process.cwd(), 'node_modules', 'terra-button'));

const moduleRules = webpackConfig.module.rules;
// Remove the default babel loader rule
moduleRules.shift();
// Add the terra-ui's babel loader rule
moduleRules.unshift(babelLoaderRule);

webpackConfig.module.rules = moduleRules;
webpackConfig.stats = 'normal';
webpackConfig.resolve.alias['terra-props-table'] = propsTable;
webpackConfig.resolve.alias['terra-markdown'] = terraMarkdown;
webpackConfig.resolve.alias['terra-date-picker'] = terraDatePicker;
webpackConfig.resolve.alias.moment = momentAlias;
webpackConfig.resolve.alias.intl = intl;
webpackConfig.resolve.alias['resize-observer-polyfill'] = resizeObserver;
webpackConfig.resolve.alias['react-router-dom'] = reactRouterDom;
webpackConfig.resolve.alias['babel-runtime'] = babelRuntime;
webpackConfig.resolve.alias['terra-button'] = terraButton;

module.exports = webpackConfig;
