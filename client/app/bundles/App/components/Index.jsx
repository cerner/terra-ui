/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Base from 'terra-base';
import Grid from 'terra-grid';
import List from 'terra-list';
import { Link } from 'react-router';
import CorePackages from './CorePackages';
import ClinicalPackages from './ClinicalPackages';


const propTypes = {
  children: PropTypes.node,
};

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale,
    };
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
  }

  handleLocaleChange(e) {
    this.setState({ locale: e.target.value });
  }

  render() {
    return (
      <Base locale={this.state.locale}>
        <Grid>
          <Grid.Row>
            <Grid.Column small={2}>
              <List className="site-nav">
                <List.Item className="site-nav-item" content={<Link to="/getting-started">Getting Started</Link>} />
              </List>
              <CorePackages />
              <ClinicalPackages />
            </Grid.Column>
            <Grid.Column small={10}>
              {this.props.children}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Base>
    );
  }
}

App.propTypes = propTypes;

export default App;
