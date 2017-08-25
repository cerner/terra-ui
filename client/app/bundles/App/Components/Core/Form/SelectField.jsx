import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-form/docs/SelectField.md';
import { version } from 'terra-form/package.json';
import Markdown from 'terra-markdown';
import SelectFieldProps from 'terra-form/docs/props-table/SelectField.md';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import SelectFieldExamples from 'terra-site/lib/examples/form/examples/SelectField';

const FormSelectFieldExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props" src={SelectFieldProps} />
    <SelectFieldExamples />
  </div>
);

export default FormSelectFieldExamples;
