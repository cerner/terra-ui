# Testing Components Which Include Translations

We recommend using [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) for writing React component unit tests.

When testing components that interact with react-intl, typically the component being tested needs to be wrapped with an `IntlProvider` to work correctly. Along with this, components need translations provided to IntlProvider's `messages` prop.

To ensure translations are available for your Jest tests, we recommend adding the aggregate translations function to your Jest setup file like so:

```js
import aggregateTranslations from 'terra-toolkit/scripts/aggregate-translations/aggregate-translations';

aggregateTranslations();
```

We also recommend using [enzyme-react-intl](https://github.com/joetidee/enzyme-react-intl) which provides helpers for shallow rendering with Intl, mounting with Intl, and passing messages to the the IntlProvider component.

A test using enzyme-react-intl looks like:

```jsx
// Toggle.test.jsx
import React from 'react';
import { shallowWithIntl, mountWithIntl, loadTranslationObject } from 'enzyme-react-intl';

import Toggle from '../../src/Toggle';
import { messages } from '../../aggregated-translations/en';

loadTranslationObject(messages);

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

**Note** *The terra-base component uses terra-i18n which currently uses `require.ensure` to handle code splitting of translations. Jest does not support `require.ensure` out of the box. Because of this, we do not recommend using terra-base in your Jest tests.*