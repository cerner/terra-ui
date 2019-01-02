const path = require('path');
const navConfig = require('./navigation.config');

const terraFrameworkPath = path.join(process.cwd(), 'node_modules', 'terra-framework');
const terraClinicalPath = path.join(process.cwd(), 'node_modules', 'terra-clinical');
const terraCorePath = path.join(process.cwd(), 'node_modules', 'terra-core');

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
        root: terraFrameworkPath,
        dist: 'lib',
        entryPoint: 'terra-dev-site',
      },
      {
        root: terraClinicalPath,
        dist: 'lib',
        entryPoint: 'terra-dev-site',
      },
      {
        root: terraCorePath,
        dist: 'lib',
        entryPoint: 'terra-dev-site',
      },
    ],
  },

  monoRepo: {
    packages: [
      path.join(terraFrameworkPath, 'packages'),
      path.join(terraClinicalPath, 'packages'),
      path.join(terraCorePath, 'packages'),
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
