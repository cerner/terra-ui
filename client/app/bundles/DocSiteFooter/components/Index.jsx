import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import Grid from 'terra-grid';
/* eslint-enable import/no-extraneous-dependencies */
import cernerLogo from './cerner_logo.png';
import './Index.scss';

const DocSiteFooter = () => (
  <footer className="doc-footer">
    <Grid>
      <Grid.Row>
        <Grid.Column col={1} />
        <Grid.Column col={3}>
          <h3>GitHub</h3>
          <ul>
            <li><a href="https://github.com/cerner/terra-core">terra-core</a></li>
            <li><a href="https://github.com/cerner/terra-clinical">terra-clinical</a></li>
            <li><a href="https://github.com/cerner/terra-ui.com">terra-ui.com</a></li>
          </ul>
        </Grid.Column>
        <Grid.Column col={3}>
          <h3>Support</h3>
          <p><a href="https://github.com/cerner/terra-core/issues/new">Log an issue</a></p>
        </Grid.Column>
        <Grid.Column col={3}>
          <h3>About Us</h3>
          <ul>
            <li><a href="https://www.cerner.com/">Cerner</a></li>
            <li><a href="http://engineering.cerner.com/">Engineering</a></li>
          </ul>
        </Grid.Column>
        <Grid.Column col={1} >
          <img alt="Cerner Corporation" src={cernerLogo} />
        </ Grid.Column>
      </Grid.Row>
    </Grid>
  </footer>
  );

export default DocSiteFooter;
