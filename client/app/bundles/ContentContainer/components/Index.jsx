import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-content-container/docs/README.md';
import { version } from 'terra-content-container/package.json';
import Markdown from 'terra-markdown';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import ContentContainerStandard from 'terra-site/lib/examples/content-container/ContentContainerStandard';
import ContentContainerFill from 'terra-site/lib/examples/content-container/ContentContainerFill';

const ContentContainerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="standard">Standard Container</h2>
    <ContentContainerStandard />
    <h2 id="outline-variant">Fill Container</h2>
    <ContentContainerFill />
  </div>
);

export default ContentContainerExamples;
