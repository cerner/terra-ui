import React from 'react';
import Particles from 'react-tsparticles';
import imgTerra from './assets/terra-ui.png';
import styles from './HomeHero.scss';

const ParticlesConfigConstellations = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    links: {
      enable: true,
      opacity: 0.04,
      distance: 100,
    },
    move: {
      direction: 'right',
      enable: 'true',
      speed: 0.05,
      outMode: 'out',
    },
    size: {
      value: 1.5,
      random: {
        enable: true,
        minimumValue: 1,
      },
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
  background: {
    image: `url(${imgTerra})`,
    position: '50% calc(50% - 70px)',
    size: '250px 250px',
    repeat: 'no-repeat',
    color: '#223',
  },
};

const HomeHero = () => (
  <section>
    <div className={styles.hero}>
      <Particles options={ParticlesConfigConstellations} />
      <div className={styles['hero-content']}>
        <h1 className={styles['hero-title']}>Terra</h1>
        <a className={styles['hero-button']} href="/terra-ui/about/terra-ui/what-is-terra">Get Started</a>
      </div>
    </div>
  </section>
);

export default HomeHero;
