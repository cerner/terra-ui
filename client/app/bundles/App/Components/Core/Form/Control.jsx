import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-form/docs/Control.md';
import { version } from 'terra-form/package.json';
import Markdown from 'terra-markdown';
import ControlProps from 'terra-form/docs/props-table/Control.md';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import ControlExamples from 'terra-site/lib/examples/form/examples/Control';

const FormControlExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props" src={ControlProps} />
    <ControlExamples />
  </div>
);

export default FormControlExamples;
