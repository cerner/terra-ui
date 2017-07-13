/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-toggle/docs/README.md';
import { version } from 'terra-toggle/package.json';
import ToggleProps from 'terra-toggle/docs/props-table/Toggle.md';

// Example Files
import DefaultToggle from 'terra-site/lib/examples/toggle/DefaultToggle';
import AnimatedToggle from 'terra-site/lib/examples/toggle/AnimatedToggle';

const ToggleExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={ToggleProps} />
    <h2 id="default">Default Toggle</h2>
    <DefaultToggle />
    <h2 id="animated">isAnimated Toggle</h2>
    <AnimatedToggle />
  </div>
);

export default ToggleExamples;
