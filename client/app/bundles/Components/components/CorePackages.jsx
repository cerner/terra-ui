import React from 'react';
import { Link } from 'react-router';
/* eslint-disable import/no-extraneous-dependencies */
import List from 'terra-list';
import Heading from 'terra-heading';
/* eslint-enable import/no-extraneous-dependencies */

const CorePackages = () => (
  <div>
    <List className="vertical-menu">
      <List.Item content={<Heading level={2}>Core</Heading>} />
      <List.Item content={<Link to="/components/core/app-delegate">App Delegate</Link>} />
      <List.Item content={<Link to="/components/core/arrange">Arrange</Link>} />
      <List.Item content={<Link to="/components/core/base">Base</Link>} />
      <List.Item content={<Link to="/components/core/badge">Badge</Link>} />
      <List.Item content={<Link to="/components/core/button">Button</Link>} />
      <List.Item content={<Link to="/components/core/button-group">Button Group</Link>} />
      <List.Item content={<Link to="/components/core/content-container">Content Container</Link>} />
      <List.Item content={<Link to="/components/core/datepicker">Date Picker</Link>} />
      <List.Item content={<Link to="/components/core/demographics-banner">Demographics Banner</Link>} />
      <List.Item content={<Link to="/components/core/form">Form</Link>} />
      <List.Item content={<Link to="/components/core/grid">Grid</Link>} />
      <List.Item content={<Link to="/components/core/heading">Heading</Link>} />
      <List.Item content={<Link to="/components/core/i18n">I18n</Link>} />
      <List.Item content={<Link to="/components/core/icon">Icon</Link>} />
      <List.Item content={<Link to="/components/core/image">Image</Link>} />
      <List.Item content={<Link to="/components/core/list">List</Link>} />
      <List.Item content={<Link to="/components/core/modal">Modal</Link>} />
      <List.Item content={<Link to="/components/core/modal-manager">Modal Manager</Link>} />
      <List.Item content={<Link to="/components/core/progress-bar">Progress Bar</Link>} />
      <List.Item content={<Link to="/components/core/responsive-element">Responsive Element</Link>} />
      <List.Item content={<Link to="/components/core/search-field">Search Field</Link>} />
      <List.Item content={<Link to="/components/core/slide-group">Slide Group</Link>} />
      <List.Item content={<Link to="/components/core/slide-panel">Slide Panel</Link>} />
      <List.Item content={<Link to="/components/core/status">Status</Link>} />
      <List.Item content={<Link to="/components/core/table">Table</Link>} />
      <List.Item content={<Link to="/components/core/text">Text</Link>} />
      <List.Item content={<Link to="/components/core/time-input">Time Input</Link>} />
      <List.Item content={<Link to="/components/core/toggle">Toggle</Link>} />
      <List.Item content={<Link to="/components/core/toggle-button">Toggle Button</Link>} />
    </List>
  </div>
  );

export default CorePackages;
