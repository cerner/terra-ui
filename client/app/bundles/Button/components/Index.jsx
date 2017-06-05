import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-button/docs/README.md';
import { version } from 'terra-button/package.json';
import Markdown from 'terra-markdown';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import ButtonSize from 'terra-site/lib/examples/button/ButtonSize';
import ButtonBlock from 'terra-site/lib/examples/button/ButtonBlock';
import ButtonAnchor from 'terra-site/lib/examples/button/ButtonAnchor';
import ButtonDisabled from 'terra-site/lib/examples/button/ButtonDisabled';
import ButtonOnClick from 'terra-site/lib/examples/button/ButtonOnClick';
import ButtonIcon from 'terra-site/lib/examples/button/ButtonIcon';
import ButtonVariant from 'terra-site/lib/examples/button/ButtonVariant';
import ButtonCompact from 'terra-site/lib/examples/button/ButtonCompact';

const ButtonExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="variant">Variant</h2>
    <ButtonVariant />
    <h2 id="compact">Compact</h2>
    <ButtonCompact />
    <h2 id="size">Size</h2>
    <ButtonSize />
    <h2 id="block">Block</h2>
    <ButtonBlock />
    <h2 id="anchor">Anchor</h2>
    <ButtonAnchor />
    <h2 id="disabled">Disabled</h2>
    <ButtonDisabled />
    <h2 id="on-click">OnClick</h2>
    <ButtonOnClick />
    <h2 id="icon">Icon</h2>
    <ButtonIcon />
  </div>
);

export default ButtonExamples;
