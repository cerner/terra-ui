import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-list/docs/README.md';
import { version } from 'terra-list/package.json';
import Markdown from 'terra-markdown';
/* eslint-enable import/no-extraneous-dependencies */


// Example Files
import ListDemo from 'terra-site/lib/examples/list/ListDemo';
import SingleSelect from 'terra-site/lib/examples/list/SingleSelect';
import MultiSelect from 'terra-site/lib/examples/list/MultiSelect';
import MultiSelectMaxSelection from 'terra-site/lib/examples/list/MultiSelectMaxSelection';

const ListExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>List Item</h2>
    <h2>List</h2>
    <h2>Single Select List</h2>
    <h2>Multiple Select List</h2>
    <br />
    <h1>Examples</h1>
    <h2 id="list">List</h2>
    <ListDemo />
    <br />
    <h2 id="single">Single Select List</h2>
    <SingleSelect />
    <br />
    <h2 id="multi">Multi Select List</h2>
    <MultiSelect />
    <br />
    <h2 id="multi-max-selection">Multi Select List - Maximum Selection of 2 Items</h2>
    <MultiSelectMaxSelection />
  </div>
);

export default ListExamples;
