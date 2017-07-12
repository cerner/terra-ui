import React from 'react';
import { Link } from 'react-router';
import './HomeTech.scss';

const HomeMoreInfo = () => (
  <div className="home-tech">
    <div className="home-card">
      <div className="home-container">
        <Link to="getting-started"><h4>Getting Started</h4></Link>
        <p>More information about how to get started with Terra.</p>
      </div>
    </div>
    <div className="home-card">
      <div className="home-container">
        <Link to="components"><h4>Components</h4></Link>
        <p>See all components available in the Terra ecosystem.</p>
      </div>
    </div>
  </div>
  );

export default HomeMoreInfo;
