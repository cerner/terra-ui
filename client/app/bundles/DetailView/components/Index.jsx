import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-detail-view/docs/README.md';
import { version } from 'terra-clinical-detail-view/package.json';
import DetailViewProps from 'terra-clinical-detail-view/docs/props-table/DetailView.md';
/* eslint-enable import/no-extraneous-dependencies */


// Example files
import DetailViewDivided from 'terra-clinical-site/lib/examples/detail-view/DetailViewDivided';
import DetailViewNoDivider from 'terra-clinical-site/lib/examples/detail-view/DetailViewNoDivider';

const DetailViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={DetailViewProps} />
    <h2>Detail View</h2>
    <h2 id="Divided">Divided</h2>
    <DetailViewDivided />
    <h2 id="NoDivider">No Divider</h2>
    <DetailViewNoDivider />
  </div>
);

export default DetailViewExamples;
