import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-form/docs/NumberField.md';
import { version } from 'terra-form/package.json';
import Markdown from 'terra-markdown';
import NumberFieldProps from 'terra-form/docs/props-table/NumberField.md';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import NumberFieldExamples from 'terra-site/lib/examples/form/examples/NumberField';

const FormNumberFieldExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props" src={NumberFieldProps} />
    <NumberFieldExamples />
  </div>
);

export default FormNumberFieldExamples;
