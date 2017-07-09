import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-image/docs/README.md';
import { version } from 'terra-image/package.json';
import Markdown from 'terra-markdown';
import ImageProps from 'terra-image/docs/props-table/Image.md';
/* eslint-enable import/no-extraneous-dependencies */


// Example Files
import ImageDefault from 'terra-site/lib/examples/image/ImageDefault';

const ImageExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={ImageProps} />
    <ImageDefault />
  </div>
);

export default ImageExamples;
