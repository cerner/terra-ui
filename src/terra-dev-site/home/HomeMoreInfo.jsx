import React from 'react';
import Grid from 'terra-grid';
import Heading from 'terra-heading';
import A from 'terra-hyperlink';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
import GettingStartedIcon from './GettingStartedIcon';
import ComponentsIcon from './ComponentsIcon';
import styles from './HomeMoreInfo.scss';

const HomeAdditionalPages = () => (
  <div className={styles.section}>
    <Grid>
      <Grid.Row>
        <Grid.Column tiny={12} small={6}>
          <Heading level={2} weight={400}>Getting Started</Heading>
          <Spacer marginTop="small" marginBottom="large+3">
            <Text fontSize={18}>
              Want to learn more about the Terra UI component library? Check out the
              {' '}
              <A href="https://engineering.cerner.com/terra-ui/getting-started/terra-ui/what-is-terra">Getting Started Guide</A>
              {' '}
              to learn more about the following: component features, usage, installation, configuration, and more.
            </Text>
          </Spacer>
        </Grid.Column>
        <Grid.Column tiny={12} small={6}>
          <Spacer marginBottom="large+4">
            <GettingStartedIcon />
          </Spacer>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid>
      <Grid.Row>
        <Grid.Column tiny={12} small={6}>
          <ComponentsIcon />
        </Grid.Column>
        <Grid.Column tiny={12} small={6}>
          <Heading level={2} weight={400}>Components</Heading>
          <Spacer marginTop="small">
            <Text fontSize={18}>
              Terra UI offers a wide range of components - from common UI components to specialized components designed for clinical use.
              {' '}
              <A href="https://engineering.cerner.com/terra-ui/components">View the entire component library</A>
              .
            </Text>
          </Spacer>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default HomeAdditionalPages;
