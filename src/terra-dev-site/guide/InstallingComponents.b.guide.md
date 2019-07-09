## Installing Components

The first Terra UI packages that you will want to install are [terra-base](https://engineering.cerner.com/terra-ui/#/components/terra-base/base/base) and [terra-aggregate-translations](https://github.com/cerner/terra-aggregate-translations).

If you are using npm, run the following command:
```bash
$ npm install terra-base terra-aggregate-translations --save
```

If you are using yarn, run the following command:
```bash
$ yarn add terra-base terra-aggregate-translations
```

These are required to help set up [the needed internationalization config](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization/internationalization-intro) used with Terra UI.

After those are installed and setup, you can install individual Terra UI components as needed. Each terra component is a separate NPM package. All of the terra packages can be found on the [public npm repository](https://www.npmjs.com/browse/keyword/Terra). To install the Terra NPM package, run a command like:

```bash
$ npm install terra-button --save
```

This will install the terra-button component package as a dependency in the project’s package.json file. Each component page includes similar documentation on how to install the component, as well as includes a basic example of how to use it.

## Dependencies
All Terra UI components have the following peer dependencies:

- [react](https://reactjs.org/docs/react-api.html#overview) - Javascript Library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html#overview) - React package for working with the DOM.
- [terra-base](https://engineering.cerner.com/terra-ui/#/components/terra-base/base/base) - The foundational Terra component required with the usage of any Terra UI component that sets minimal global styles and provides internationalization support for an application.

Some components may have additional peer dependencies, and these will be listed in their package.json. If `UNMET PEER DEPENDENCY` errors are shown when installing terra components, you will need to manually install the peer dependencies listed in the console.

In addition to this, it also required to set up the [terra-aggregate-translations](https://github.com/cerner/terra-aggregate-translations) pre-build tool. This module provides the aggregate-translations pre-build tool to assist with creating the translation and loader files needed for internationalized Terra components to render correctly.
