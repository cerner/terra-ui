import React from 'react';
import HomeHero from './HomeHero';
import HomeAboutTerra from './HomeAboutTerra';
import HomeAdditionalPages from './HomeMoreInfo';
import Footer from '../../Footer/Index';
import './IllustrationGrid.scss';

const Home = () => (
  <div style={{ height: '100%', overflow: 'auto' }}>
    <HomeHero />
    <HomeAboutTerra />
    <HomeAdditionalPages />
    <Footer />
  </div>
);

export default Home;
