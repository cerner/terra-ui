import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
import Grid from 'terra-grid';
/* eslint-enable import/no-extraneous-dependencies */
import CorePackages from './CorePackages';
import ClinicalPackages from './ClinicalPackages';
import styles from './Index.scss';

const propTypes = {
  children: PropTypes.node,
};

const Components = props => (
  <Grid>
    <Grid.Row>
      <Grid.Column small={2} className={styles['components-vertical-nav']}>
        <CorePackages />
        <ClinicalPackages />
      </Grid.Column>
      <Grid.Column small={10}>
        <div className={styles['components-content']}>
          {props.children}
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  );

Components.propTypes = propTypes;

export default Components;
