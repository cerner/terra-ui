## Theming

Terra UI provides theming capabilities in various components via [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).

### Terra default theme
Terra UI provides a default theme for components via [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) a.k.a CSS variables.
For teams that do not have theming needs outside of the default terra theme, we recommend using the [PostCSS loader for webpack ](https://github.com/postcss/postcss-loader/) along with the [CustomProperties plugin](https://github.com/postcss/postcss-custom-properties) to compile CSS custom properties down to static values. This ensures the theme styles render in modern browsers, as well as those which [do not support CSS custom properties](http://caniuse.com/#search=custom%20properties).


__Recommended webpack setup to only support default theme:__
```js
// Require the PostCSS Custom Properties plugin
const CustomProperties = require('postcss-custom-properties');

...

// In your webpack config, include the PostCSS plugin in the module object
{
  loader: 'postcss-loader',
  options: {
    plugins() {
      return [
        CustomProperties(),
      ];
    },
  },
},
```

### First class Cerner UX themes
Cerner UX is in the process of designing first-class themes for Terra UI. Terra UI currently supports the following first-class custom themes:
* `consumer`

### Changing the default theme
For teams that want to use one of the first class Cerner UX themes as their default theme, we recommend using the [PostCSS loader for webpack ](https://github.com/postcss/postcss-loader/) along with the [CustomProperties plugin](https://github.com/postcss/postcss-custom-properties) in addition to the [webpack sass-loader](https://github.com/webpack-contrib/sass-loader) to specify a default theme.

The `$default-theme` variable should be a single string value of the name of a first class Cerner UX theme. e.g. `$default-theme: ux-specified-theme-1;`

This will replace the default terra CSS custom properties values with those specified in the default theme and compile them down to static values.

__Recommended webpack setup for changing the default theme:__
```js
// Require the PostCSS Custom Properties plugin
const CustomProperties = require('postcss-custom-properties');

...

// In your webpack config, include the following in the module object.
{
  loader: 'postcss-loader',
  options: {
    plugins() {
      return [
        CustomProperties(),
      ];
    },
  },
  {
    loader: 'sass-loader',
    options: {
      data: '$default-theme: ux-specified-theme-1;',
    },
},
```

### Using the theme provider to dynamically switch between themes
Terra UI offers a theme provider component to theme various Terra UI components via CSS custom properties. This is accomplished by setting a CSS class which contains defined CSS custom properties for the specified theme on the DOM element that wraps the children rendered by the theme provider.

Note: The CSS custom properties applied via the theme provider component only work in browsers which have native support for CSS custom properties.

For teams that want to use one of the first class Cerner UX themes and include additional themes for users to switch between, we recommend using the [PostCSS loader for webpack ](https://github.com/postcss/postcss-loader/) along with the [CustomProperties plugin](https://github.com/postcss/postcss-custom-properties). Be sure to pass the following config to the CustomProperties plugin: `{ preserve: true, warnings: false }`. This will compile the default values for the CSS custom properties for modern browsers as well as those which do not support CSS custom properties. Setting the `preserve: true` option will keep the CSS custom properties defined after the compiled static values, allowing them to be dynamically updated in modern browsers that support CSS custom properties natively.

In addition to using the CustomProperties plugin, you will use the [webpack sass-loader](https://github.com/webpack-contrib/sass-loader) to specify a default theme and additional bundled themes using the `$default-theme` and `$bundled-themes` SCSS variables.

The `$default-theme` variable should be a single string value of the name of a first class Cerner UX theme and will replace the terra default CSS custom properties values with those specified in the set theme.

The `$bundled-themes` variable should be a single string value or a comma separated list of strings of the names of a first class Cerner UX themes. It will generate classes which contain CSS custom properties for the bundled themes. These classes can then be used with the terra theme-provider component to dynamically switch between themes.


__Recommend webpack setup for this use case:__
```js
// Require the PostCSS Custom Properties plugin
const CustomProperties = require('postcss-custom-properties');

...

// In your webpack config, include the following in the module object.
{
  loader: 'postcss-loader',
  options: {
    plugins() {
      return [
        CustomProperties({ preserve: true, warnings: false }),
      ];
    },
  },
  {
    loader: 'sass-loader',
    options: {
      data: '$default-theme: ux-specified-theme-1; $bundled-themes: ux-specified-theme-2, ux-specified-theme-3',
    },
},
```
