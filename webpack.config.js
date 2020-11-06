const path = require('path');
const { merge } = require('webpack-merge');
const {
  TerraDevSite,
  TerraDevSiteEntrypoints,
} = require('@cerner/terra-dev-site');
const WebpackConfigTerra = require('terra-toolkit/config/webpack/webpack.config');

const packageJson = require('./package.json');

const cwd = process.cwd();

const excludes = [
  'terra-dialog-modal',
];

const additionalSearchDirectories = Object.keys(packageJson.dependencies).reduce((acc, dependency) => {
  if ((dependency.startsWith('terra-') || dependency.startsWith('terra-')) && !excludes.includes(dependency)) {
    acc.push(path.join(cwd, 'node_modules', dependency, 'lib', 'terra-dev-site'));
  }
  return acc;
}, []);

const coreConfig = (env = {}) => ({
  entry: TerraDevSiteEntrypoints,
  plugins: [
    new TerraDevSite({
      titleConfig: {
        title: 'Terra',
      },
      primaryNavigationItems: [{
        path: '/home',
        text: 'Home',
        contentExtension: 'home',
      }, {
        path: '/about',
        text: 'About',
        contentExtension: 'about',
      }, {
        path: '/application',
        text: 'Application',
        contentExtension: 'app',
      }, {
        path: '/components',
        text: 'Components',
        contentExtension: 'doc',
      }, {
        path: '/dev_tools',
        text: 'Developer Tools',
        contentExtension: 'tool',
      }, {
        path: '/guides',
        text: 'Guides',
        contentExtension: 'guide',
      }],
      additionalSearchDirectories,
      sideEffectImportFilePaths: [
        'terra-ui/dev-site-config/initializeXFC.js',
        'terra-ui/dev-site-config/IllustrationGrid.scss',
      ],
      // extensionItems: [
      //   {
      //     iconPath: 'terra-icon/lib/icon/IconCompose',
      //     key: 'terra-ui.issue-form',
      //     text: 'Issue Form',
      //     modalPath: 'terra-ui/src/terra-dev-site/IssueForm/Index',
      //   },
      // ],
    }),
  ],
});

const mergedConfig = (env, argv) => (
  merge(WebpackConfigTerra(env, argv), coreConfig())
);

module.exports = mergedConfig;
