import React from 'react';
import DocTemplate from 'terra-doc-template';
import WebpackDoc from 'terra-toolkit/docs/Webpack.md';

const DocPage = () => (
  <DocTemplate
    readme={WebpackDoc}
  />
);

export default DocPage;
