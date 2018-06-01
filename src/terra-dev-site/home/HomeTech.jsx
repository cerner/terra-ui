/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Heading from 'terra-heading';
/* eslint-enable import/no-extraneous-dependencies */
import imgWebpack from './assets/webpack.svg';
import imgReact from './assets/react.svg';
import imgCssModules from './assets/css-modules.png';
import styles from './HomeTech.scss';

const HomeTech = () => (
  <div className={styles.section}>
    <div className={styles.card}>
      <img width="100%" src={imgCssModules} alt="CSS Modules" />
      <div className={styles.container}>
        <Heading level={3}>CSS Modules</Heading>
        <p>Terra UI uses CSS modules ensuring all class names are scoped locally by default.</p>
      </div>
    </div>
    <div className={styles.card}>
      <img width="100%" src={imgReact} alt="ReactJS" />
      <div className={styles.container}>
        <Heading level={3}>React</Heading>
        <p>All Terra UI components are created using React making composition easy for consuming applications.</p>
      </div>
    </div>
    <div className={styles.card}>
      <img width="100%" src={imgWebpack} alt="Webpack" />
      <div className={styles.container}>
        <Heading level={3}>Webpack</Heading>
        <p>Terra UI uses webpack to bundle both css and js. Import a component in js and it is automatically styled.</p>
      </div>
    </div>
  </div>
);

export default HomeTech;
