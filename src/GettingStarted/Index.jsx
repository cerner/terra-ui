/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Markdown from 'terra-markdown';
import Grid from 'terra-grid';
import List from 'terra-list';
import Heading from 'terra-heading';
// import themingVariables from '../../themeable-variables.json';
/* eslint-enable import/no-extraneous-dependencies */
import WhatIsTerra from './WhatIsTerra.md';
import Features from './Features.md';
import InstallingComponents from './InstallingComponents.md';
import Dependencies from './Dependencies.md';
import BasicUsage from './BasicUsage.md';
import ConfiguringWebpack from './ConfiguringWebpack.md';
import I18n from './I18n.md';
import Directionality from './Directionality.md';
import ThemingIntro from './ThemingIntro.md';
import Theming from './Theming.md';
import styles from './Index.scss';

// Filter out MockThemeComponent
const themableComponents = [];
// const themableComponents = Object.keys(themingVariables).filter(x => x !== 'MockThemeComponent');

const scrollToComponent = (id) => {
  document.querySelector(id).scrollIntoView();
};

const GettingStartedPage = () => (
  <div>
    <Grid>
      <Grid.Row>
        <Grid.Column small={2} className={styles['components-vertical-nav']}>
          <List className={styles['vertical-menu']}>
            <List.Item content={<Heading level={1} size="large">Getting Started</Heading>} />
            <List.Item content={<NavLink to="/site/getting-started#what-is-terra-" onClick={() => { scrollToComponent('#what-is-terra-'); }} >What is Terra?</NavLink>} />
            <List.Item content={<NavLink to="/site/getting-started#features" onClick={() => { scrollToComponent('#features'); }} >Features</NavLink>} />
            <List.Item content={<NavLink to="/site/getting-started#installing-components" onClick={() => { scrollToComponent('#installing-components'); }} >Installing Components</NavLink>} />
            <List.Item content={<NavLink to="/site/getting-started#dependencies" onClick={() => { scrollToComponent('#dependencies'); }} >Dependencies</NavLink>} />
            <List.Item content={<NavLink to="/site/getting-started#basic-usage" onClick={() => { scrollToComponent('#basic-usage'); }} >Basic Usage</NavLink>} />
            <List.Item content={<NavLink to="/site/getting-started#configuring-webpack" onClick={() => { scrollToComponent('#configuring-webpack'); }} >Configuring Webpack</NavLink>} />
            <List.Item content={<NavLink to="/site/getting-started#internationalization-i18n-and-localization-l10n-" onClick={() => { scrollToComponent('#internationalization-i18n-and-localization-l10n-'); }} >I18n</NavLink>} />
            <List.Item content={<NavLink to="/site/getting-started#theming" onClick={() => { scrollToComponent('#theming'); }} >Theming</NavLink>} />
          </List>
        </Grid.Column>
        <Grid.Column small={10} >
          <br />
          <Markdown src={WhatIsTerra} />
          <Markdown src={Features} />
          <Markdown src={InstallingComponents} />
          <Markdown src={Dependencies} />
          <Markdown src={BasicUsage} />
          <Markdown src={ConfiguringWebpack} />
          <Markdown src={I18n} />
          <Markdown src={Directionality} />
          <Markdown src={ThemingIntro} />
          <List style={{ paddingBottom: '0.5rem' }}>
            {themableComponents.map(component => <List.Item key={component} style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }} content={<span>{component}</span>} />)}
          </List>
          <Markdown src={Theming} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default GettingStartedPage;
