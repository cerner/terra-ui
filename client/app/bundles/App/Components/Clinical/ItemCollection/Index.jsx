/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ItemCollectionProps from 'terra-clinical-item-collection/docs/props-table/ItemCollection.md';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-item-collection/docs/README.md';
import { version } from 'terra-clinical-item-collection/package.json';

// Example Files
import ItemCollectionExample from 'terra-clinical-site/lib/examples/item-collection/ItemCollectionExample';

const ItemCollectionExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props" src={ItemCollectionProps} />
    <h1>Item Collection Example</h1>
    <ItemCollectionExample />
  </div>
);

export default ItemCollectionExamples;
