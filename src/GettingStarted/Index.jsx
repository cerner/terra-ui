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

// Filter out MockThemeComponent
const themableComponents = [];
// const themableComponents = Object.keys(themingVariables).filter(x => x !== 'MockThemeComponent');


const GettingStartedPage = () => (
  <div style={{ height: '100%', overflow: 'auto', padding: '15px' }}>

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
  </div>
);

export default GettingStartedPage;
