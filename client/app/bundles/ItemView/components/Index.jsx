/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-item-view/docs/README.md';
import { version } from 'terra-clinical-item-view/package.json';

// Example Files
import ItemViewStandard from 'terra-clinical-site/lib/examples/item-view/ItemViewStandard';
import ItemViewTwoColumn from 'terra-clinical-site/lib/examples/item-view/ItemViewTwoColumn';
import ItemViewTwoColumnStart from 'terra-clinical-site/lib/examples/item-view/ItemViewTwoColumnStart';
import ItemViewComment from 'terra-clinical-site/lib/examples/item-view/ItemViewComment';
import ItemViewAll from 'terra-clinical-site/lib/examples/item-view/ItemViewAll';
import ItemViewAllTopAligned from 'terra-clinical-site/lib/examples/item-view/ItemViewAllTopAligned';

const ItemViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="standard">Standard Displays</h2>
    <ItemViewStandard />
    <h2 id="two-column">Two Column ItemView</h2>
    <ItemViewTwoColumn />
    <h2 id="start-emphasis">Start Emphasis ItemView</h2>
    <ItemViewTwoColumnStart />
    <h2 id="comment">Comment ItemView</h2>
    <ItemViewComment />
    <h2 id="all-elements">All Elements ItemView</h2>
    <ItemViewAll />
    <h2 id="all-elements-top">All Elements ItemView Top Aligned</h2>
    <ItemViewAllTopAligned />
  </div>
);

export default ItemViewExamples;
