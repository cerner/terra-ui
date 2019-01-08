import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from 'terra-grid';
import Heading from 'terra-heading';
import Text from 'terra-text';
import styles from './HomeMoreInfo.scss';

const HomeAdditionalPages = () => (
  <Grid className={styles.section}>
    <Grid.Row>
      <Grid.Column col={12} small={6}>
        <NavLink className={styles.link} to="getting-started"><Heading level={2}>Getting Started</Heading></NavLink>
        <div style={{ marginTop: '.5rem' }}>
          <Text fontSize={18}>
            Want to learn more about Terra UI? Check out the
            {' '}
            <NavLink to="/getting-started">Getting Started Guide</NavLink>
            {' '}
            to learn more about the following: component features, usage, installation, configuration, and more.
          </Text>
        </div>
      </Grid.Column>
      <Grid.Column col={12} small={6}>
        <NavLink className={styles.link} to="components"><Heading level={2}>Components</Heading></NavLink>
        <div style={{ marginTop: '.5rem' }}>
          <Text fontSize={18}>
            Terra UI offers a wide range of components - from common UI components to specialized components designed for clinical use.
            {' '}
            <NavLink to="/components">View the entire library</NavLink>
            .
          </Text>
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default HomeAdditionalPages;
