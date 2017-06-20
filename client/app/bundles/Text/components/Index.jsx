/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-text/docs/README.md';
import TextFontSizeDocs from 'terra-text/docs/text-font-sizes.md';
import TextColorDocs from 'terra-text/docs/text-colors.md';
import TextWeightDocs from 'terra-text/docs/text-weights.md';
import TextVariationsDocs from 'terra-text/docs/text-variations.md';
import TextVisuallyHiddenDocs from 'terra-text/docs/text-visually-hidden.md';
import { version } from 'terra-text/package.json';

// Example Files
import TextColors from 'terra-site/lib/examples/text/TextColors';
import TextDisplays from 'terra-site/lib/examples/text/TextDisplays';
import TextFontSizes from 'terra-site/lib/examples/text/TextFontSizes';
import TextVariations from 'terra-site/lib/examples/text/TextVariations';
import TextVisuallyHidden from 'terra-site/lib/examples/text/TextVisuallyHidden';
import TextWeights from 'terra-site/lib/examples/text/TextWeights';

const TextExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <TextDisplays />
    <br />
    <br />
    <Markdown id="text-font-size-docs" src={TextFontSizeDocs} />
    <TextFontSizes />
    <br />
    <br />
    <Markdown id="text-color-docs" src={TextColorDocs} />
    <TextColors />
    <br />
    <br />
    <Markdown id="text-weight-docs" src={TextWeightDocs} />
    <TextWeights />
    <br />
    <br />
    <Markdown id="text-visually-hidden-docs" src={TextVisuallyHiddenDocs} />
    <TextVisuallyHidden />
    <br />
    <br />
    <Markdown id="text-variations-docs" src={TextVariationsDocs} />
    <TextVariations />
  </div>
);

export default TextExamples;
