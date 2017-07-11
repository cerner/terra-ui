import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import Text from 'terra-text';
import Grid from 'terra-grid';
/* eslint-enable import/no-extraneous-dependencies */
import './DocSiteAboutTerra2.scss';

const DocSiteAboutTerra2 = () => (
  <Grid className={'doc-site-about-terra-background'}>
    <Grid.Row>
      <Grid.Column col={2} />
      <Grid.Column col={8} >
        <Text className="doc-site-about-terra2" fontSize={20} weight={200}>
          {'Each terra component is published as a separate npm package. This allows each component to be independently versioned allowing applications to move at their own speed.'}
        </Text>
      </Grid.Column>
      <Grid.Column col={2} />
    </Grid.Row>
  </Grid>
  );

export default DocSiteAboutTerra2;
