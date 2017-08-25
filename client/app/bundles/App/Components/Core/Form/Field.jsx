import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-form/docs/Field.md';
import { version } from 'terra-form/package.json';
import Markdown from 'terra-markdown';
import FieldProps from 'terra-form/docs/props-table/Field.md';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import FieldExamples from 'terra-site/lib/examples/form/examples/Field';

const FormFieldExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props" src={FieldProps} />
    <FieldExamples />
  </div>
);

export default FormFieldExamples;
