import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-progress-bar/docs/README.md';
import { version } from 'terra-progress-bar/package.json';
import Markdown from 'terra-markdown';
import ProgressBarProps from 'terra-progress-bar/docs/props-table/ProgressBar.md';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import ProgressBarDefault from 'terra-site/lib/examples/progress-bar/ProgressBarDefault';
import ProgressBarSize from 'terra-site/lib/examples/progress-bar/ProgressBarSize';
import ProgressBarColor from 'terra-site/lib/examples/progress-bar/ProgressBarColor';

const ProgressBarExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={ProgressBarProps} />
    <h2 id="default">Default</h2>
    <ProgressBarDefault />
    <h2 id="size">Size</h2>
    <ProgressBarSize />
    <h2 id="color">Color</h2>
    <ProgressBarColor />
  </div>
);

export default ProgressBarExamples;
