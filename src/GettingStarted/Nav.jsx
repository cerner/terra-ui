/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import List from 'terra-list';
import Heading from 'terra-heading';

import styles from './Index.scss';

const scrollToComponent = (id) => {
  document.querySelector(id).scrollIntoView();
};

const gettingStartedNav = {
  'what-is-terra-': 'What is Terra?',
  features: 'Features',
  'installing-components': 'Installing Components',
  dependencies: 'Dependencies',
  'basic-usage': 'Basic Usage',
  'configuring-webpack': 'Configuring Webpack',
  'internationalization-i18n-and-localization-l10n-': 'I18n',
  theming: 'Theming',
};

const GettingStartedPage = () => (
  <div style={{ height: '100%' }}>
    <Heading level={1} size="large">
      Getting Started
    </Heading>
    <List className={styles['vertical-menu']}>
      {Object.keys(gettingStartedNav).map(link => (
        <List.Item
          key={link}
          content={
            <NavLink
              to={`/site/getting-started#${link}`}
              className={styles['menu-link']}
              onClick={() => { scrollToComponent(`#${link}`); }}
              activeStyle={{
                fontWeight: 'bold',
              }}
            >
              {gettingStartedNav[link]}
            </NavLink>
          }
        />
    ))}
    </List>
  </div>
);

export default GettingStartedPage;
