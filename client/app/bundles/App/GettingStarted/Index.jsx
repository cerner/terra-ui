import React from 'react';
import { Link } from 'react-router';
/* eslint-disable import/no-extraneous-dependencies */
import Markdown from 'terra-markdown';
import Grid from 'terra-grid';
import List from 'terra-list';
import Heading from 'terra-heading';
/* eslint-enable import/no-extraneous-dependencies */
import WhatIsTerra from './WhatIsTerra.md';
import Features from './Features.md';
import InstallingComponents from './InstallingComponents.md';
import Dependencies from './Dependencies.md';
import BasicUsage from './BasicUsage.md';
import ConfiguringWebpack from './ConfiguringWebpack.md';
import I18n from './I18n.md';
import Directionality from './Directionality.md';
import Theming from './Theming.md';
import styles from './Index.scss';


const scrollToComponent = (id) => {
  document.querySelector(id).scrollIntoView();
};

const GettingStartedPage = () => (
  <div>
    <Grid>
      <Grid.Row>
        <Grid.Column small={2} className={styles['components-vertical-nav']}>
          <List className={styles['vertical-menu']}>
            <List.Item content={<Heading level={2}>Getting Started</Heading>} />
            <List.Item content={<Link to="/getting-started#what-is-terra-" onClick={() => { scrollToComponent('#what-is-terra-'); }} >What is Terra?</Link>} />
            <List.Item content={<Link to="/getting-started#features" onClick={() => { scrollToComponent('#features'); }} >Features</Link>} />
            <List.Item content={<Link to="/getting-started#installing-components" onClick={() => { scrollToComponent('#installing-components'); }} >Installing Components</Link>} />
            <List.Item content={<Link to="/getting-started#dependencies" onClick={() => { scrollToComponent('#dependencies'); }} >Dependencies</Link>} />
            <List.Item content={<Link to="/getting-started#basic-usage" onClick={() => { scrollToComponent('#basic-usage'); }} >Basic Usage</Link>} />
            <List.Item content={<Link to="/getting-started#configuring-webpack" onClick={() => { scrollToComponent('#configuring-webpack'); }} >Configuring Webpack</Link>} />
            <List.Item content={<Link to="/getting-started#internationalization-i18n-and-localization-l10n-" onClick={() => { scrollToComponent('#internationalization-i18n-and-localization-l10n-'); }} >I18n</Link>} />
            <List.Item content={<Link to="/getting-started#theming" onClick={() => { scrollToComponent('#theming'); }} >Theming</Link>} />
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
          <Markdown src={Theming} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default GettingStartedPage;

