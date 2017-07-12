import React from 'react';
import { Link } from 'react-router';
import styles from './HomeMoreInfo.scss';

const HomeAdditionalPages = () => (
  <div className={styles.section}>
    <div className={styles.card}>
      <div className={styles.container}>
        <Link to="getting-started"><h4>Getting Started</h4></Link>
        <p>More information about how to get started with Terra.</p>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.container}>
        <Link to="components"><h4>Components</h4></Link>
        <p>See all components available in the Terra ecosystem.</p>
      </div>
    </div>
  </div>
  );

export default HomeAdditionalPages;
