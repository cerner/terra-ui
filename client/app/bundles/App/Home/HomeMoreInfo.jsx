import React from 'react';
import { Link } from 'react-router';
/* eslint-disable import/no-extraneous-dependencies */
import Grid from 'terra-grid';
import Heading from 'terra-heading';
import Text from 'terra-text';
/* eslint-enable import/no-extraneous-dependencies */
import styles from './HomeMoreInfo.scss';

const HomeAdditionalPages = () => (
  <Grid className={styles.section}>
    <Grid.Row>
      <Grid.Column col={12} small={6}>
        <Link className={styles.link} to="getting-started"><Heading level={2}>Getting Started</Heading></Link>
        <div style={{ marginTop: '.5rem' }}>
          <Text fontSize={18}>Looking to learn more about Terra UI? Check out our <Link to="getting-started">Getting Started Guide</Link> to learn more about component features, usage, installation, configuration and more.</Text>
        </div>
      </Grid.Column>
      <Grid.Column col={12} small={6}>
        <Link className={styles.link} to="components"><Heading level={2}>Components</Heading></Link>
        <div style={{ marginTop: '.5rem' }}>
          <Text fontSize={18}>Terra UI offers a wide range of components from common UI components to more specialized components designed for clincal use. You can view the entire library of <Link to="components">Terra UI components here</Link>.</Text>
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default HomeAdditionalPages;
