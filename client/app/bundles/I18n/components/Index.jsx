import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-i18n/docs/README.md';
import { version } from 'terra-i18n/package.json';
import Markdown from 'terra-markdown';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import I18nDemo from 'terra-site/lib/examples/i18n/I18nDemo';

const I18nExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="baseWithI18n">I18nProvider</h2>
    <I18nDemo />
  </div>
);

export default I18nExamples;
