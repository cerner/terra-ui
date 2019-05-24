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
          {'Terra UI offers a set of configurable React components designed to build scalable and modular healthcare-centric applications. The UI framework was created to solve real world issues in projects we work on in the Healthcare IT space.'}
        </Text>
      </Grid.Column>
      <Grid.Column tiny={1} />
    </Grid.Row>
  </Grid>
);

export default HomeAboutTerra;
