/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-error-view/docs/README.md';
import { version } from 'terra-clinical-error-view/package.json';
import ErrorViewProps from 'terra-clinical-error-view/docs/props-table/ErrorView.md';

// Example Files
import ErrorViewStandard from 'terra-clinical-site/lib/examples/error-view/ErrorViewStandard';
import ErrorViewHiddenGlyph from 'terra-clinical-site/lib/examples/error-view/ErrorViewHiddenGlyph';
import ErrorViewHiddenGlyphNoButton from 'terra-clinical-site/lib/examples/error-view/ErrorViewHiddenGlyphNoButton';
import ErrorViewNoName from 'terra-clinical-site/lib/examples/error-view/ErrorViewNoName';
import ErrorViewNoDescription from 'terra-clinical-site/lib/examples/error-view/ErrorViewNoDescription';

const ErrorViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={ErrorViewProps} />
    <h2 id="errorView">Error View</h2>
    <ErrorViewStandard />
    <h2 id="errorView-glyph-hidden">Error View With Glyph Hidden</h2>
    <ErrorViewHiddenGlyph />
    <h2 id="errorView-glyph-hidden-no-button">Error View With Glyph Hidden and No Button</h2>
    <ErrorViewHiddenGlyphNoButton />
    <h2 id="errorView-no-name">Error View With No Name</h2>
    <ErrorViewNoName />
    <h2 id="errorView-no-description">Error View No Description</h2>
    <ErrorViewNoDescription />
  </div>
);

export default ErrorViewExamples;
