import React from 'react';
import Grid from 'terra-grid';
import Heading from 'terra-heading';
import A from 'terra-hyperlink';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
import GettingStartedIcon from '../icon/GettingStartedIcon';
import ComponentsIcon from '../icon/ComponentsIcon';
import ProgressiveAppIcon from '../icon/ProgressiveAppIcon';
import VersionControlIcon from '../icon/VersionControlIcon';
import styles from './HomeMoreInfo.scss';

const HomeAdditionalPages = () => (
  <div className={styles.section}>
    <Grid>
      <Grid.Row>
        <Grid.Column tiny={12} small={6}>
          <Heading level={2} weight={400}>About Terra</Heading>
          <Spacer marginTop="small" marginBottom="large+3">
            <Text fontSize={18}>
              Terra is Cerner&apos;s open-source framework for creating web applications integrating into the Cerner application ecosystem.
              Want to learn more about Terra? Check out the
              {' '}
              <A href="/terra-ui/about/terra-ui/what-is-terra">About Section</A>
              {' '}
              to learn more.
            </Text>
          </Spacer>
        </Grid.Column>
        <Grid.Column tiny={12} small={6}>
          <Spacer marginBottom="large+4">
            <GettingStartedIcon />
          </Spacer>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column tiny={12} small={6}>
          <Spacer marginBottom="large+4">
            <ProgressiveAppIcon />
          </Spacer>
        </Grid.Column>
        <Grid.Column tiny={12} small={6}>
          <Heading level={2} weight={400}>Application</Heading>
          <Spacer marginTop="small">
            <Text fontSize={18}>
              Terra Application offers solutions to common application problems such as internationalization, modal presentation, unsaved changes, loading overlays, and themes.
              {' '}
              <A href="/terra-ui/application">View all application features</A>
              .
            </Text>
          </Spacer>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column tiny={12} small={6}>
          <Heading level={2} weight={400}>Components</Heading>
          <Spacer marginTop="small">
            <Text fontSize={18}>
              Terra offers a wide range of components - from common UI components to specialized components designed for clinical use.
              {' '}
              <A href="/terra-ui/components">View the entire component library</A>
              .
            </Text>
          </Spacer>
        </Grid.Column>
        <Grid.Column tiny={12} small={6}>
          <Spacer marginBottom="large+4">
            <ComponentsIcon />
          </Spacer>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column tiny={12} small={6}>
          <Spacer marginBottom="large+4">
            <VersionControlIcon />
          </Spacer>
        </Grid.Column>
        <Grid.Column tiny={12} small={6}>
          <Heading level={2} weight={400}>Developer Tools</Heading>
          <Spacer marginTop="small">
            <Text fontSize={18}>
            Terra provides a development and testing environment to help you build pieces of your application in isolation.
              {' '}
              <A href="/terra-ui/dev_tools">View the selection of tools</A>
              .
            </Text>
          </Spacer>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default HomeAdditionalPages;
