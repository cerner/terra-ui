import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-form/docs/Fieldset.md';
import { version } from 'terra-form/package.json';
import Markdown from 'terra-markdown';
import FieldsetProps from 'terra-form/docs/props-table/Fieldset.md';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import FieldsetExamples from 'terra-site/lib/examples/form/examples/Fieldset';

const FormFieldsetExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props" src={FieldsetProps} />
    <FieldsetExamples />
  </div>
);

export default FormFieldsetExamples;
