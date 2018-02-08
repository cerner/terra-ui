/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import List from 'terra-list';
import Heading from 'terra-heading';
// import themingVariables from '../../themeable-variables.json';
/* eslint-enable import/no-extraneous-dependencies */

import styles from './Index.scss';

const scrollToComponent = (id) => {
  document.querySelector(id).scrollIntoView();
};

const GettingStartedPage = () => (
  <div style={{ height: '100%', overflow: 'auto' }}>
    <List className={styles['vertical-menu']}>
      <List.Item content={<Heading level={1} size="large">Getting Started</Heading>} />
      <List.Item content={<NavLink to="/site/getting-started#what-is-terra-" className={styles['menu-link']} onClick={() => { scrollToComponent('#what-is-terra-'); }} >What is Terra?</NavLink>} />
      <List.Item content={<NavLink to="/site/getting-started#features" className={styles['menu-link']} onClick={() => { scrollToComponent('#features'); }} >Features</NavLink>} />
      <List.Item content={<NavLink to="/site/getting-started#installing-components" className={styles['menu-link']} onClick={() => { scrollToComponent('#installing-components'); }} >Installing Components</NavLink>} />
      <List.Item content={<NavLink to="/site/getting-started#dependencies" className={styles['menu-link']} onClick={() => { scrollToComponent('#dependencies'); }} >Dependencies</NavLink>} />
      <List.Item content={<NavLink to="/site/getting-started#basic-usage" className={styles['menu-link']} onClick={() => { scrollToComponent('#basic-usage'); }} >Basic Usage</NavLink>} />
      <List.Item content={<NavLink to="/site/getting-started#configuring-webpack" className={styles['menu-link']} onClick={() => { scrollToComponent('#configuring-webpack'); }} >Configuring Webpack</NavLink>} />
      <List.Item content={<NavLink to="/site/getting-started#internationalization-i18n-and-localization-l10n-" className={styles['menu-link']} onClick={() => { scrollToComponent('#internationalization-i18n-and-localization-l10n-'); }} >I18n</NavLink>} />
      <List.Item content={<NavLink to="/site/getting-started#theming" className={styles['menu-link']} onClick={() => { scrollToComponent('#theming'); }} >Theming</NavLink>} />
    </List>
  </div>
);

export default GettingStartedPage;
