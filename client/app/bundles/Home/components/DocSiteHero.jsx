import React from 'react';
import Particles from 'react-particles-js';
/* eslint-disable import/no-extraneous-dependencies */
import Button from 'terra-button';
/* eslint-enable import/no-extraneous-dependencies */
import DocSiteHeroConfig from './DocSiteHeroConfig';
import './DocSiteHero.scss';

class DocSiteHero extends React.Component {

  render() {
    return (
      <section >
        <div className="doc-site-hero">
          <Particles height={'80vh'} params={DocSiteHeroConfig} />
          <div className="doc-site-hero-content">
            <h1 className="doc-site-hero-title">{'Terra'}</h1>
            <Button className="doc-site-hero-button" variant="primary" size="large" text="Get Started" href="/getting-started" />
          </div>
        </div>
      </section>
    );
  }
}

export default DocSiteHero;
