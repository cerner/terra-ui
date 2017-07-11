import React from 'react';
import DocSiteHero from './DocSiteHero';
import DocSiteAboutTerra from './DocSiteAboutTerra';
import DocSiteAdditionalPages from './DocSiteAdditionalPages';
import DocSiteAboutTerra2 from './DocSiteAboutTerra2';
import DocSiteTech from './DocSiteTech';

const Home = () => (
  <div>
    <DocSiteHero />
    <DocSiteAboutTerra />
    <DocSiteAdditionalPages />
    <DocSiteAboutTerra2 />
    <DocSiteTech />
  </div>
    );

export default Home;
