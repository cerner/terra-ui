import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
import Base from 'terra-base';
/* eslint-enable import/no-extraneous-dependencies */
import AppTopNavigation from './AppTopNavigation/Index';
import AppFooter from './AppFooter/Index';

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
        <AppTopNavigation />
        {this.props.children}
        <AppFooter />
      </Base>
    );
  }
}

App.propTypes = propTypes;

export default App;
