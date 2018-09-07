/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from 'terra-grid';
import Heading from 'terra-heading';
import Text from 'terra-text';
/* eslint-enable import/no-extraneous-dependencies */
import styles from './HomeMoreInfo.scss';

const HomeAdditionalPages = () => (
  <Grid className={styles.section}>
    <Grid.Row>
      <Grid.Column col={12} small={6}>
        <NavLink className={styles.link} to="getting-started"><Heading level={2}>Getting Started</Heading></NavLink>
        <div style={{ marginTop: '.5rem' }}>
          <Text fontSize={18}>
Looking to learn more about Terra UI? Check out our
            <NavLink to="/getting-started">Getting Started Guide</NavLink>
            {' '}
to learn more about component features, usage, installation, configuration and more.
          </Text>
        </div>
      </Grid.Column>
      <Grid.Column col={12} small={6}>
        <NavLink className={styles.link} to="components"><Heading level={2}>Components</Heading></NavLink>
        <div style={{ marginTop: '.5rem' }}>
          <Text fontSize={18}>
Terra UI offers a wide range of components from common UI components to more specialized components designed for clincal use. You can view the entire library of
            <NavLink to="/components">Terra UI components here</NavLink>
.
          </Text>
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default HomeAdditionalPages;
