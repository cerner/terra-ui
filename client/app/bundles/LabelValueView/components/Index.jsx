/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-label-value-view/docs/README.md';
import { version } from 'terra-clinical-label-value-view/package.json';

// Example Files
import LabelValueViewText from 'terra-clinical-site/lib/examples/label-value-view/LabelValueViewText';
import LabelValueViewNode from 'terra-clinical-site/lib/examples/label-value-view/LabelValueViewNode';

const LabelValueViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="text_value">Label Value View with a Text Input</h2>
    <LabelValueViewText />
    <br />
    <h2 id="element_value">Label Value View with an Node Input</h2>
    <LabelValueViewNode />
    <br />
  </div>
);

export default LabelValueViewExamples;
