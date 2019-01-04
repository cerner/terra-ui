# Adding Translations For A Locale Not Supported By Terra UI

Terra UI provides translations for [the following locales](https://github.com/cerner/terra-toolkit/blob/master/scripts/aggregate-translations/i18nSupportedLocales.js) for any string used in our components. In some cases, you may need to support locales outside of the ones we provide by default.

As an example, let's say you need to support Polish (pl) in your app.

In the aggregate translation functions, set the locales option and include the `pl` locale.

If you only need to support English and Polish, you can call `aggregateTranslations` function with the following:

```js
const aggregateTranslations = require ('terra-toolkit/scripts/aggregate-translations/aggregate-translations');

aggregateTranslations({ locales: ['en', 'pl']});
```

If you want to support all of the Terra UI supported locales in addition to Polish, you can call `aggregateTranslations` function with the following:

```js
const aggregateTranslations = require ('terra-toolkit/scripts/aggregate-translations/aggregate-translations');
const supportedLocales = require('terra-toolkit/scripts/aggregate-translations/i18nSupportedLocales');


aggregateTranslations({ locales: [...supportedLocales, 'pl']});
```

Similarly, [you can add a `terraI18n.config.js` file to the root of your project with options to pass to aggregate-translations when its called](https://github.com/cerner/terra-toolkit/blob/master/docs/AggregateTranslations.md#terrai18nconfig-example).

**Note** *When aggregating a locale not supported by Terra UI, you will see two types of warning messages*

```
WARNING: pl is NOT a Terra supported locale. Creating an aggregate translation file for pl, but be sure to include the appropriate translations messages for each terra component used in your application otherwise the translations will fail and the fallback will be displayed.
```

The above message is a general warning from the `aggregateTranslations` function reminding you to include translations for the unsupported Terra UI locale you are adding.

```
There was an error reading your translations file /Users/MyComputer/repos/terra-sandbox/node_modules/terra-alert/translations/pl.json.

Exception Message: ENOENT: no such file or directory, open '/Users/MyComputer/repos/terra-sandbox/node_modules/terra-alert/translations/pl.json'
```

The above message is a general warning that occurs for each Terra UI component your app uses noting that it does not provide translations for the locales you are adding beyond the default locales supported by Terra UI.

To resolve these warnings after running the aggregate-translations tool, you will need to add the terra name-spaced translation keys with the correct translations as `.json` file for each non-supported locale in your app's translations directory.

We recommend copying all of terra name-space translations keys found in the `aggregate-translations/en.js` file as the basis for your new translations file. This will be a compiled list of the terra component translations used in your app.

For example:

```
src/
  ↳ MyComponent.jsx
translations/
  ↳ en.json
  ↳ es.json
  ↳ pl.json // Includes all keys from aggregate-translations/en.js in polish translations, in addition to your custom translations
```