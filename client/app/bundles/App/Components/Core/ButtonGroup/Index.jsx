import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-button-group/docs/README.md';
import { version } from 'terra-button-group/package.json';
import Markdown from 'terra-markdown';
import ButtonGroupProps from 'terra-button-group/docs/props-table/ButtonGroup.md';
import ButtonGroupButtonProps from 'terra-button-group/docs/props-table/ButtonGroupButton.md';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import ButtonGroupVariant from 'terra-site/lib/examples/button-group/ButtonGroupVariant';
import ButtonGroupSize from 'terra-site/lib/examples/button-group/ButtonGroupSize';
import ButtonGroupCompact from 'terra-site/lib/examples/button-group/ButtonGroupCompact';
import ButtonGroupSelectable from 'terra-site/lib/examples/button-group/ButtonGroupSelectable';
import ButtonGroupWithIcons from 'terra-site/lib/examples/button-group/ButtonGroupWithIcons';

const ButtonGroupExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table-button-group" src={ButtonGroupProps} />
    <Markdown id="props-table-button-group-button" src={ButtonGroupButtonProps} />
    <h2>Variant</h2>
    <ButtonGroupVariant />
    <h2>Size</h2>
    <ButtonGroupSize />
    <h2>Compact</h2>
    <ButtonGroupCompact />
    <h2>Icons</h2>
    <ButtonGroupWithIcons />
    <h2>Selectable</h2>
    <ButtonGroupSelectable />
  </div>
);

export default ButtonGroupExamples;
