import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-slide-panel/docs/README.md';
import { version } from 'terra-slide-panel/package.json';
import Markdown from 'terra-markdown';
import SlidePanelProps from 'terra-slide-panel/docs/props-table/SlidePanel.md';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import SlidePanelOverlay from 'terra-site/lib/examples/slide-panel/SlidePanelOverlay';
import SlidePanelSquish from 'terra-site/lib/examples/slide-panel/SlidePanelSquish';
import SlidePanelStart from 'terra-site/lib/examples/slide-panel/SlidePanelStart';
import SlidePanelEnd from 'terra-site/lib/examples/slide-panel/SlidePanelEnd';
import SlidePanelSmall from 'terra-site/lib/examples/slide-panel/SlidePanelSmall';
import SlidePanelLarge from 'terra-site/lib/examples/slide-panel/SlidePanelLarge';
import SlidePanelFullscreen from 'terra-site/lib/examples/slide-panel/SlidePanelFullscreen';
import SlidePanelFill from 'terra-site/lib/examples/slide-panel/SlidePanelFill';
import SlidePanelNoFill from 'terra-site/lib/examples/slide-panel/SlidePanelNoFill';

const SlidePanelExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={SlidePanelProps} />
    <h2 id="overlay">Behavior - Overlay</h2>
    <SlidePanelOverlay />
    <h2 id="squish">Behavior - Squish</h2>
    <SlidePanelSquish />
    <h2 id="start">Position - Start</h2>
    <SlidePanelStart />
    <h2 id="end">Position - End</h2>
    <SlidePanelEnd />
    <h2 id="small">Size - Small</h2>
    <SlidePanelSmall />
    <h2 id="large">Size - Large</h2>
    <SlidePanelLarge />
    <h2 id="fullscreen">Fullscreen</h2>
    <SlidePanelFullscreen />
    <h2 id="fill">Fill</h2>
    <SlidePanelFill />
    <h2 id="no-fill">Fill Off</h2>
    <SlidePanelNoFill />
  </div>
);

export default SlidePanelExamples;
