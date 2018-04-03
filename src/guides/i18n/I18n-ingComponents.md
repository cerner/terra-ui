
### Pass translated message as props

Assumption, the `Component` has an ancestor of I18nProvider. Like:

```javascript
<I18nProvider>
  ...
  <Component/>
  ...
</I18nProvider>
```

```javascript
import React, { PropTypes } from 'react';
import { injectIntl, intlShape } from 'terra-base';

const propTypes = {
   /**
   * Internationalization object with translation APIs. Provided by `injectIntl`.
   */
    intl: intlShape.isRequired,
};
// Assume we have following translation
// {
//   'Terra.hello': 'Welcome',
//   'Terra.name': 'Welcome, {name}',
// }
const Component = ({ intl }) => (
  <span title={ intl.formatMessage({ id: 'Terra.hello' }) }>
    { intl.formatMessage({ id: 'Terra.hello' }, { name: 'Terra' }) }  
  </span>
);
</summary>

Component.propTypes = propTypes;

export default injectIntl(Component);
```

### Display translated message without default message fallback

If you just want to display translated message, you can try to use [FormattedMessage](https://github.com/yahoo/react-intl/wiki/Components#formattedmessage).

```javascript
import React from 'react';
import { FormattedMessage } from 'react-intl';

const Component = () => (
  <FormattedMessage id='Terra.hello' values={{ name: 'Terra' }} />
)

export default Component;
```

### Display translated message with message fallback

Provide the default message for the translation by using `defaultMessages`.

```javascript
import React from 'react';
import { FormattedMessage } from 'react-intl';

const message = defineMessages({
  greeting: {
    id: 'Terra.hello',
    description: 'Message to greet the user.',
    defaultMessage: 'Wecome Terra',
  },
});

const Component = () => (
  <FormattedMessage {...message.greeting} />
)

export default Component;
```
