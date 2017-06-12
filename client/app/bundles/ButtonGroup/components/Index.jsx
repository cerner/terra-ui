import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-button-group/docs/README.md';
import { version } from 'terra-button-group/package.json';
import Markdown from 'terra-markdown';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import ButtonGroupVariant from 'terra-site/lib/examples/button-group/ButtonGroupVariant';
import ButtonGroupSize from 'terra-site/lib/examples/button-group/ButtonGroupSize';
import ButtonGroupCompact from 'terra-site/lib/examples/button-group/ButtonGroupCompact';
import ButtonGroupSelectable from 'terra-site/lib/examples/button-group/ButtonGroupSelectable';
import ButtonGroupWithIcons from 'terra-site/lib/examples/button-group/ButtonGroupWithIcons';
import ButtonGroupOnClick from 'terra-site/lib/examples/button-group/ButtonGroupOnClick';
import ButtonGroupOnChange from 'terra-site/lib/examples/button-group/ButtonGroupOnChange';

const ButtonGroupExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Button Group</h2>
    <h2>Button Group Button</h2>
    <h2>Variant</h2>
    <ButtonGroupVariant />
    <h2>Size</h2>
    <ButtonGroupSize />
    <h2>Compact</h2>
    <ButtonGroupCompact />
    <h2>Icons</h2>
    <ButtonGroupWithIcons />
    <h2>Unselectable With On Click Set</h2>
    <ButtonGroupOnClick />
    <h2>Selectable</h2>
    <ButtonGroupSelectable />
    <h2>On Change</h2>
    <ButtonGroupOnChange />
  </div>
);

export default ButtonGroupExamples;
