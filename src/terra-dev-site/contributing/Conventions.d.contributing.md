# Conventions

## CSS Conventions

* Use SCSS for styling components.
* Follow [https://sass-guidelin.es/](https://sass-guidelin.es/) for component styles.
* Avoid using the [CSS Modules `compose` feature](https://github.com/css-modules/css-modules#composition). This can start to blend cross-component concerns and we want each component to work independently.
* Use CSS custom properties for theming. e.g. `var(--terra-button-color, #333);`
  * If a theming property doesn't require a fallback, you can omit it from the CSS custom property. This will allow the browser to fallback to the inherited style for the property. For example, this code will make the button font-family themable, but use the currently inherited font-family value when the variable is not defined.
  `var(--terra-button-font-family);`

## JavaScript Conventions

* Use JSX for React components.
* Follow [Airbnb javascript style guide](https://github.com/airbnb/javascript).

Below includes additional conventions we've adopted outside of the Airbnb javascript style guide.

### Bind function to a component in constructor

```jsx
// Good
constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
}

// Bad
onChange={e => this.handleChange(e)}

// Bad
onChange={this.handleChange.bind(this)}
```

### Prefix event handler with `handle`

```jsx
// Good
handleOnClick(e) {
  const { onClick } = this.prop
  onClick && onClick(e)
}
onClick={this.handleOnClick}

// Bad
onClick={onClick}
```

### Use functional component, if component doesn't require state or lifecycle hooks

```jsx
// Good
const Component = (props) => {
  ...
  return <FinalReactComponent />;
};

// Bad
class Component extends React.Component {
  render() {
    return <FinalReactComponent />;
  }
}
```

### React PropType Conventions

#### Define propTypes and defaultProps before component implementation

```jsx
// Define required props first
const propTypes = {
  text: PropTypes.string.required,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'link', 'outline']),
};

// Required props do not need default prop
const defaultProps = {
  isDisabled: false,
  onClick: () => {},
  variant: 'default',
};


// Component definition
const Button = (props) => {
  ...
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
```

#### Keep propTypes as minimal as possible

```jsx
// good
propName

// Bad
longPropNameThatEveryoneMustTypeForever

// Bad
p
```

#### Mirror DOM wherever possible

```jsx
// Good
className

// Bad
themeType
```

```jsx
// Good
onClick

// Bad
whenClicked
```

#### For boolean props, define defaultProp value as false

Use naming conventions like isOpen, hasValue, isSelected, etc to indicate a true boolean value

```jsx
// Good
isLoading

// Bad
loading
```
#### Exceptions

1. If a boolean prop is used to represent an html boolean attribute, use the html attribute name

```jsx
// Good
<input required />

// Bad
<input required={isRequired} />
```

2. If a subcomponent is designed be used with Higher Order Components with different default behaviors, the defaultProps value could be defaulted to undefined.
  - For example, a list item can be selectable. A default list wants each list item's isSelectable prop default value to be false, while a selectable list wants each list item's isSelectable prop default value to be true. In this instance, the list item should not provide a default.

### For array props, use plurals

```jsx
// Good
items

// Bad
list
```

### Denote required props

```jsx
// Good
MyComponent.propTypes = {
  requiredString: React.PropTypes.string.isRequired
}

// Bad
MyComponent.propTypes = {
  requiredString: React.PropTypes.string
}
```

## Testing Conventions

Terra UI has 2 types of tests:
* Unit tests, using [Jest](https://github.com/facebook/jest) and [Enzyme](https://github.com/airbnb/enzyme)
* Browser tests, using [Webdriver.io](http://webdriver.io/)


### Jest And Enzyme

We use Jest for unit tests and snapshot testing for components.

At minimum, all components should have a "does it render" test:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Link from './Link';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Link />, div);
});
```

If the component accepts classNames, test to ensure it properly merges the passed in the class name with the component class name.

```jsx
it('should merge classes passed in with attributes', () => {
  const button = shallow(<Button className="TestClass" text="text" />);
  expect(button.prop('className')).toContain('TestClass');
});
```

You may also want to test class level functions:

```jsx
it('tracks the number of clicks', () => {
  const div = document.createElement('div');
  const instance = ReactDOM.render(<Link />, div);

  t.equals(instace.state.clicks, 0);
  instance.trackClick();
  t.equals(instace.state.clicks, 1);
});
```

Components that rely on react-intl require setup to work properly with Jest.

Create a file inside of the `jest` directory for the component you are working on named `intl-context-setup.js` with the following code.

```js
import { IntlProvider, intlShape } from 'react-intl';
import messages from '../../translations/en-US.json';

const locale = 'en-US';
const intlProvider = new IntlProvider({ locale, messages }, {});
const { intl } = intlProvider.getChildContext();

const shallowContext = { context: { intl } };
const mountContext = { context: { intl }, childContextTypes: { intl: intlShape } };

const intlContexts = { shallowContext, mountContext };

export default intlContexts;
```

Then, import the `intl-context-setup.js` file in your Jest test. You can then use `intlContexts.shallowContext` and `intlContexts.mountContext` in your tests for react-intl based components.

```js
import React from 'react';
import intlContexts from './intl-context-setup';
import ExampleComponent from '../../src/ExampleComponent';

it('should should shallow render the example component', () => {
  const example = <ExampleComponent />;
  const wrapper = shallow(example, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should should mount the example component', () => {
  const example = <ExampleComponent />;
   const wrapper = mount(example, intlContexts.mountContext);
  expect(wrapper).toMatchSnapshot();
});
```

Reference: [https://github.com/yahoo/react-intl/wiki/Testing-with-React-Intl](https://github.com/yahoo/react-intl/wiki/Testing-with-React-Intl)

## Webdriver.io

We use [Webdriver.io](http://webdriver.io/) for browser testing functionality, visual regression testing, and accessibility testing.

At minimum, components should include accessibility and visual regression tests using the Terra helpers, `Terra.should.beAccessible()` and `Terra.should.matchScreenshot()`;

```js
describe('Compact Button', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/compact-button'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
```

If the component you are testing includes theming variables, you can us the following Terra helpers to test their themability.


```js
// Generates screenshot for each property
Terra.should.themeEachCustomProperty({
  '--color': 'red',
  '--font-size': '20px',
});

// Generates 1 screenshot for the combination of properties
Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--color': 'red',
        '--font-size': '20px',
      },
    });
````

You can find more info on writing webdriver.io tests for terra [here](https://github.com/cerner/terra-toolkit/blob/master/docs/Wdio_Utility.md#writing-tests).