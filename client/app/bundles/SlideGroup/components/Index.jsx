/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-slide-group/docs/README.md';
import { version } from 'terra-clinical-slide-group/package.json';

// Example Files
import SlideGroupDemo from 'terra-clinical-site/lib/examples/slide-group/SlideGroupDemo';

const SlideGroupExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="slideGroup">SlideGroup Demo</h2>
    <br />
    <SlideGroupDemo />
    <br />
    <h2 id="slideGroup-animated">isAnimated</h2>
    <br />
    <SlideGroupDemo isAnimated />
  </div>
);

export default SlideGroupExamples;
