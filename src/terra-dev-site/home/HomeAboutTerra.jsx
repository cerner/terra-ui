import React from 'react';
import Text from 'terra-text';
import Grid from 'terra-grid';
import styles from './HomeAboutTerra.scss';

const HomeAboutTerra = () => (
  <Grid className={styles['home-about-terra-container']}>
    <Grid.Row>
      <Grid.Column tiny={1} />
      <Grid.Column tiny={10}>
        <Text className={styles['home-about-terra']} fontSize={24}>
          {'Build and integrate apps with Cerner'}
        </Text>
      </Grid.Column>
      <Grid.Column tiny={1} />
    </Grid.Row>
  </Grid>
);

export default HomeAboutTerra;
