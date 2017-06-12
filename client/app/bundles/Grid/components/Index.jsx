import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-grid/docs/README.md';
import { version } from 'terra-grid/package.json';
import Markdown from 'terra-markdown';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import GridDefault from 'terra-site/lib/examples/grid/GridDefault';
import GridResponsive from 'terra-site/lib/examples/grid/GridResponsive';
import GridNested from 'terra-site/lib/examples/grid/GridNested';

const GridExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Grid</h2>
    <h2>Grid Row</h2>
    <h2>Grid Column</h2>
    <h2 id="default">Default Grid</h2>
    <GridDefault />
    <h2 id="responsive">Responsive Grid</h2>
    <GridResponsive />
    <h2 id="nested">Nested Grid</h2>
    <GridNested />
  </div>
);

export default GridExamples;
