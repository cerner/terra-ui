import React from 'react';
import List from 'terra-list';
import { Link } from 'react-router';
import Heading from 'terra-heading';

const CorePackages = () => {
  return (
    <div>
      <Heading level={2}>Core</Heading>
      <List className="site-nav">
        <List.Item className="site-nav-item" content={<Link to="/components/core/app-delegate">App Delegate</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/arrange">Arrange</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/base">Base</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/badge">Badge</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/button">Button</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/button-group">Button Group</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/content-container">Content Container</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/datepicker">Date Picker</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/demographics-banner">Demographics Banner</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/form">Form</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/grid">Grid</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/heading">Heading</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/i18n">I18n</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/icon">Icon</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/image">Image</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/list">List</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/modal">Modal</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/modal-manager">Modal Manager</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/progress-bar">Progress Bar</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/responsive-element">Responsive Element</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/search-field">Search Field</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/slide-group">Slide Group</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/slide-panel">Slide Panel</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/status">Status</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/table">Table</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/text">Text</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/time-input">Time Input</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/toggle">Toggle</Link>} />
        <List.Item className="site-nav-item" content={<Link to="/components/core/toggle-button">Toggle Button</Link>} />
        </List>
    </div>
  );
}

export default CorePackages;
