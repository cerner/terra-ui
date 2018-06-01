/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Text from 'terra-text';
import Grid from 'terra-grid';
/* eslint-enable import/no-extraneous-dependencies */
import styles from './HomeModular.scss';

const HomeModular = () => (
  <Grid className={styles['modular-background']}>
    <Grid.Row>
      <Grid.Column col={2} />
      <Grid.Column col={8} >
        <Text className={styles.modular} fontSize={20} weight={200}>
          {'Each Terra UI component is published as a separate npm package. This allows each component to be independently versioned allowing applications to move at their own speed.'}
        </Text>
      </Grid.Column>
      <Grid.Column col={2} />
    </Grid.Row>
  </Grid>
);

export default HomeModular;
