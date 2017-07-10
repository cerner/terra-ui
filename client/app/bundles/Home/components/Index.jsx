import React from 'react';
import DocSiteNavigation from './DocSiteNavigation';
import DocSiteHero from './DocSiteHero';
import DocSiteAboutTerra from './DocSiteAboutTerra';
import DocSiteAdditionalPages from './DocSiteAdditionalPages';
import DocSiteAboutTerra2 from './DocSiteAboutTerra2';
import DocSiteTech from './DocSiteTech';
import DocSiteFooter from './DocSiteFooter';

class Home extends React.Component {

  render() {
    return (
      <div>
        <DocSiteNavigation />
        <DocSiteHero />
        <DocSiteAboutTerra />
        <DocSiteAdditionalPages />
        <DocSiteAboutTerra2 />
        <DocSiteTech />
        <DocSiteFooter />
      </div>
    );
  }
}

export default Home;
