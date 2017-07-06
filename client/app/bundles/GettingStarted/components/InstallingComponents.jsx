import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import Heading from 'terra-heading';
import Text from 'terra-text';
/* eslint-enable import/no-extraneous-dependencies */

const InstallingComponents = () => (
  <div>
    <Heading level={3} >Installing Components</Heading>
    <Text>Each terra component is a separate npm package. All of the terra packages can be found on the <a href="https://www.npmjs.com/browse/keyword/Terra">public npm repository</a>. Each component page will have documentation on how to install it and a base example of how to get started.</Text>
  </div>
  );

export default InstallingComponents;
