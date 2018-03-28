/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import List from 'terra-list';
import themingVariables from '../../themeable-variables.json';
/* eslint-enable import/no-extraneous-dependencies */
import WhatIsTerra from './WhatIsTerra.md';
import Features from './Features.md';
import InstallingComponents from './InstallingComponents.md';
import Dependencies from './Dependencies.md';
import BasicUsage from './BasicUsage.md';
import ConfiguringWebpack from './ConfiguringWebpack.md';
import Directionality from './Directionality.md';
import Theming from './Theming.md';

// Filter out MockThemeComponent
const themableComponents = Object.keys(themingVariables).filter(x => x !== 'MockThemeComponent');

const GettingStartedPage = () => (
  <div style={{ height: '100%', overflow: 'auto', padding: '15px' }}>
    <br />
    <Markdown src={WhatIsTerra} />
    <Markdown src={Features} />
    <Markdown src={InstallingComponents} />
    <Markdown src={Dependencies} />
    <Markdown src={BasicUsage} />
    <Markdown src={ConfiguringWebpack} />
    <Markdown src={Directionality} />
    <Markdown src={Theming} />
    <List style={{ paddingLeft: '1rem', paddingBottom: '0.5rem' }}>
      {themableComponents.map(component => <List.Item key={component} style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }} content={<span>- {component}</span>} />)}
    </List>
  </div>
);

export default GettingStartedPage;
