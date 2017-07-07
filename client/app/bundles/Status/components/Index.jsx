import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-status/docs/README.md';
import { version } from 'terra-status/package.json';
import Markdown from 'terra-markdown';
import StatusProps from 'terra-status/docs/props-table/Status.md';
/* eslint-enable import/no-extraneous-dependencies */


// Example Files
import StatusDefault from 'terra-site/lib/examples/status/StatusDefault';
import StatusImage from 'terra-site/lib/examples/status/StatusImage';
import StatusIcon from 'terra-site/lib/examples/status/StatusIcon';
import StatusArrange from 'terra-site/lib/examples/status/StatusArrange';

const StatusExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={StatusProps} />
    <h2 id="default">Status with text</h2>
    <StatusDefault />
    <h2 id="image">Status with Image</h2>
    <StatusImage />
    <h2 id="icon">Status with Icon</h2>
    <StatusIcon />
    <h2 id="arrange">Status with Arrange</h2>
    <StatusArrange />
  </div>
);

export default StatusExamples;
