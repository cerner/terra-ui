import navConfig from './navigation.config';
import componentConfig from './generatedComponentConfig';

const siteConfig = {
  /* The navigation configuration.  */
  navConfig,

  /* The component configuration path. */
  componentConfig,

  /* The logo to display as the placeholder. */
  placeholderSrc: 'https://github.com/cerner/terra-core/raw/master/terra.png',

  appConfig: {
    /* The logo for the site header. */
    logoSrc: 'https://github.com/cerner/terra-core/raw/master/terra.png',

    /* The title for the site header. */
    title: 'Terra UI',
  },
};

export default siteConfig;
