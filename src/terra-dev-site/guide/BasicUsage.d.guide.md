## Basic Usage

After you have installed the React components in your app and [set up your webpack config to work with Terra UI components](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/getting-started/webpack), it's possible to import the React components in the application. In this minimal example, we import terra-base, which is required for use with any Terra UI component as well as the terra-action-header component and render them in a sample app:

```jsx
import React from 'react';
import Base from 'terra-base';
import ActionHeader from 'terra-action-header';

const App = () => (
  <Base className="custom-App" locale="en">
    <ActionHeader
      title="Hello world"
      onBack={() => alert('You clicked back!')}
      onClose={() => alert('You clicked close!')}
    />
  </Base>
);

export default App;
```
