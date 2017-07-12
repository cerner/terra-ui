import React from 'react';
import Particles from 'react-particles-js';
/* eslint-disable import/no-extraneous-dependencies */
import Button from 'terra-button';
/* eslint-enable import/no-extraneous-dependencies */
import HomeHeroConfig from './HomeHeroConfig';
import './HomeHero.scss';

const HomeHero = () => (
  <section >
    <div className="home-hero">
      <Particles height={'80vh'} params={HomeHeroConfig} />
      <div className="home-hero-content">
        <h1 className="home-hero-title">{'Terra'}</h1>
        <Button className="home-hero-button" variant="primary" size="large" text="Get Started" href="/getting-started" />
      </div>
    </div>
  </section>
    );

export default HomeHero;
