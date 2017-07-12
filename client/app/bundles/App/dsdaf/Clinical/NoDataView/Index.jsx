/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-no-data-view/docs/README.md';
import { version } from 'terra-clinical-no-data-view/package.json';
import NoDataViewProps from 'terra-clinical-no-data-view/docs/props-table/NoDataView.md';

// Example Files
import NoDataViewStandard from 'terra-clinical-site/lib/examples/no-data-view/NoDataViewStandard';
import NoDataViewContent from 'terra-clinical-site/lib/examples/no-data-view/NoDataViewContent';
import NoDataViewHiddenGlyph from 'terra-clinical-site/lib/examples/no-data-view/NoDataViewHiddenGlyph';

const NoDataViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={NoDataViewProps} />
    <h2 id="noDataView">No Data View</h2>
    <NoDataViewStandard />
    <h2 id="noDataView-hidden-glyph">No Data View With Glyph Hidden</h2>
    <NoDataViewHiddenGlyph />
    <h2 id="noDataView-content">No Data View With Content</h2>
    <NoDataViewContent />
  </div>
);

export default NoDataViewExamples;
