/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BrandFooter from 'terra-brand-footer';
/* eslint-enable import/no-extraneous-dependencies */
import cernerLogo from './cerner_logo.png';
import styles from './Index.scss';

const AppFooter = () => (
  <BrandFooter
    className={styles.footer}
    contentLeft={
      <a href="https://www.cerner.com/"> 
        <img alt="Cerner Corporation" src={cernerLogo} />
      </a>
    }
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
        headerText: 'Support',
        links: [
          { text: 'Log an issue', href: 'https://github.com/cerner/terra-core/issues/new' },
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
