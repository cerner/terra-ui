import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import Text from 'terra-text';
import Grid from 'terra-grid';
/* eslint-enable import/no-extraneous-dependencies */
import './DocSiteAboutTerra.scss';

const DocSiteAboutTerra = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column col={1} />
      <Grid.Column col={10} >
        <Text className="doc-site-about-terra" fontSize={20} weight={200}>
          {'Terra offers a set of configurable React components designed to help build scalable and modular healthcare focused applications. These components follow Cerner’s Design Standard Guidelines and are well-maintained and tested. The UI framework easily integrates with webpack-based workflows and was created to solve real-world issues in projects we work on day to day.'}
        </Text>
      </Grid.Column>
      <Grid.Column col={1} />
    </Grid.Row>
  </Grid>
  );

export default DocSiteAboutTerra;
