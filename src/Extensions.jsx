/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { Extensions, GitHubLinkExtension } from 'terra-dev-site';

const extensions = (
  <Extensions>
    <GitHubLinkExtension href="https://github.com/cerner?utf8=%E2%9C%93&q=terra&type=&language=" />
  </Extensions>
);

export default extensions;
