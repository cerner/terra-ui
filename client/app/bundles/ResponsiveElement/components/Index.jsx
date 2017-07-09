import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-responsive-element/docs/README.md';
import { version } from 'terra-responsive-element/package.json';
import Markdown from 'terra-markdown';
import ResponsiveElementProps from 'terra-responsive-element/docs/props-table/ResponsiveElement.md';
/* eslint-enable import/no-extraneous-dependencies */


// Example Files
import ResponsiveExample from 'terra-site/lib/examples/responsive-element/ResponsiveExample';

const ResponsiveElementExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={ResponsiveElementProps} />
    <h2>Responsive to Parent</h2>
    <h3>All Breakpoints</h3>
    <ResponsiveExample
      defaultElement={<div>Default</div>}
      tiny={<div>Tiny</div>}
      small={<div>Small</div>}
      medium={<div>Medium</div>}
      large={<div>Large</div>}
      huge={<div>Huge</div>}
    />
    <br />
    <h3>Default and Medium Breakpoints</h3>
    <ResponsiveExample
      defaultElement={<div>Default</div>}
      medium={<div>Medium</div>}
    />
    <br />
    <h3>Only Medium</h3>
    <p>Note: Does not render elements when smaller than medium.</p>
    <ResponsiveExample medium={<div>Medium</div>} />
    <h2>Responsive to Window</h2>
    <p>Note: Changing the container size has no effect when responsive to window. Resize the window to examine changes.</p>
    <ResponsiveExample
      responsiveTo="window"
      defaultElement={<div>Default</div>}
      tiny={<div>Tiny</div>}
      small={<div>Small</div>}
      medium={<div>Medium</div>}
      large={<div>Large</div>}
      huge={<div>Huge</div>}
    />
  </div>
);

export default ResponsiveElementExamples;
