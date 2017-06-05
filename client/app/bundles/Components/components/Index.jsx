import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import List from 'terra-list';
import Button from 'terra-button';
/* eslint-enable import/no-extraneous-dependencies */


const Components = () => (
  <div>
    <h2>Core</h2>
    <List >
      <List.Item content={<Button variant="link" href="/components/core/arrange">Arrange</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/base">Base</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/badge">Badge</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/button">Button</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/button-group">Button Group</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/content">Content</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/content-container">Content Container</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/datepicker">Date Picker</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/demographics-banner">Demographics Banner</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/form">Form</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/grid">Grid</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/i18n">I18n</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/icon">Icon</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/image">Image</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/list">List</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/modal">Modal</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/progress-bar">Progress Bar</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/responsive-element">Responsive Element</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/slide-panel">Slide Panel</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/standout">Standout</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/status">Status</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/table">Table</Button>} />
      <List.Item content={<Button variant="link" href="/components/core/title">Title</Button>} />
    </List>
  </div>
);

export default Components;
