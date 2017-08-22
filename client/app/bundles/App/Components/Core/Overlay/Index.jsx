import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-overlay/docs/README.md';
import { version } from 'terra-overlay/package.json';
import Markdown from 'terra-markdown';
import ImageProps from 'terra-overlay/docs/props-table/Overlay.md';
/* eslint-enable import/no-extraneous-dependencies */


// Example Files
import OverlayExample from 'terra-site/lib/examples/overlay/OverlayExample';
import LoadingOverlayExample from 'terra-site/lib/examples/overlay/LoadingOverlayExample';

const OverlayExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={ImageProps} />
    <h2>Overlay</h2>
    <OverlayExample />
    <h2>Loading Overlay</h2>
    <LoadingOverlayExample />
  </div>
);

export default OverlayExamples;
