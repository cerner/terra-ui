import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-form/docs/Textarea.md';
import { version } from 'terra-form/package.json';
import Markdown from 'terra-markdown';
import TextareaProps from 'terra-form/docs/props-table/Textarea.md';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import TextareaExamples from 'terra-site/lib/examples/form/examples/Textarea';

const FormTextareaExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props" src={TextareaProps} />
    <TextareaExamples />
  </div>
);

export default FormTextareaExamples;
