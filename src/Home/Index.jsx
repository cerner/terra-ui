/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import HomeHero from './HomeHero';
import HomeAboutTerra from './HomeAboutTerra';
import HomeAdditionalPages from './HomeMoreInfo';
import HomeAboutTerra2 from './HomeModular';
import HomeTech from './HomeTech';

const Home = () => (
  <div style={{ height: '100%', overflow: 'auto' }}>
    <HomeHero />
    <HomeAboutTerra />
    <HomeAdditionalPages />
    <HomeAboutTerra2 />
    <HomeTech />
  </div>
);

export default Home;
