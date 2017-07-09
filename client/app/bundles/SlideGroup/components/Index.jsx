/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-slide-group/docs/README.md';
import { version } from 'terra-slide-group/package.json';
import SlideGroupProps from 'terra-slide-group/docs/props-table/SlideGroup.md';

// Example Files
import SlideGroupDemo from 'terra-site/lib/examples/slide-group/SlideGroupDemo';

const SlideGroupExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={SlideGroupProps} />
    <br />
    <SlideGroupDemo />
    <br />
    <h2 id="slideGroup-animated">isAnimated</h2>
    <br />
    <SlideGroupDemo isAnimated />
  </div>
);

export default SlideGroupExamples;
