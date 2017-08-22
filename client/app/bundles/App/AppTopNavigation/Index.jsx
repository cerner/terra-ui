/* eslint-disable no-script-url */
import React from 'react';
import classNames from 'classnames/bind';
/* eslint-disable import/no-extraneous-dependencies */
import IconHouse from 'terra-icon/lib/icon/IconHouse';
/* eslint-enable import/no-extraneous-dependencies */
import { Link } from 'react-router';
import styles from './Index.scss';

const cx = classNames.bind(styles);

class AppTopNavigation extends React.Component {
  constructor() {
    super();

    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const classes = cx([styles.topnav, { responsive: this.state.isOpen }]);
    return (
      <nav className={classes}>
        <Link to="/home"><IconHouse /> Home</Link>
        <Link to="/getting-started">Getting Started</Link>
        <Link to="/components">Components</Link>
        <a href="https://github.com/cerner/terra-core">GitHub</a>
        <a role="button" tabIndex={0} className={styles['topnav-icon']} onClick={this.toggle}>&#9776;</a>
      </nav>
    );
  }
}

export default AppTopNavigation;
