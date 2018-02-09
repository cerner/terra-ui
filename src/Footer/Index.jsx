/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Grid from 'terra-grid';
import Text from 'terra-text';
import List from 'terra-list';
/* eslint-enable import/no-extraneous-dependencies */
import cernerLogo from './cerner_logo.png';
import styles from './Index.scss';

const AppFooter = () => (
  <footer className={styles.footer}>
    <Grid>
      <Grid.Row>
        <Grid.Column col={1} />
        <Grid.Column className={styles['footer-col']} small={2} >
          <Text fontSize={18} weight={700} color={'#a6d9f4'}>GitHub</Text>
          <List>
            <List.Item content={<a href="https://github.com/cerner/terra-clinical">terra-clinical</a>} />
            <List.Item content={<a href="https://github.com/cerner/terra-core">terra-core</a>} />
            <List.Item content={<a href="https://github.com/cerner?utf8=%E2%9C%93&q=terra&type=&language=">all</a>} />
            <List.Item content={<a href="https://github.com/cerner/terra-framework">terra-framework</a>} />
          </List>
        </Grid.Column>
        <Grid.Column className={styles['footer-col']} small={2}>
          <Text fontSize={18} weight={700} color={'#a6d9f4'}>Support</Text>
          <List>
            <List.Item content={<a href="https://github.com/cerner/terra-core/issues/new">Log an issue</a>} />
          </List>
        </Grid.Column>
        <Grid.Column className={styles['footer-col']} small={2}>
          <Text fontSize={18} weight={700} color={'#a6d9f4'}>About Us</Text>
          <List>
            <List.Item content={<a href="https://www.cerner.com/">Cerner</a>} />
            <List.Item content={<a href="http://engineering.cerner.com/">Engineering</a>} />
          </List>
        </Grid.Column>
        <Grid.Column className={styles['footer-col']} small={4} >
          <a href="https://www.cerner.com/"><img alt="Cerner Corporation" src={cernerLogo} /></a>
        </Grid.Column>
        <Grid.Column col={1} />
      </Grid.Row>
    </Grid>
  </footer>
  );

export default AppFooter;
