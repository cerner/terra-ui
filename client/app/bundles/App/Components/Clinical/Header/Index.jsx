/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-header/docs/README.md';
import { version } from 'terra-clinical-header/package.json';
import HeaderProps from 'terra-clinical-header/docs/props-table/Header.md';

// Example Files
import TitleHeader from 'terra-clinical-site/lib/examples/header/TitleHeader';
import ContentHeader from 'terra-clinical-site/lib/examples/header/ContentHeader';
import HeaderLongText from 'terra-clinical-site/lib/examples/header/HeaderLongText';
import HeaderLongTextWithContent from 'terra-clinical-site/lib/examples/header/HeaderLongTextWithContent';

const HeaderExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={HeaderProps} />
    <h2> Header With Title Only </h2>
    <TitleHeader />
    <br />
    <h2> Header With Content </h2>
    <ContentHeader />
    <br />
    <h2> Header With Long Title </h2>
    <HeaderLongText />
    <br />
    <h2> Header With Long Title And Content </h2>
    <HeaderLongTextWithContent />
  </div>
);

export default HeaderExamples;
