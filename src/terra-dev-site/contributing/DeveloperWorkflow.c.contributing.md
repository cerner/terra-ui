# Development Workflow

## Create Tech Design
It's good to create a tech design on the related GitHub issue you'll be working on. This allows for discussion with the [terra team](https://github.com/orgs/cerner/teams/terra) before getting deep into development. Once you feel the tech design has been landed on, feel free to open up a pull request. Based on the changes introduced in the PR, the change will either be considered a small or large change and follow review guidelines documented in the [terra governance modal](https://github.com/cerner/terra-ui/blob/master/GOVERNANCE.md).

Based on feedback you receive from tech design review, incorporate it into your implementation. It's helpful to update the tech design with feedback you incorporate.

## Tech Design Format

```
# Tech Design
## Expected behavior
/* Describe expected behavior, include visuals if helpful */

## Code Sample
/* Describe proposed code change at high-level */

/* Include sample code if applicable */

## Props
/* Describe react props */

| Prop Name | Type | Is Required | Default Value | Description |
|-|-|-|-|-|
| text |string | required | none | Sets the button text. |
| href |string | optional | none | Sets the href. When set will render the component as an anchor tag. |

## Responsiveness
/* Describe intended responsive behavior if applicable */

## Internationalization
/* Describe intended internationalization behavior if applicable */

## Accessibility
/* Describe intended accessible behavior if applicable */
```

## Starting Development
The following guide covers the development workflow for the terra monorepos that are managed with [Lerna](https://lernajs.io/) to handle shared and cross-package dependencies.

* [terra-core](https://github.com/cerner/terra-core)
* [terra-framework](https://github.com/cerner/terra-framework)
* [terra-clinical](https://github.com/cerner/terra-clinical)

Components along with their docs and tests are organized as individual packages that share similar tooling. You can read more about the [directory structure of these components here](https://github.com/cerner/generator-terra-module#generated-package).

## Install Dependencies

After you’ve gone through the [git workflow](#/contributing/terra-ui/git-workflow) and created your branch, the next step will be to install the project dependencies.

Run the following command to install the npm dependencies.

`npm install`

Make sure you’re using the correct NodeJS version (we recommend using [nvm](https://github.com/creationix/nvm) to install and manage node on your machine)

Run the following command to switch the node version required for the project.

`nvm use`

If your terminal tells you that you don’t have that version installed, run

`nvm install`

## Starting The Development Server

Running `npm start` will start up the development server. It will be available at http://localhost:8080/

You can navigate to different component documentation pages. These pages are auto-generated via files in the  [terra-dev-site](https://github.com/cerner/terra-dev-site) doc directories found in each package directory.

## Starting The Development Server For Internet Explorer 10

// TODO

## Follow Component Standards
As you work on your code changes, ensure the components follow [the Terra UI component standards](https://github.com/cerner/terra-core/wiki/Component-Features).

## Running Lint Scripts
For Terra UI projects, we’ve created our own [ESLint config](https://github.com/cerner/eslint-config-terra) and [Stylelint config](https://github.com/cerner/stylelint-config-terra).

* Our ESLint config is based on [Airbnb’s JavaScript style guide](https://github.com/airbnb/javascript).
* Our Stylelint config is based on [sass-guidelin.es](https://sass-guidelin.es/).

Inside the monorepos, running the following command in the root directory to run both ESLint and Stylelint for all packages.

`npm run lint`

* You can also run `npm run lint:js` and this will only run ESLint.
* You can also run `npm run lint:scss` and this will only run StyleLint.

Along with being able to run these scripts across the entire project, you can run these scripts in individual package directories.

Change directories to the specific package in your terminal, e.g. `cd packages/terra-button`, and run the same lint commands for ESLint and Stylelint.

```
npm run lint
npm run lint:js
npm run lint:scss
```

We recommend that you install a plugin to your editor to run [ESLint](https://eslint.org/docs/user-guide/integrations#editors) and [Stylelint](https://stylelint.io/user-guide/complementary-tools/#editor-plugins) automatically which will then show you any errors inline.

## Testing Components

Terra UI has 2 types of tests:
* Unit tests, using Jest
* Browser tests, using Webdriver.io

### Jest
We use Jest for testing, including unit tests for functionality and snapshot testing for components.

If you make intentional changes to an existing component, you will need to update its snapshot:
npm test -- -u

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

Be careful when adding tests; we need to be wary of when we're effectively testing the React internals as opposed to our own components.

#### Running Jest Tests

// TODO

### Webdriver.io (WDIO)

// TODO

#### Visual Regression Testing

// TODO

#### Running Webdriver Tests

// TODO

### A Note On Testing

Note that the test suite needs to pass for your changes to be accepted, so it's worth running this locally during development and before committing.

Even though we'd like to automate as much as possible, a comprehensive manual test is never a bad idea, especially if you're working in an area of the codebase that's particularly business critical. Reviewers are also encouraged to put UI changes through their paces, to act as a last line of defense before merging.

## Updating The Changelog

// TODO

## Submitting a Pull Request
Check out the [git workflow](#/contributing/terra-ui/git-workflow) to follow the steps for submitting a pull request after your development is ready for review. From there, you'll follow the git workflow until the pull request is merged.
