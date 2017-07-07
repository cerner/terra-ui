/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-modal-manager/docs/README.md';
import { version } from 'terra-modal-manager/package.json';
import ModalManagerProps from 'terra-modal-manager/docs/props-table/ModalManager.md';

import ModalManagerDemo from 'terra-site/lib/examples/modal-manager/ModalManagerDemo';

// Example Files

const ModalManagerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={ModalManagerProps} />
    <br />
    <h2>Demo</h2>
    <div style={{ height: '300px' }}>
      <ModalManagerDemo />
    </div>
  </div>
);

export default ModalManagerExamples;
