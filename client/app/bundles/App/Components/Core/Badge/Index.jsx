import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-badge/docs/README.md';
import { version } from 'terra-badge/package.json';
import Markdown from 'terra-markdown';
import BadgeProps from 'terra-badge/docs/props-table/Badge.md';
/* eslint-enable import/no-extraneous-dependencies */


// Example Files
import BadgeIntent from 'terra-site/lib/examples/badge/BadgeIntent';
import BadgeSize from 'terra-site/lib/examples/badge/BadgeSize';
import BadgeIcon from 'terra-site/lib/examples/badge/BadgeIcon';

const BadgeIndex = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={BadgeProps} />
    <h2 id="default">Intent</h2>
    <BadgeIntent />
    <h2 id="size">Size</h2>
    <BadgeSize />
    <h2 id="icon">Icon</h2>
    <BadgeIcon />
  </div>
);

export default BadgeIndex;
