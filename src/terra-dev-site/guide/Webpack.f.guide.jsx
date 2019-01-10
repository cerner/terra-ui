import React from 'react';
import DocTemplate from 'terra-doc-template';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import WebpackDoc from 'terra-toolkit/docs/Webpack.md';

const DocPage = () => (
  <DocTemplate
    readme={WebpackDoc}
  />
);

export default DocPage;
