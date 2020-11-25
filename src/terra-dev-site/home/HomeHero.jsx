import React from 'react';
import Particles from 'react-particles-js';
import imgTerra from './assets/terra-ui.png';
import styles from './HomeHero.scss';

const particleStyle = { background: `url(${imgTerra}) no-repeat 50% calc(50% - 70px) / 250px 250px #223` };

const ParticlesConfig = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: { value: '#ddd' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#ccc' },
      polygon: { nb_sides: 3 },
    },
    opacity: {
      value: 1,
      random: true,
    },
    size: {
      value: 2,
      random: true,
    },
    links: {
      enable: false,
      distance: 30,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: .5,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: false, mode: 'repulse' },
      onclick: { enable: true, mode: 'repulse' },
      resize: true,
    },
    modes: {
      repulse: { distance: 200, duration: 5, speed: 1 },
    },
  },
  retina_detect: false,
  pauseOnBlur: true,
};

const HomeHero = () => (
  <section>
    <div className={styles.hero}>
      <Particles style={particleStyle} params={ParticlesConfig} />
      <div className={styles['hero-content']}>
        <h1 className={styles['hero-title']}>Terra</h1>
        <a className={styles['hero-button']} href="/terra-ui/about/terra-ui/what-is-terra">Get Started</a>
      </div>
    </div>
  </section>
);

export default HomeHero;
