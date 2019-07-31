import React from 'react';
import BrandFooter from 'terra-brand-footer';
import cernerLogo from './cerner_logo.png';

const AppFooter = () => (
  <BrandFooter
    contentLeft={(
      <a href="https://www.cerner.com/">
        <img alt="Cerner Corporation" src={cernerLogo} />
      </a>
    )}
    isVertical
    sections={[
      {
        headerText: 'Github',
        links: [
          { text: 'terra-clinical', href: 'https://github.com/cerner/terra-clinical' },
          { text: 'terra-core', href: 'https://github.com/cerner/terra-core/' },
          { text: 'terra-framework', href: 'https://github.com/cerner/terra-framework' },
        ],
      },
      {
        headerText: 'About Us',
        links: [
          { text: 'Cerner', href: 'https://www.cerner.com/' },
          { text: 'Engineering', href: 'http://engineering.cerner.com/' },
        ],
      },
    ]}
  />
);

export default AppFooter;
