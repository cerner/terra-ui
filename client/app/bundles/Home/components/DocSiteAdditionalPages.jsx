import React from 'react';
import { Link } from 'react-router';
import './DocSiteTech.scss';

const DocSiteAdditionalPages = () => (
  <div className="doc-site-tech">
    <div className="card">
      <div className="container">
        <Link to="getting-started"><h4>Getting Started</h4></Link>
        <p>More information about how to get started with Terra.</p>
      </div>
    </div>
    <div className="card">
      <div className="container">
        <Link to="components"><h4>Components</h4></Link>
        <p>See all components available in the Terra ecosystem.</p>
      </div>
    </div>
  </div>
  );

export default DocSiteAdditionalPages;
