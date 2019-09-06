const defaultWebpackConfig = require('terra-dev-site/config/webpack/webpack.config');
const path = require('path');

const webpackConfig = (env, argv) => {
  const config = defaultWebpackConfig(env, argv);

  const propsTable = path.resolve(path.join(process.cwd(), 'node_modules', 'terra-props-table'));
  const momentAlias = path.resolve(path.join(process.cwd(), 'node_modules', 'moment'));
  const intl = path.resolve(path.join(process.cwd(), 'node_modules', 'intl'));
  const terraMarkdown = path.resolve(path.join(process.cwd(), 'node_modules', 'terra-markdown'));
  const terraDatePicker = path.resolve(path.join(process.cwd(), 'node_modules', 'terra-date-picker'));
  const resizeObserver = path.resolve(path.join(process.cwd(), 'node_modules', 'resize-observer-polyfill'));
  const reactRouterDom = path.resolve(path.join(process.cwd(), 'node_modules', 'react-router-dom'));
  const babelRuntime = path.resolve(path.join(process.cwd(), 'node_modules', 'babel-runtime'));
  const terraButton = path.resolve(path.join(process.cwd(), 'node_modules', 'terra-button'));

  config.stats = 'normal';
  config.resolve.alias = {};
  config.resolve.alias['terra-props-table'] = propsTable;
  config.resolve.alias['terra-markdown'] = terraMarkdown;
  config.resolve.alias['terra-date-picker'] = terraDatePicker;
  config.resolve.alias.moment = momentAlias;
  config.resolve.alias.intl = intl;
  config.resolve.alias['resize-observer-polyfill'] = resizeObserver;
  config.resolve.alias['react-router-dom'] = reactRouterDom;
  config.resolve.alias['babel-runtime'] = babelRuntime;
  config.resolve.alias['terra-button'] = terraButton;

  // TODO: Remove this resolveLoader config once it is a part of terra-dev-site
  // Related issue: https://github.com/cerner/terra-dev-site/issues/199
  config.resolveLoader = {
    alias: {
      'terra-props-table-loader': path.join(__dirname, 'scripts/terra-props-table-loader'),
    },
  };

  return config;
};

module.exports = webpackConfig;
