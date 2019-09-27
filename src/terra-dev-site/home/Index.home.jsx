import React from 'react';
import HomeHero from './HomeHero';
import HomeAboutTerra from './HomeAboutTerra';
import HomeAdditionalPages from './HomeMoreInfo';
import Footer from '../../Footer/Index';
import styles from './Index.scss';

const Home = () => (
  <div className={styles.index}>
    <HomeHero />
    <HomeAboutTerra />
    <HomeAdditionalPages />
    <Footer />
  </div>
);

export default Home;
