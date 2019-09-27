import ClickHereIcon from '../icon/ClickHereIcon'

## Basic Usage

<div className="tui-illustration-grid">
<div className="tui-illustration-grid-col">

After you have installed the React components in your app and [set up your webpack config to work with Terra UI components](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/getting-started/webpack), you can import the React components in the application. In this minimal example, we import [terra-base](https://engineering.cerner.com/terra-ui/#/components/terra-base/base/base), which is required for use with any Terra UI component as well as the [terra-action-header component](https://engineering.cerner.com/terra-ui/#/components/terra-action-header/action-header/action-header) and render them in a sample app:

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

</div>
<div className="tui-illustration-grid-col tui-illustration-grid-col-illustration">
<ClickHereIcon />
</div>
</div>