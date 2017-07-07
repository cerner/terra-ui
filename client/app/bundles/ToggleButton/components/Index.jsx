/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-toggle-button/docs/README.md';
import { version } from 'terra-toggle-button/package.json';
import ToggleButtonProps from 'terra-toggle-button/docs/props-table/ToggleButton.md';

// Example Files
import DefaultToggleButton from 'terra-site/lib/examples/toggle-button/DefaultToggleButton';
import AnimatedToggleButton from 'terra-site/lib/examples/toggle-button/AnimatedToggleButton';
import ButtonAttrsToggleButton from 'terra-site/lib/examples/toggle-button/ButtonAttrsToggleButton';
import IsInitiallyOpenToggleButton from 'terra-site/lib/examples/toggle-button/IsInitiallyOpenToggleButton';
import IsIconOnlyToggleButton from 'terra-site/lib/examples/toggle-button/IsIconOnlyToggleButton';
import OpenCloseEventToggleButton from 'terra-site/lib/examples/toggle-button/OpenCloseEventToggleButton';
import OpenCloseTextToggleButton from 'terra-site/lib/examples/toggle-button/OpenCloseTextToggleButton';

const ToggleButtonExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={ToggleButtonProps} />
    <h2 id="default">Default ToggleButton</h2>
    <DefaultToggleButton />
    <h2 id="animated">isAnimated ToggleButton</h2>
    <AnimatedToggleButton />
    <h2 id="open-close-text">Open / Close Button Text ToggleButton</h2>
    <OpenCloseTextToggleButton />
    <h2 id="is-icon-only">isIconOnly ToggleButton</h2>
    <IsIconOnlyToggleButton />
    <h2 id="is-initially-open">isInitiallyOpen ToggleButton</h2>
    <IsInitiallyOpenToggleButton />
    <h2 id="button-attrs">Custom ToggleButton Button</h2>
    <ButtonAttrsToggleButton />
    <h2 id="open-close-callbacks">OnOpen / OnClose Callback ToggleButton</h2>
    <OpenCloseEventToggleButton />
  </div>
);

export default ToggleButtonExamples;
