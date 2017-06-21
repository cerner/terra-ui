/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-action-header/docs/README.md';
import { version } from 'terra-clinical-action-header/package.json';

// Example Files
import ActionHeaderBackNextPreviousClose from 'terra-clinical-site/lib/examples/action-header/ActionHeader-BackNextPreviousClose';
import ActionHeaderExpandClose from 'terra-clinical-site/lib/examples/action-header/ActionHeader-MaximizeClose';
import ActionHeaderMinimizeCustomClose from 'terra-clinical-site/lib/examples/action-header/ActionHeader-MinimizeCustomClose';

const HeaderExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Action Header</h2>
    <h2>Back, Previous-Next, Close</h2>
    <ActionHeaderBackNextPreviousClose />
    <h2>Maximize, Close</h2>
    <ActionHeaderExpandClose />
    <h2>Minimize, Custom Content, Close </h2>
    <ActionHeaderMinimizeCustomClose />
  </div>
);

export default HeaderExamples;
