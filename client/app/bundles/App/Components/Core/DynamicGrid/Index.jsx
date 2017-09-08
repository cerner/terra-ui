/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import DynamicGridProps from 'terra-dynamic-grid/docs/props-table/DynamicGrid.md';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-dynamic-grid/docs/README.md';
import { version } from 'terra-dynamic-grid/package.json';

// Example Files
import OneColumn from 'terra-site/lib/examples/dynamic-grid/OneColumn';
import TwoColumn from 'terra-site/lib/examples/dynamic-grid/TwoColumn';
import ULayout from 'terra-site/lib/examples/dynamic-grid/ULayout';
import Dashboard from 'terra-site/lib/examples/dynamic-grid/Dashboard';
import ResponsiveGrid from 'terra-site/lib/examples/dynamic-grid/ResponsiveGrid';

const DynamicGridExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown src={DynamicGridProps} />
    <h2>One Column</h2>
    <OneColumn />
    <h2>Two Column</h2>
    <TwoColumn />
    <h2>U Layout</h2>
    <ULayout />
    <h2>Dashboard</h2>
    <Dashboard />
    <h2>Responsive Grid</h2>
    <p>Resize the browser window to see the regions reorder themselves.</p>
    <ResponsiveGrid />
  </div>
);

export default DynamicGridExamples;
