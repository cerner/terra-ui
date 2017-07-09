import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-grid/docs/README.md';
import { version } from 'terra-grid/package.json';
import Markdown from 'terra-markdown';
import GridProps from 'terra-grid/docs/props-table/Grid.md';
import GridColumnProps from 'terra-grid/docs/props-table/GridColumn.md';
import GridRowProps from 'terra-grid/docs/props-table/GridRow.md';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import GridDefault from 'terra-site/lib/examples/grid/GridDefault';
import GridResponsive from 'terra-site/lib/examples/grid/GridResponsive';
import GridNested from 'terra-site/lib/examples/grid/GridNested';

const GridExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table-grid" src={GridProps} />
    <Markdown id="props-table-grid-column" src={GridColumnProps} />
    <Markdown id="props-table-grid-row" src={GridRowProps} />
    <h2 id="default">Default Grid</h2>
    <GridDefault />
    <h2 id="responsive">Responsive Grid</h2>
    <GridResponsive />
    <h2 id="nested">Nested Grid</h2>
    <GridNested />
  </div>
);

export default GridExamples;
