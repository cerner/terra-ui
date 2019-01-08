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

  themeImports: [
    'terra-legacy-theme/lib/scoped-theme',
  ],

  appConfig: {
    /* The title for the site header. */
    title: 'Terra UI',

    /* The themes to toggle in the site. */
    themes: {
      'Default Theme': '',
      'Legacy Theme': 'terra-legacy-theme',
    },

    extensions: {
      gitHubUrl: 'https://github.com/cerner?utf8=%E2%9C%93&q=terra&type=&language=',
    },
  },

  filterSideMenu: true,

  includeTestEvidence: false,
};

module.exports = siteConfig;
