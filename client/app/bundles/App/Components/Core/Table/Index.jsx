import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-table/docs/README.md';
import { version } from 'terra-table/package.json';
import Markdown from 'terra-markdown';
import TableProps from 'terra-table/docs/props-table/Table.md';
/* eslint-enable import/no-extraneous-dependencies */


import NoStripedTable from 'terra-site/lib/examples/table/NoStripedTable';
import NoPaddingTable from 'terra-site/lib/examples/table/NoPaddingTable';
import StripedTable from 'terra-site/lib/examples/table/StripedTable';
import TableWithHighlightedRows from 'terra-site/lib/examples/table/TableWithHighlightedRows';
import SingleRowSelectableTable from 'terra-site/lib/examples/table/SingleRowSelectableTable';
import TableWithNonSelectableRow from 'terra-site/lib/examples/table/TableWithNonSelectableRow';
import TableWithSortingIndicator from 'terra-site/lib/examples/table/TableWithSortingIndicator';
import TableWithLongContent from 'terra-site/lib/examples/table/TableWithLongContent';
import TableWithCustomCells from 'terra-site/lib/examples/table/TableWithCustomCells';
import TableWithSubheaders from 'terra-site/lib/examples/table/TableWithSubheaders';

const TableExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={TableProps} />
    <h2>Table</h2>
    <h2>Table Header</h2>
    <h2>Table Header Cell</h2>
    <h2>Table Subheader</h2>
    <h2>Table Rows</h2>
    <h2>Single Selectable Table Row</h2>
    <h2>Table Row</h2>
    <h2>Table Cell</h2>
    <br />
    <h1>Examples </h1>
    <h2>Table without zebra stripes</h2>
    <NoStripedTable />
    <br />
    <h2>Table with zebra stripes</h2>
    <StripedTable />
    <br />
    <h2>Table without padding</h2>
    <NoPaddingTable />
    <br />
    <h2>Table with some rows selected. Table will not select or deselect any row</h2>
    <TableWithHighlightedRows />
    <br />
    <h2>Selectable table. Only one row can be selected</h2>
    <SingleRowSelectableTable />
    <br />
    <h2>Selectable table with second row as non selectable</h2>
    <TableWithNonSelectableRow />
    <br />
    <h2>Table with sorting indicator</h2>
    <TableWithSortingIndicator />
    <br />
    <h2>Table with long content</h2>
    <TableWithLongContent />
    <br />
    <h2>Table with custom cells</h2>
    <TableWithCustomCells />
    <br />
    <h2>Table with subheaders</h2>
    <TableWithSubheaders />
  </div>
);

export default TableExamples;
