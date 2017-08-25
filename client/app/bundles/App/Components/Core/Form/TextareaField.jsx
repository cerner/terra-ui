import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-form/docs/TextareaField.md';
import { version } from 'terra-form/package.json';
import Markdown from 'terra-markdown';
import TextareaFieldProps from 'terra-form/docs/props-table/TextareaField.md';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import TextareaFieldExamples from 'terra-site/lib/examples/form/examples/TextareaField';

const FormTextareaFieldExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props" src={TextareaFieldProps} />
    <TextareaFieldExamples />
  </div>
);

export default FormTextareaFieldExamples;
