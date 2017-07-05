import React from 'react';
import Heading from 'terra-heading';
import Text from 'terra-text';

class WhatIsTerra extends React.Component {
  render() {
    return (
      <div>
        <Heading level={3} >What is Terra?</Heading>
        <Text>Terra offers a set of configurable React components designed to help build scalable and modular application UIs. The library easily integrates with webpack-based workflows and was created to solve real-world issues in projects we work on day to day.</Text>
      </div>
    );
  }
}

export default WhatIsTerra;
