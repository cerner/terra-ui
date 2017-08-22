import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-form/docs/Input.md';
import { version } from 'terra-form/package.json';
import Markdown from 'terra-markdown';
import InputProps from 'terra-form/docs/props-table/Input.md';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import InputExamples from 'terra-site/lib/examples/form/examples/Input';

const FormInputExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props" src={InputProps} />
    <InputExamples />
  </div>
);

export default FormInputExamples;
