## Theming

Terra UI provides a default theme for all of its components and has theming capabilities in various components via [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) a.k.a CSS variables. We recommend using the [postcss-loader ](https://webpack.js.org/loaders/postcss-loader/) for webpack, along with the [postcss-custom-properties plugin](https://github.com/postcss/postcss-custom-properties), to compile these CSS custom properties down to static values. This ensures the theme styles render in modern browsers, as well as browsers which [do not support CSS custom properties](http://caniuse.com/#search=custom%20properties).

### Themable Components
Below is the list of Terra components that are capable of custom theming:
