import React from 'react';
import Particles from 'react-particles-js';
import { Link } from 'react-router';
import HomeHeroConfig from './HomeHeroConfig';
import imgTerra from './assets/terra-ui.png';
import './HomeHero.scss';

const particleStyle= { backgroundImage: `url(${imgTerra})` };

const HomeHero = () => (
  <section >
    <div className="home-hero">
      <Particles style={particleStyle} height={'80vh'} params={HomeHeroConfig} />
      <div className="home-hero-content">
        <h1 className="home-hero-title">{'Terra'}</h1>
        <Link className="home-hero-button" to="/getting-started">Get Started</Link>
      </div>
    </div>
  </section>
    );

export default HomeHero;
