import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-form/docs/TextField.md';
import { version } from 'terra-form/package.json';
import Markdown from 'terra-markdown';
import TextFieldProps from 'terra-form/docs/props-table/TextField.md';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import TextFieldExamples from 'terra-site/lib/examples/form/examples/TextField';

const FormTextFieldExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props" src={TextFieldProps} />
    <TextFieldExamples />
  </div>
);

export default FormTextFieldExamples;
