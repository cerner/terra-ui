import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import Markdown from 'terra-markdown';
import Grid from 'terra-grid';
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


const GettingStartedPage = () => (
  <div>
    <Grid>
      <Grid.Row>
        <Grid.Column col={1} />
        <Grid.Column col={10} >
          <Markdown id="what-is-terra" src={WhatIsTerra} />
          <Markdown id="features" src={Features} />
          <Markdown id="installing-components" src={InstallingComponents} />
          <Markdown id="dependencies" src={Dependencies} />
          <Markdown id="basic-usage" src={BasicUsage} />
          <Markdown id="configuring-webpack" src={ConfiguringWebpack} />
          <Markdown id="i18n" src={I18n} />
          <Markdown id="directionality" src={Directionality} />
          <Markdown id="theming" src={Theming} />
        </Grid.Column>
        <Grid.Column col={1} />
      </Grid.Row>
    </Grid>
  </div>
);

export default GettingStartedPage;

