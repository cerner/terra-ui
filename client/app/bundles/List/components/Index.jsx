import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-list/docs/README.md';
import { version } from 'terra-list/package.json';
import Markdown from 'terra-markdown';
import ListProps from 'terra-list/docs/props-table/List.md';
import SingleSelectListProps from 'terra-list/docs/props-table/SingleSelectList.md';
import MultiSelectListProps from 'terra-list/docs/props-table/MultiSelectList.md';
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
    <Markdown id="props-table-list" src={ListProps} />
    <Markdown id="props-table-single-select-list" src={SingleSelectListProps} />
    <Markdown id="props-table-multi-select-list" src={MultiSelectListProps} />
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
