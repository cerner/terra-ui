import React from 'react';
import { Link } from 'react-router';
/* eslint-disable import/no-extraneous-dependencies */
import List from 'terra-list';
import Heading from 'terra-heading';
/* eslint-enable import/no-extraneous-dependencies */

const ClinicalPackages = () => (
  <div>
    <Heading level={2}>Clinical</Heading>
    <List className="site-nav">
      <List.Item className="site-nav-item" content={<Link to="/components/clinical/action-header">Action Header</Link>} />
      <List.Item className="site-nav-item" content={<Link to="/components/clinical/application">Application</Link>} />
      <List.Item className="site-nav-item" content={<Link to="/components/clinical/detail-view">Detail View</Link>} />
      <List.Item className="site-nav-item" content={<Link to="/components/clinical/error-view">Error View</Link>} />
      <List.Item className="site-nav-item" content={<Link to="/components/clinical/header">Header</Link>} />
      <List.Item className="site-nav-item" content={<Link to="/components/clinical/item-display">Item Display</Link>} />
      <List.Item className="site-nav-item" content={<Link to="/components/clinical/item-view">Item View</Link>} />
      <List.Item className="site-nav-item" content={<Link to="/components/clinical/label-value-view">Label Value View</Link>} />
      <List.Item className="site-nav-item" content={<Link to="/components/clinical/no-data-view">No Data View</Link>} />
    </List>
  </div>
  );

export default ClinicalPackages;
