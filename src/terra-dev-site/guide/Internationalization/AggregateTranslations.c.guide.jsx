/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import AggregateTranslationsDoc from 'terra-aggregate-translations/README.md';
/* eslint-enable import/no-extraneous-dependencies */

const DocPage = () => (
  <DocTemplate
    readme={AggregateTranslationsDoc}
  />
);

export default DocPage;
