import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import Markdown from 'terra-markdown';
import Heading from 'terra-heading';
/* eslint-enable import/no-extraneous-dependencies */
import WhatIsTerra from '../docs/WhatIsTerra.md';
import Features from '../docs/Features.md';
import InstallingComponents from '../docs/InstallingComponents.md';
import Dependencies from '../docs/Dependencies.md';
import BasicUsage from '../docs/BasicUsage.md';
import ConfiguringWebpack from '../docs/ConfiguringWebpack.md';
import I18n from '../docs/I18n.md';
import Directionality from '../docs/Directionality.md';
import Theming from '../docs/Theming.md';


const GettingStartedPage = () => (
  <div>
    <Heading level={2}>Getting Started with Terra UI</Heading>
    <hr />
    <Markdown id="what-is-terra" src={WhatIsTerra} />
    <Markdown id="features" src={Features} />
    <Markdown id="installing-components" src={InstallingComponents} />
    <Markdown id="dependencies" src={Dependencies} />
    <Markdown id="basic-usage" src={BasicUsage} />
    <Markdown id="configuring-webpack" src={ConfiguringWebpack} />
    <Markdown id="i18n" src={I18n} />
    <Markdown id="directionality" src={Directionality} />
    <Markdown id="theming" src={Theming} />
  </div>
);

export default GettingStartedPage;

