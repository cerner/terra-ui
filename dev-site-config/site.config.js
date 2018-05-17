const navConfig = require('./navigation.config');
const path = require('path');

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
      {
        root: path.join(process.cwd(), 'node_modules', 'terra-framework'),
        dist: 'lib',
        entryPoint: 'terra-dev-site',
      },
      {
        root: path.join(process.cwd(), 'node_modules', 'terra-clinical'),
        dist: 'lib',
        entryPoint: 'terra-dev-site',
      },
      {
        root: path.join(process.cwd(), 'node_modules', 'terra-core'),
        dist: 'lib',
        entryPoint: 'terra-dev-site',
      },
    ],
  },

  hotReloading: {
    enabled: false,
  },

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
};

module.exports = siteConfig;
