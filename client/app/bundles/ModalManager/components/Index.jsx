/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-modal-manager/docs/README.md';
import { version } from 'terra-clinical-modal-manager/package.json';

import ModalManagerDemo from 'terra-clinical-site/lib/examples/modal-manager/ModalManagerDemo';

// Example Files

const ModalManagerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <br />
    <h2>Demo</h2>
    <div style={{ height: '300px' }}>
      <ModalManagerDemo />
    </div>
  </div>
);

export default ModalManagerExamples;
