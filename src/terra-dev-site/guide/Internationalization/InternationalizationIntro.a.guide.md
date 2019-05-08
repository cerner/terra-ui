# Internationalization (i18n) Intro

Terra UI provides builtin translations and LTR / RTL support which makes Terra UI powered apps ready to use in several countries with ease. All apps built with Terra UI are required to set up translations, even if they only intend to support English. As we support apps built for use around the world, we want apps to be prepared for internationalization from the beginning of development. It is easier to add additional locales and translations to an app built with internationalization and translations from the beginning compared to retrofitting internalization and translations into an app as it evolves into new markets.

# Getting Started
Install [terra-base](https://www.npmjs.com/package/terra-base) and [terra-toolkit](https://www.npmjs.com/package/terra-toolkit).

If you're using npm, run the following command:

```
npm install terra-base terra-toolkit --save
```

If you're using yarn, run the following command:

```
yarn add terra-base terra-toolkit
```

# Terra Base
The first part of setting up internalization and translations in your app requires installing and configuring terra-base. This component is designed to manage loading locale information such as translations and locale data, handling locale switching and loading state, and combining customized translation messages from an application with Terra UI component translations.

**Note:** *This component should be your root component and wrap all components in your app. This is to help ensure that the entire application is within the same configured i18n context provided by [react-intl's `<IntlProvider />`](https://github.com/yahoo/react-intl/wiki/Components#intlprovider). The terra-base component provides an abstraction around react-intl's `<IntlProvider />` component which allows code splitting of translations per locale.*

You can [read more about react-intl's API here](https://github.com/yahoo/react-intl/wiki/API).

If your app doesn't have any custom translations, you can set up and use terra-base as follows:

```jsx
import Base from 'terra-base';
import App from './App'; // Your custom app component

// This value could be sent from the server as well
const locale = (navigator.languages && navigator.languages[0])
               || navigator.language
               || navigator.userLanguage
               || 'en';

<Base locale={locale}>
  <App />
</Base>
```

This will load the `en` translations for any Terra UI components you use in your app.

**Note:** *This requires running the [terra-aggregate-translations tool](https://github.com/cerner/terra-aggregate-translations/blob/master/README.md) before starting your server to fully work. See the terra aggregate translation section below for more info.*

If your app has custom translations outside of the ones provided by Terra UI, you can set up and use terra-base as follows:

```jsx
import Base from 'terra-base';
import App from './App'; // Your custom app component
import appTranslations from './aggregated-translations/en.js'; // Your aggregated app translations

// This value could be sent from the server as well
const locale = (navigator.languages && navigator.languages[0])
               || navigator.language
               || navigator.userLanguage
               || 'en';

<Base locale={locale} customMessages={appTranslations}>
  <App />
</Base>
```

[More info on terra-base can be found on its documentation page.](https://engineering.cerner.com/terra-ui/#/components/terra-base/base/base)


# HTML Attributes Which Help With Internationalization
You'll also need to set up the following HTML attributes that help with i18n. You'll want to add a `dir` attribute which denotes the reading direction of your app's content as well as a `lang` attribute which denotes the language of your app.

```html
<html dir="ltr" lang="en">
```

We recommend setting this in your jest setup file as well.

```js
const htmlTag = document.getElementsByTagName('html')[0];
htmlTag.setAttribute('dir', 'ltr');
```

**Note:** *When using terra-toolkit webpack config, the styles are run through postcss-rtl plugin. This requires the presence of the dir attribute being set for directional styles work correctly.*
