import navigationConfig from './navigation.config';
import componentConfig from './generatedComponentConfig';

// console.log("CONFIG", componentConfig)

const siteConfig = {
  /* The navigation configuration.  */
  navConfig: navigationConfig,

  /* The component configuration path. */
  componentConfigPath: componentConfig,

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
