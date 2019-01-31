import React from 'react';
import Particles from 'react-particles-js';
import HomeHeroConfig from './HomeHeroConfig';
import imgTerra from './assets/terra-ui.png';
import styles from './HomeHero.scss';

const particleStyle = { background: `url(${imgTerra}) no-repeat 50% calc(50% - 70px) / 250px 250px #223` };

const HomeHero = () => (
  <section>
    <div className={styles.hero}>
      <Particles style={particleStyle} params={HomeHeroConfig} />
      <div className={styles['hero-content']}>
        <h1 className={styles['hero-title']}>Terra UI</h1>
        <a className={styles['hero-button']} href="https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/what-is-terra">Get Started</a>
      </div>
    </div>
  </section>
);

export default HomeHero;
