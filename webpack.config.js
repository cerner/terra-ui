const defaultWebpackConfig = require('terra-dev-site/config/webpack/webpack.config');
const path = require('path');


const webpackConfig = (env, argv) => {
  const config = defaultWebpackConfig(env, argv);
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

  const moduleRules = config.module.rules;
  // Remove the default babel loader rule
  moduleRules.shift();
  // Add the terra-ui's babel loader rule
  moduleRules.unshift(babelLoaderRule);

  config.module.rules = moduleRules;
  config.stats = 'normal';
  config.resolve.alias['terra-props-table'] = propsTable;
  config.resolve.alias['terra-markdown'] = terraMarkdown;
  config.resolve.alias['terra-date-picker'] = terraDatePicker;
  config.resolve.alias.moment = momentAlias;
  config.resolve.alias.intl = intl;
  config.resolve.alias['resize-observer-polyfill'] = resizeObserver;
  config.resolve.alias['react-router-dom'] = reactRouterDom;
  config.resolve.alias['babel-runtime'] = babelRuntime;
  config.resolve.alias['terra-button'] = terraButton;

  return config;
};

module.exports = webpackConfig;
