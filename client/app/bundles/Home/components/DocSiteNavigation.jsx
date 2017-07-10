import React from 'react';
import IconHouse from 'terra-icon/lib/icon/IconHouse';
import './DocSiteNavigation.scss';

class DocSiteNavigation extends React.Component {
  constructor() {
    super();
    this.expand = this.expand.bind(this);
  }

  expand() {
      var x = document.getElementById("myTopnav");
      if (x.className === "doc-site-topnav") {
          x.className += " responsive";
      } else {
          x.className = "doc-site-topnav";
      }
  }

  render() {
    return (
      <div className="doc-site-topnav" id="myTopnav">
        <a href="/"><IconHouse /> Home</a>
        <a href="/getting-started">Getting Started</a>
        <a href="/components">Components</a>
        <a href="https://github.com/cerner/terra-core">GitHub</a>
        <a href="javascript:void(0);" className="doc-site-topnav-icon" onClick={this.expand}>&#9776;</a>
      </div>
    );
  }
}

export default DocSiteNavigation;
