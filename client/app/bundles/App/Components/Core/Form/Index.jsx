/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/README.md';
import { version } from 'terra-form/package.json';

// Example Files
import ControlledInput from 'terra-site/lib/examples/form/examples/ControlledInput';

const FormsExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Controlled Form Example</h2>
    <br />
    <ControlledInput />
  </div>
);

export default FormsExamples;
