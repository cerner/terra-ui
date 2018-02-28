import { TerraFrameworkSiteHome, TerraClinicalSiteHome, TerraCoreSiteHome } from './src/RepoHomePages';

import componentConfig from './generatedComponentConfig';

componentConfig['terra-framework'].component = TerraFrameworkSiteHome;
componentConfig['terra-clinical'].component = TerraClinicalSiteHome;
componentConfig['terra-core'].component = TerraCoreSiteHome;

export default componentConfig;
