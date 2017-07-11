import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import IconHouse from 'terra-icon/lib/icon/IconHouse';
/* eslint-enable import/no-extraneous-dependencies */
import { Link } from 'react-router';

import './Index.scss';

const expand = () => {
  const x = document.getElementById('myTopnav');
  if (x.className === 'doc-site-topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'doc-site-topnav';
  }
};

const DocSiteTopNavigation = () => (
  <div className="doc-site-topnav" id="myTopnav">
    <Link to="/home"><IconHouse /> Home</Link>
    <Link to="/getting-started">Getting Started</Link>
    <Link to="/components">Components</Link>

    <a href="https://github.com/cerner/terra-core">GitHub</a>
    <a href="javascript:void(0);" className="doc-site-topnav-icon" onClick={expand}>&#9776;</a>
  </div>
  );

export default DocSiteTopNavigation;
