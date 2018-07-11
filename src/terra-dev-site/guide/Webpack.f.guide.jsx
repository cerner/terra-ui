/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import WebpackDoc from 'terra-toolkit/docs/Webpack.md';
/* eslint-enable import/no-extraneous-dependencies */

const DocPage = () => (
  <DocTemplate
    readme={WebpackDoc}
  />
);

export default DocPage;
