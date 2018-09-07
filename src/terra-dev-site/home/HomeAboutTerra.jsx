/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Text from 'terra-text';
import Grid from 'terra-grid';
/* eslint-enable import/no-extraneous-dependencies */
import styles from './HomeAboutTerra.scss';

const HomeAboutTerra = () => (
  <Grid className={styles['home-about-terra-container']}>
    <Grid.Row>
      <Grid.Column col={2} />
      <Grid.Column col={8}>
        <Text className={styles['home-about-terra']} fontSize={20} weight={200}>
          {'Terra UI offers a set of configurable React components designed to help build scalable and modular healthcare focused applications. These components follow Cerner’s Design Standard Guidelines and are well-maintained and tested. The UI framework easily integrates with webpack-based workflows and was created to solve real-world issues in projects we work on day to day.'}
        </Text>
      </Grid.Column>
      <Grid.Column col={2} />
    </Grid.Row>
  </Grid>
);

export default HomeAboutTerra;
