import React from 'react';
import List from 'terra-list';
import { Link } from 'react-router';
import Heading from 'terra-heading';

const ClinicalPackages = () => {
  return (
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
}

export default ClinicalPackages;
