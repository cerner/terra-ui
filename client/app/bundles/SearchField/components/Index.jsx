/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-search-field/docs/README.md';
import { version } from 'terra-search-field/package.json';

// Example Files
import SearchFieldBasic from 'terra-site/lib/examples/search-field/SearchFieldBasic';
import SearchFieldPlaceholder from 'terra-site/lib/examples/search-field/SearchFieldPlaceholder';
import SearchFieldMinimumLength from 'terra-site/lib/examples/search-field/SearchFieldMinimumLength';
import SearchFieldDelayed from 'terra-site/lib/examples/search-field/SearchFieldDelayed';

const SearchFieldExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="searchField">Search Field</h2>
    <SearchFieldBasic />
    <br />
    <h2 id="searchFieldPlaceholder">Search Field with placeholder text</h2>
    <SearchFieldPlaceholder />
    <br />
    <h2 id="searchFieldMinimumLength">Search Field with minimum search text length of 5 characters</h2>
    <SearchFieldMinimumLength />
    <br />
    <h2 id="searchFieldDelayed">Search Field with delay of 2000ms</h2>
    <SearchFieldDelayed />
  </div>
);

export default SearchFieldExamples;
