import React from 'react';
import Heading from 'terra-heading';
import WhatIsTerra from './WhatIsTerra';
import InstallingComponents from './InstallingComponents';
import Dependencies from './Dependencies';
import WebpackConfiguration from './WebpackConfiguration';
import SampleWebpackConfiguration from './SampleWebpackConfiguration';
import Theming from './Theming';

const GettingStartedPage = () => (
  <div>
    <Heading level={2}>Getting Started with Terra UI</Heading>
    <WhatIsTerra />
    <hr />
    <InstallingComponents />
    <hr />
    <Dependencies />
    <hr />
    <WebpackConfiguration />
    <hr />
    <SampleWebpackConfiguration />
    <hr />
    <Theming />
  </div>
);

export default GettingStartedPage;

