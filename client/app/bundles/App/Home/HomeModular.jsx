import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import Text from 'terra-text';
import Grid from 'terra-grid';
/* eslint-enable import/no-extraneous-dependencies */
import './HomeModular.scss';

const HomeModular = () => (
  <Grid className={'home-about-terra-background'}>
    <Grid.Row>
      <Grid.Column col={2} />
      <Grid.Column col={8} >
        <Text className="home-modular" fontSize={20} weight={200}>
          {'Each terra component is published as a separate npm package. This allows each component to be independently versioned allowing applications to move at their own speed.'}
        </Text>
      </Grid.Column>
      <Grid.Column col={2} />
    </Grid.Row>
  </Grid>
  );

export default HomeModular;
