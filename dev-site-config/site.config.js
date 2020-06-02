/* eslint-disable-next-line import/no-extraneous-dependencies */
const glob = require('glob');
const navConfig = require('./navigation.config');

const excludes = [
  'node_modules/terra-doc-template',
  'node_modules/terra-abstract-modal',
  'node_modules/terra-dialog',
  'node_modules/terra-dialog-modal',
  'node_modules/terra-theme-context',
];

const patterns = glob.sync('node_modules/terra-*/lib/terra-dev-site').map(file => (
  { root: `node_modules/${file.split('/')[1]}`, dist: 'lib', entryPoint: 'terra-dev-site' }
)).filter(file => !excludes.includes(file.root));

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
    title: 'Terra',

    themes: {
      'Default Theme': '',
      'Clinical Low Light Theme': 'clinical-lowlight-theme',
      'Orion Fusion Theme': 'orion-fusion-theme',
    },

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
