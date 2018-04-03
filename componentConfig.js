import { TerraFrameworkSiteHome, TerraClinicalSiteHome, TerraCoreSiteHome } from './src/RepoHomePages';
import AddingTranslations from './src/guides/i18n/AddingTranslations.guide';
import I18nIndex from 'terra-core/packages/terra-site/src/examples/i18n/Index';

import componentConfig from './generatedComponentConfig';

componentConfig['terra-framework'].component = TerraFrameworkSiteHome;
componentConfig['terra-clinical'].component = TerraClinicalSiteHome;
componentConfig['terra-core'].component = TerraCoreSiteHome;

componentConfig.i18n = {
  name: 'i18n Guide',
  path: '/i18n',
  guides: [
    {
      name: 'Terra i18n',
      path: '/terra-i18n',
      component: I18nIndex,
    },
    {
      name: 'Adding Translations',
      path: '/adding-translations',
      component: AddingTranslations,
    },
  ],
};

export default componentConfig;
