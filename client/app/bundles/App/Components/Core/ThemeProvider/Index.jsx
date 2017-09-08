/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ThemeProviderProps from 'terra-theme-provider/docs/props-table/ThemeProvider.md';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-theme-provider/docs/README.md';
import { version } from 'terra-theme-provider/package.json';

// Example Files
import DefaultThemeProvider from 'terra-site/lib/examples/theme-provider/DefaultThemeProvider';

const ThemeProviderExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown src={ThemeProviderProps} />
    <DefaultThemeProvider />
  </div>
);

export default ThemeProviderExamples;
