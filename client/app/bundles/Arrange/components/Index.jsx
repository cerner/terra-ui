import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-arrange/docs/README.md';
import { version } from 'terra-arrange/package.json';
import Markdown from 'terra-markdown';
/* eslint-enable import/no-extraneous-dependencies */

import { icon, image, simpleText } from 'terra-site/lib/examples/arrange/examplesetup';
import ArrangeAlignment from 'terra-site/lib/examples/arrange/ArrangeAlignment';


const ArrangeIndex = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="align-all">Align All Containers</h2>
    <ArrangeAlignment alignment="all" fitStart={image} fill={simpleText} />
    <br />
    <ArrangeAlignment alignment="all" fill={simpleText} fitEnd={icon} />
    <br />
    <ArrangeAlignment alignment="all" fitStart={image} fill={simpleText} fitEnd={icon} />
    <h2 id="align-individual">Align Individual Containers</h2>
    <ArrangeAlignment alignment="individual" fitStart={image} fill={simpleText} />
    <br />
    <ArrangeAlignment alignment="individual" fill={simpleText} fitEnd={icon} />
    <br />
    <ArrangeAlignment alignment="individual" fitStart={image} fill={simpleText} fitEnd={icon} />
  </div>
);

export default ArrangeIndex;
