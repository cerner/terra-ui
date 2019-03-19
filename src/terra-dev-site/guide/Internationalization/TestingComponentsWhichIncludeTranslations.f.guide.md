# Testing Components Which Include Translations

We recommend using [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) for writing React component unit tests.


We also recommend using [terra-enzyme-intl](https://github.com/cerner/terra-enzyme-intl) which provides helpers for testing components that use react-intl with enzyme.

A test using terra-enzyme-intl looks like:

```jsx
// Toggle.test.jsx
import React from 'react';
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';

import Toggle from '../../src/Toggle';

describe('<Toggle />', () => {
  it('shallow renders Toggle component', () => {
    const wrapper = shallowWithIntl(<Toggle />);
    expect(wrapper).toMatchSnapshot();
  });

  it('mounts a Toggle component', () => {
    const wrapper = mountWithIntl(<Toggle />);
    expect(wrapper).toMatchSnapshot();
  });
});
```

## Aggregating translations for Jest tests
With [terra-enzyme-intl](https://github.com/cerner/terra-enzyme-intl), aggregating translations for Jest tests is not necessary. The terra-enzyme-intl package will use the translation keys for the translation strings  instead of the actual translations. If you want to test the actual translation string values, we recommend testing translations with a tool like webdriver.io.

However, if you require translations in your Jest tests, you can create a `jestglobalsetup.js` file in your app.

Add the following code to `jestglobalsetup.js`:

```js
const aggregateTranslations = require('terra-toolkit/scripts/aggregate-translations/aggregate-translations');

module.exports = () => {
  aggregateTranslations();
};
```

In your app's jest config file, add the following:

```js
globalSetup: './jestglobalsetup.js',
// This allows jest to resolve files from the generated aggregated-translations in addition to node_modules
moduleDirectories: [
  'aggregated-translations',
  'node_modules',
],
```

**Note** *The terra-base component uses terra-i18n which currently uses `require.ensure` to handle code splitting of translations. Jest does not support `require.ensure` out of the box. Because of this, we do not recommend using terra-base in your Jest tests.*