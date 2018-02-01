## Features

* Cross-browser support
  * Terra components work in the latest stable release of the following browsers:
    * Chrome
    * Firefox
    * Edge
    * Safari
    * Mobile Safari
    * Chrome for Android
  * Terra also supports the following legacy IE browsers:
    * Internet Explorer 11*
    * Internet Explorer 10*
* Style encapsulation via [CSS Modules](https://github.com/css-modules/css-modules)
* Configurable theming via [CSS custom properties](https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/)
* Internationalization and Localization support
* Design Standard based consistency
* Built for responsive web design

*  If you support legacy browsers, you will need to include the following:
- [babel-polyfill](https://github.com/babel/babel/tree/7.0/packages/babel-polyfill) - Provides polyfills necessary for a full ES2015+ environment.
- [autoprefixer](https://github.com/postcss/autoprefixer) - Plugin to parse CSS and add vendor prefixes to CSS rules.
- [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) - Transforms W3C CSS Custom Properties to static values.
