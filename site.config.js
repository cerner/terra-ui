/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import 'terra-core/packages/terra-site/src/cerner-mock-theme.scss';

import navConfig from './navigation.config';
import componentConfig from './componentConfig';

const siteConfig = {
  /* The navigation configuration.  */
  navConfig,

  /* The component configuration. */
  componentConfig,

  /* The logo to display as the placeholder. */
  placeholderSrc: 'https://github.com/cerner/terra-core/raw/master/terra.png',

  appConfig: {
    /* The logo for the site header. */
    logoSrc: 'https://github.com/cerner/terra-core/raw/master/terra.png',

    /* The title for the site header. */
    title: 'Terra UI',

    /* The themes to toggle in the site. */
    themes: {
      'Default Theme': '',
      'Mock Theme': 'cerner-mock-theme',
    },
  },
};

export default siteConfig;
