/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-application/docs/README.md';
import { version } from 'terra-clinical-application/package.json';

const ApplicationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
  </div>
);

export default ApplicationExamples;
