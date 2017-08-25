/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-item-display/docs/README.md';
import { version } from 'terra-clinical-item-display/package.json';
import ItemDisplayProps from 'terra-clinical-item-display/docs/props-table/ItemDisplay.md';
import ItemDisplayCommentProps from 'terra-clinical-item-display/docs/props-table/ItemComment.md';

// Example Files
import TextItemDisplay from 'terra-clinical-site/lib/examples/item-display/TextItemDisplay';
import IconItemDisplay from 'terra-clinical-site/lib/examples/item-display/IconItemDisplay';
import TextIconItemDisplay from 'terra-clinical-site/lib/examples/item-display/TextIconItemDisplay';
import DefaultComment from 'terra-clinical-site/lib/examples/item-display/DefaultComment';

const ItemDisplayExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table1" src={ItemDisplayProps} />
    <Markdown id="props-table2" src={ItemDisplayCommentProps} />
    <h2 id="text">Text Display</h2>
    <TextItemDisplay />
    <br />
    <h2 id="icon-display">Icon Display</h2>
    <IconItemDisplay />
    <br />
    <h2 id="icon-text-display">Icon and Text Display</h2>
    <TextIconItemDisplay />
    <br />
    <h2 id="standard">Comment Display</h2>
    <DefaultComment />
  </div>
);

export default ItemDisplayExamples;
