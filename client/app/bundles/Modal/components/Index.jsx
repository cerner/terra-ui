import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-modal/docs/README.md';
import { version } from 'terra-modal/package.json';
import Markdown from 'terra-markdown';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import ModalIsOpened from 'terra-site/lib/examples/modal/ModalIsOpened';
import ModalCloseOnOutsideClick from 'terra-site/lib/examples/modal/ModalCloseOnOutsideClick';
import ModalIsFullscreen from 'terra-site/lib/examples/modal/ModalIsFullscreen';

const ModalExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="isOpened">Default Modal</h2>
    <ModalIsOpened />
    <h2 id="closeOnOutsideClick">Disable closing the modal when clicking on the overlay</h2>
    <ModalCloseOnOutsideClick />
    <h2 id="isFullscreen">Fullscreen Modal</h2>
    <ModalIsFullscreen />
  </div>
);

export default ModalExamples;
