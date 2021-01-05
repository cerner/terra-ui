const path = require('path');
const { merge } = require('webpack-merge');
const {
  TerraDevSite,
} = require('@cerner/terra-dev-site');
const WebpackConfigTerra = require('@cerner/webpack-config-terra');

const packageJson = require('./package.json');

const cwd = process.cwd();

const excludes = [
  '@cerner/terra-application',
];

const additionalSearchDirectories = Object.keys(packageJson.dependencies).reduce((acc, dependency) => {
  if ((dependency.startsWith('terra-') || dependency.startsWith('@cerner/terra-')) && !excludes.includes(dependency)) {
    acc.push(path.join(cwd, 'node_modules', dependency, 'lib', 'terra-dev-site'));
  }
  return acc;
}, []);

const coreConfig = () => ({
  plugins: [
    new TerraDevSite({
      titleConfig: {
        title: 'Terra',
      },
      primaryNavigationItems: [{
        path: '/home',
        label: 'Home',
        contentExtension: 'home',
      }, {
        path: '/about',
        label: 'About',
        contentExtension: 'about',
      }, {
        path: '/application',
        label: 'Application',
        contentExtension: 'app',
      }, {
        path: '/components',
        label: 'Components',
        contentExtension: 'doc',
      }, {
        path: '/dev_tools',
        label: 'Developer Tools',
        contentExtension: 'tool',
      }, {
        path: '/guides',
        label: 'Guides',
        contentExtension: 'guide',
      }],
      distributionFolder: 'src',
      additionalSearchDirectories,
      sideEffectImportFilePaths: [
        'terra-ui/dev-site-config/initializeXFC.js',
        'terra-ui/dev-site-config/IllustrationGrid.scss',
      ],
    }),
  ],
});

const mergedConfig = (env, argv) => (
  merge(WebpackConfigTerra(env, argv), coreConfig())
);

module.exports = mergedConfig;
