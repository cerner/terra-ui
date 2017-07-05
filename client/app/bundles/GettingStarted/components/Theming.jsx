import React from 'react';
import Heading from 'terra-heading';
import Text from 'terra-text';

class Theming extends React.Component {
  render() {
    return (
      <div>
        <Heading level={3} >Theming</Heading>
        <Text>Every terra component will support dynamic theming. We are currently updating all of our components to use CSS modules. More information on theming will be available after that work has been completed.</Text>
      </div>
    );
  }
}

export default Theming;
