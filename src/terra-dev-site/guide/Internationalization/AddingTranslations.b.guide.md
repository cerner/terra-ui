# Adding Translations To Components

When adding translations to a component, we recommend putting the translations in a directory named `translations`. The aggregate translations tool will look for translations in [the following directories](https://github.com/cerner/terra-toolkit/blob/master/scripts/aggregate-translations/defaultSearchPatterns.js) by default.

Here is an example directory setup:

```
src/
  ↳ MyComponent.jsx
translations/
  ↳ en.json
  ↳ es.json
```