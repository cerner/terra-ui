/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import CardProps from 'terra-card/docs/props-table/Card.md';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-card/docs/README.md';
import { version } from 'terra-card/package.json';

// Example Files
import CardDefault from 'terra-site/lib/examples/card/CardDefault';
import CardPadding from 'terra-site/lib/examples/card/CardPadding';
import CardPaddingVertical from 'terra-site/lib/examples/card/CardPaddingVertical';
import CardPaddingHorizontal from 'terra-site/lib/examples/card/CardPaddingHorizontal';
import CardPaddingHR from 'terra-site/lib/examples/card/CardPaddingHR';

const CardExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown src={ReadMe} />
    <Markdown src={CardProps} />
    <h2 id="CardDefault">Card basic example</h2>
    <CardDefault />
    <h2 id="CardPadding">Card plus Card Body with default padding</h2>
    <CardPadding />
    <h2 id="CardPaddingVertical">Card plus Card Body with only vertical padding</h2>
    <CardPaddingVertical />
    <h2 id="CardPaddingHorizontal">Card plus Card Body with only horizontal padding</h2>
    <CardPaddingHorizontal />
    <h2 id="CardPaddingHR">Card plus padded and non-padded children</h2>
    <CardPaddingHR />
  </div>
);

export default CardExamples;
