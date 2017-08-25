import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-image/docs/README.md';
import { version } from 'terra-popup/package.json';
import Grid from 'terra-grid';
import Markdown from 'terra-markdown';
import PopupProps from 'terra-popup/docs/props-table/Popup.md';
/* eslint-enable import/no-extraneous-dependencies */


// Example Files
// Example Files
import PopupStandard from 'terra-site/lib/examples/popup/PopupStandard';
import PopupBounded from 'terra-site/lib/examples/popup/PopupBounded';
import PopupNoHeader from 'terra-site/lib/examples/popup/PopupNoHeader';
import PopupWithArrow from 'terra-site/lib/examples/popup/PopupWithArrow';
import PopupClassName from 'terra-site/lib/examples/popup/PopupClassName';
import PopupDimensions from 'terra-site/lib/examples/popup/PopupDimensions';
import PopupBottomCenter from 'terra-site/lib/examples/popup/PopupBottomCenter';
import PopupBottomLeft from 'terra-site/lib/examples/popup/PopupBottomLeft';
import PopupBottomRight from 'terra-site/lib/examples/popup/PopupBottomRight';
import PopupMiddleCenter from 'terra-site/lib/examples/popup/PopupMiddleCenter';
import PopupMiddleLeft from 'terra-site/lib/examples/popup/PopupMiddleLeft';
import PopupMiddleRight from 'terra-site/lib/examples/popup/PopupMiddleRight';
import PopupTopCenter from 'terra-site/lib/examples/popup/PopupTopCenter';
import PopupTopLeft from 'terra-site/lib/examples/popup/PopupTopLeft';
import PopupTopRight from 'terra-site/lib/examples/popup/PopupTopRight';
import PopupInsideModal from 'terra-site/lib/examples/popup/PopupInsideModal';

const PopupExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props" src={PopupProps} />
    <h2 id="standard-popup" style={{ paddingTop: '20px' }}>Popup Default Props</h2>
    <PopupStandard />
    <h2 id="arrow-popup" style={{ paddingTop: '20px' }}>Popup Display With Arrow</h2>
    <PopupWithArrow />
    <h2 id="alignment-popups" style={{ paddingTop: '20px' }}>Popup Attachments</h2>
    <Grid>
      <Grid.Row>
        <Grid.Column col={3}>
          <PopupBottomLeft />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupBottomCenter />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupBottomRight />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column col={3}>
          <PopupMiddleLeft />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupMiddleCenter />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupMiddleRight />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column col={3}>
          <PopupTopLeft />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupTopCenter />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupTopRight />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <h2 id="dimension-popup" style={{ paddingTop: '20px' }}>Popup Size Variants</h2>
    <PopupDimensions />
    <h2 id="bounded-popup" style={{ paddingTop: '20px' }}>Popup Bounded</h2>
    <PopupBounded />
    <h2 id="no-header-popup" style={{ paddingTop: '20px' }}>Popup Bounded With No Header</h2>
    <PopupNoHeader />
    <h2 id="class-name-popup" style={{ paddingTop: '20px' }}>Popup Adding Class Styles</h2>
    <PopupClassName />
    <h2 id="modal-popup" style={{ paddingTop: '20px' }}>Popup Inside Modal</h2>
    <PopupInsideModal />
  </div>
);

export default PopupExamples;
