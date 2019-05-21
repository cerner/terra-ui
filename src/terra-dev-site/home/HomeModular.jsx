import React from 'react';
import Text from 'terra-text';
import Grid from 'terra-grid';
import styles from './HomeModular.scss';

const HomeModular = () => (
  <Grid className={styles['modular-background']}>
    <Grid.Row>
      <Grid.Column tiny={2} />
      <Grid.Column tiny={8}>
        <Text className={styles.modular} fontSize={20} weight={200}>
          {'Each Terra UI component is published as a separate npm package. This allows each component to be independently versioned, so applications can move at their own speed.'}
        </Text>
      </Grid.Column>
      <Grid.Column tiny={2} />
    </Grid.Row>
  </Grid>
);

export default HomeModular;
