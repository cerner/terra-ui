## Configuring Webpack

[Webpack](https://webpack.js.org/) is a module bundler used to compile modules with dependencies and generate static assets. Terra components rely on specific webpack loaders to work correctly. Below are the webpack loaders you will need for Terra components.

### CSS plugins/loaders

- [style-loader](https://github.com/webpack-contrib/style-loader) - Adds CSS to the DOM by injecting a ``<style>`` tag.
- [css-loader](https://github.com/webpack-contrib/css-loader) - The css-loader interprets @import and url() like import/require() and will resolve them. The css-loader is also used to parse CSS Modules.
- [sass-loader](https://github.com/webpack-contrib/sass-loader) - Loads a SASS/SCSS file and compiles it to CSS.
- [postcss-loader](https://github.com/postcss/postcss-loader) - Transforms styles with JS plugins.
- [autoprefixer](https://github.com/postcss/autoprefixer) - Plugin to parse CSS and add vendor prefixes to CSS rules.
- [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) - Transforms W3C CSS Custom Properties to static values.
- [node-sass](https://github.com/sass/node-sass) Allows native compilation of scss files.
- [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) - The extract-text-webpack-plugin moves all of the required css modules into their own separate css file.

### JavaScript Loaders
- [babel-loader](https://github.com/babel/babel-loader) - Allows transpiling JavaScript files using Babel and webpack.
- [terra-i18n-plugin](https://github.com/cerner/terra-core/tree/master/packages/terra-i18n-plugin) - Examines dependencies for translations files then aggregates them into a single file per locale.

### Example Webpack Configuration
Sample webpack config needed for Terra UI v1.0.0 components.

```js
const webpack = require('webpack');

const path = require('path');
const Autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const I18nAggregatorPlugin = require('terra-i18n-plugin');
const i18nSupportedLocales = require('terra-i18n/lib/i18nSupportedLocales');
const CustomProperties = require('postcss-custom-properties');


module.exports = {
  entry: {
    'babel-polyfill': 'babel-polyfill',
    'myEntryPoint': path.resolve(path.join(__dirname, 'src', 'Index')),
  },
  module: {
    loaders: [{
      test: /.(jsx|js)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /.(scss|css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
            importLoaders: 2,
            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
          },
        }, {
          loader: 'postcss-loader',
          options: {
            plugins() {
              return [
                Autoprefixer({
                  browsers: [
                    'ie >= 10',
                    'last 2 versions',
                    'last 2 android versions',
                    'last 2 and_chr versions',
                    'iOS >= 8',
                  ],
                }),
                CustomProperties(),
              ];
            },
          },
        },
        {
          loader: 'sass-loader',
        }],
      }),
    },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),
    new I18nAggregatorPlugin({
      baseDirectory: __dirname,
      supportedLocales: i18nSupportedLocales,
    }),
    new webpack.NamedChunksPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'aggregated-translations'), 'node_modules'],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  resolveLoader: {
    modules: [path.resolve(path.join(__dirname, 'node_modules'))],
  },
};
```
