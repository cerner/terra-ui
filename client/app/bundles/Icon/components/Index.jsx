import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-icon/docs/README.md';
import { version } from 'terra-icon/package.json';
import Markdown from 'terra-markdown';
/* eslint-enable import/no-extraneous-dependencies */


// Example Files
import IconStatic from 'terra-site/lib/examples/icon/IconStatic';
import IconThemeable from 'terra-site/lib/examples/icon/IconThemeable';

const IconExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="static_icons">Static Icons</h2>
    <IconStatic />
    <br />
    <h2 id="themeable_icons">Themeable Icons</h2>
    <IconThemeable />
  </div>
);

export default IconExamples;
