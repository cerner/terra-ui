import React from 'react';
import Heading from 'terra-heading';
import Text from 'terra-text';
import List from 'terra-list';
import Dependency from './Dependency';

class Dependencies extends React.Component {
  render() {
    return (
      <div>
        <Heading level={3} >Dependencies</Heading>
        <List>
          <Dependency name={'react'} link={'https://github.com/facebook/react/tree/master/packages/react'} usage={'Javascript Library for building UI'} />
          <Dependency name={'react-dom'} link={'https://github.com/facebook/react/tree/master/packages/react-dom'} usage={'npm install react-dom --save'} />
        </List>
        <Heading level={4} >IE 10 / 11 support </Heading>
        <Text >If you support legacy browsers then you will need to include babel-polyfill.</Text>
        <List>
          <Dependency name={'babel-polyfill'} link={'https://github.com/babel/babel/tree/7.0/packages/babel-polyfill'} usage={'Provides polyfills necessary for a full ES2015+ environment.'} />
        </List>
      </div>
    );
  }
}

export default Dependencies;
