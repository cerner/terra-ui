import React  from 'react';
import './Home.scss';

class Home extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}

export default Home;
