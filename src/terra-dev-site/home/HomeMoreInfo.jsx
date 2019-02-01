import React from 'react';
import Grid from 'terra-grid';
import Heading from 'terra-heading';
import Text from 'terra-text';
import styles from './HomeMoreInfo.scss';

const HomeAdditionalPages = () => (
  <Grid className={styles.section}>
    <Grid.Row>
      <Grid.Column col={12} small={6}>
        <Heading level={2}>Getting Started</Heading>
        <div style={{ marginTop: '.5rem' }}>
          <Text fontSize={18}>
            Want to learn more about Terra UI? Check out the
            {' '}
            <a href="https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/what-is-terra">Getting Started Guide</a>
            {' '}
            to learn more about the following: component features, usage, installation, configuration, and more.
          </Text>
        </div>
      </Grid.Column>
      <Grid.Column col={12} small={6}>
        <Heading level={2}>Components</Heading>
        <div style={{ marginTop: '.5rem' }}>
          <Text fontSize={18}>
            Terra UI offers a wide range of components - from common UI components to specialized components designed for clinical use.
            {' '}
            <a href="https://engineering.cerner.com/terra-ui/#/components">View the entire library</a>
            .
          </Text>
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default HomeAdditionalPages;
