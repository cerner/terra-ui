# Building Components Which Include Translations

Below is an example of a component that renders a button with a hard-coded string.

```jsx
import React from 'react';

const Toggle = () => (
  <button type="button">Toggle</button>
);
```

There are various ways to render the string as a translation with react-intl. We recommend using [react-intl's FormattedMessage component](https://github.com/yahoo/react-intl/wiki/Components#formattedmessage). Below is an example highlighting the use react-intl's formatted message component.

```jsx
import React from 'react';
import Base from 'terra-base';
import { FormattedMessage } from 'react-intl';

const Toggle = () => (
  <button type="button">
    <FormattedMessage id="App.toggle" />
  </button>
);

const App = () => (
  <Base className="custom-App" locale="en">
    <Toggle />
  </Base>
);

export default App;
```

**Note:** *The terra-base component doesn't need to wrap individual components with translations, it should be used once to wrap the entire React app.*

By default `<FormattedMessage>` will render the formatted string into a `<span>`. If you need to customize rendering, we recommend using the [render prop version of FormattedMessage](https://github.com/yahoo/react-intl/wiki/Components#formattedmessage).

For example, the terra-button component has a prop for text, however it only accepts strings. We can use the render prop version of the FormattedMessage component to pass a string to the button text prop like so:

```jsx
import React from 'react';
import Base from 'terra-base';
import { FormattedMessage } from 'react-intl';
import Button from 'terra-button';

const Toggle = () => (
  <FormattedMessage id="App.toggle">
    {txt => (
      <Button text={txt} />
    )}
  </FormattedMessage>
);

const App = () => (
  <Base className="custom-App" locale="en">
    <Toggle />
  </Base>
);

export default App;
```

This works well and is how we'd recommend rendering a string when a component's API requires a string. There are some props we need to keep as strings due to the fact that the underlying HTML attribute we pass the prop to only accepts string. As an example, let's say we have a component where the `label` and `placeholder` props map to `aria-label` and `placeholder` HTML attributes on an input.

```jsx
import React from 'react';
import Input from './Input';

<Input label={localeLabel} placeholder={localePlaceholder) />
```

We could continue to use the render prop version of FormattedMessage:

```jsx
<FormattedMessage id="App.localeLabel">
  {localeLabel => (
    <FormattedMessage id="App.localePlaceholder">
      {localePlaceHolder => (
        <Input label={localeLabel} placeholder={localePlaceholder) />
      )}
    </FormattedMessage>
  )}
</FormattedMessage>
```

However, in this case, instead of nesting multiple FormattedMessage components, we'd recommend using [react-intl's injectIntl higher-order component (HOC)](https://github.com/yahoo/react-intl/wiki/API#injectintl).


```jsx
import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

const propTypes = {
  /**
   * @private
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: intlShape.isRequired,
};

const Input = ({ intl }) => (
  <input
    aria-label={intl.formatMessage({ id: 'App.label' })}
    placeholder={intl.formatMessage({ id: 'App.placeholder' })}
  />
);

Input.propTypes = propTypes;

export default injectIntl(Input);
```

The react-intl repo contains additional examples that cover using variables, plurals, numbers, and additional use-cases which can be [found here](https://github.com/yahoo/react-intl/tree/master/examples).
