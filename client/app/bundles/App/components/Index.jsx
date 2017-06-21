/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Base from 'terra-base';
import Grid from 'terra-grid';
import List from 'terra-list';

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
                <List.Item className="site-nav-item" content={<Link to="/">Home</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/arrange">Arrange</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/base">Base</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/badge">Badge</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/button">Button</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/button-group">Button Group</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/content-container">Content Container</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/datepicker">Date Picker</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/demographics-banner">Demographics Banner</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/form">Form</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/grid">Grid</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/heading">Heading</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/i18n">I18n</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/icon">Icon</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/image">Image</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/list">List</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/modal">Modal</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/progress-bar">Progress Bar</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/responsive-element">Responsive Element</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/search-field">Search Field</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/slide-panel">Slide Panel</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/status">Status</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/table">Table</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/text">Text</Link>} />
                <List.Item className="site-nav-item" content={<Link to="/components/core/time-input">Time Input</Link>} />
              </List>
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
