/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import Home from 'terra-site/src/app/components/Home';

import TerraFrameworkReadMe from 'terra-framework/README.md';
import TerraClinicalReadMe from 'terra-clinical/README.md';
import TerraCoreReadMe from 'terra-core/README.md';

const TerraFrameworkSiteHome = () => <Home readMeContent={TerraFrameworkReadMe} />;
const TerraClinicalSiteHome = () => <Home readMeContent={TerraClinicalReadMe} />;
const TerraCoreSiteHome = () => <Home readMeContent={TerraCoreReadMe} />;


export {
  TerraFrameworkSiteHome,
  TerraClinicalSiteHome,
  TerraCoreSiteHome,
};
