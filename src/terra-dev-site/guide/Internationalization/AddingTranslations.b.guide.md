# Adding Translations To Components

When adding translations to a component, we recommend putting the translations in a directory named `translations`. The aggregate translations tool will look for translations in [the following directories](https://github.com/cerner/terra-aggregate-translations/blob/master/config/defaultSearchPatterns.js) by default. The default search pattern will look for translations a maximum of three levels deep.

Here is an example directory setup:

```
src/
  ↳ MyComponent.jsx
translations/
  ↳ en.json
  ↳ es.json
```

Here is an example translation file.

```json
{
  "myApp.componentName.error": "Error.",
  "myApp.componentName.warning": "Warning.",
  "myApp.componentName.success": "Success."
}
```

Translations must be included for each locale the app intends to support. At a minimum, apps must include `en` translations as it is intended to be the fallback locale for terra-base.

Translation keys should be namespaced and unique to prevent translation key collision from other dependencies.
