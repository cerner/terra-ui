/* eslint-disable-next-line import/no-extraneous-dependencies */
const glob = require('glob');
const navConfig = require('./navigation.config');

const patterns = glob.sync('node_modules/terra-*/lib/terra-dev-site').map(file => (
  { root: `node_modules/${file.split('/')[1]}`, dist: 'lib', entryPoint: 'terra-dev-site' }
)).filter(file => file.root !== 'node_modules/terra-dev-site');

const siteConfig = {
  /* The navigation configuration.  */
  navConfig,

  generatePages: {
    searchPatterns: [
      {
        root: process.cwd(),
        dist: 'src',
        entryPoint: 'terra-dev-site',
      },
      ...patterns,
    ],
  },
  hotReloading: false,

  readMeContent: undefined,

  sideEffectImports: [
    './initializeXFC.js',
    './IllustrationGrid.scss',
  ],

  appConfig: {
    /* The title for the site header. */
    title: 'Terra UI',

    extensions: [
      {
        iconPath: 'terra-icon/lib/icon/IconCompose',
        key: 'terra-ui.issue-form',
        text: 'Issue Form',
        componentPath: '../src/terra-dev-site/IssueForm/Index',
        size: 'huge',
      },
    ],
  },

  filterSideMenu: true,

  includeTestEvidence: false,
};

module.exports = siteConfig;
