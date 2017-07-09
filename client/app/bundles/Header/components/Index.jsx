/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-header/docs/README.md';
import { version } from 'terra-clinical-header/package.json';
import HeaderProps from 'terra-clinical-header/docs/props-table/Header.md';

// Example Files
import TitleHeader from 'terra-clinical-site/lib/examples/header/TitleHeader';
import ContentHeader from 'terra-clinical-site/lib/examples/header/ContentHeader';

const HeaderExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={HeaderProps} />
    <h1> Header With Title Only </h1>
    <TitleHeader />
    <h1> Header With Content </h1>
    <ContentHeader />
  </div>
);

export default HeaderExamples;
