/* eslint-disable no-script-url */
import React from 'react';
import classNames from 'classnames/bind';
/* eslint-disable import/no-extraneous-dependencies */
import IconHouse from 'terra-icon/lib/icon/IconHouse';
/* eslint-enable import/no-extraneous-dependencies */
import { Link } from 'react-router';
import styles from './Index.scss';

const cx = classNames.bind(styles);

const expand = () => {
  const x = document.getElementById('myTopnav');
  if (x.className === styles.topnav) {
    x.className = cx(x.className, styles.responsive);
  } else {
    x.className = styles.topnav;
  }
};

const AppTopNavigation = () => (
  <div className={styles.topnav} id="myTopnav">
    <Link to="/home"><IconHouse /> Home</Link>
    <Link to="/getting-started">Getting Started</Link>
    <Link to="/components">Components</Link>
    <a href="https://github.com/cerner/terra-core">GitHub</a>
    <a href="javascript:void(0);" className={styles['topnav-icon']} onClick={expand}>&#9776;</a>
  </div>
  );

export default AppTopNavigation;
