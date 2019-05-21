import React from 'react';
import Text from 'terra-text';
import Grid from 'terra-grid';
import styles from './HomeAboutTerra.scss';

const HomeAboutTerra = () => (
  <Grid className={styles['home-about-terra-container']}>
    <Grid.Row>
      <Grid.Column tiny={2} />
      <Grid.Column tiny={8}>
        <Text className={styles['home-about-terra']} fontSize={24} weight={200}>
          {'Terra UI offers a set of configurable React components designed to build scalable and modular healthcare-centric applications. The UI framework was created to solve real world issues in projects we work on, day to day.'}
        </Text>
      </Grid.Column>
      <Grid.Column tiny={2} />
    </Grid.Row>
  </Grid>
);

export default HomeAboutTerra;
