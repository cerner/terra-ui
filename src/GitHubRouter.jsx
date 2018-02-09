/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import Image from 'terra-image';

const GithubRouter = (
  <a href="https://github.com/cerner?utf8=%E2%9C%93&q=terra&type=&language=">
    <Image
      variant="rounded"
      src={'https://github.com/cerner/terra-core/raw/master/terra.png'}
      alt="github image"
      height="26px"
      width="26px"
      isFluid
    />
  </a>
);

export default GithubRouter;
