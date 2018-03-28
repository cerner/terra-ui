## Configuring Webpack

[Webpack](https://webpack.js.org/) is a module bundler used to compile modules with dependencies and generate static assets. Terra components rely on specific webpack loaders to render correctly. Below are the webpack loaders needed by Terra components.

### Polyfills
React 16 depends on the collection types ``Map`` and ``Set`` and it depends on ``requestAnimationFrame``, so Terra UI needs a polyfilled environment.
- [babel-polyfill](https://github.com/babel/babel/tree/7.0/packages/babel-polyfill) - Provides polyfills necessary for a full ES2015+ environment.\*
- [raf](https://github.com/babel/babel/tree/7.0/packages/babel-polyfill) - Provides requestAnimationFrame polyfill library.

### CSS Loaders and Plugins
- [style-loader](https://webpack.js.org/loaders/style-loader/) - Adds CSS to the DOM by injecting a ``<style>`` tag.
- [css-loader](https://webpack.js.org/loaders/css-loader/) - The css-loader interprets ``@import`` and ``url()`` like ``import/require()`` and will resolve them. The css-loader is also used to parse CSS Modules.
- [sass-loader](https://webpack.js.org/loaders/sass-loader/) - Loads a SASS/SCSS file and compiles it to CSS.
- [postcss-loader](https://webpack.js.org/loaders/postcss-loader/) - Transforms styles with JS plugins.
- [autoprefixer](https://github.com/postcss/autoprefixer) - Plugin to parse CSS and add vendor prefixes to CSS rules.\*
- [postcss-assets-webpack-plugin](https://github.com/klimashkin/postcss-assets-webpack-plugin#apply-postcss-plugins-to-webpack-css-asset) - Gets the css, extracted by ExtractTextPlugin and apply postcss plugins to it.
- [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) - Transforms W3C CSS Custom Properties to static values.\*
- [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) - Moves all the required ``*.css`` modules in the entry chunks into a separate CSS file.
- [postcss-rtl](https://github.com/vkalinichev/postcss-rtl) - PostCSS-plugin for RTL-adaptivity.

### JavaScript Loaders
- [babel-loader](https://webpack.js.org/loaders/babel-loader/) - Allows transpiling JavaScript files using [Babel](https://github.com/babel/babel) and webpack.
- [file-loader](https://webpack.js.org/loaders/file-loader/) - Instructs webpack to emit the required object as file and to return its public URL.

###### \* Required to support IE legacy browsers

### Example Webpack Configuration
Sample webpack config needed for Terra UI components.

```js
const webpack = require('webpack');

const path = require('path');
const Autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PostCSSAssetsPlugin = require('postcss-assets-webpack-plugin');
const PostCSSCustomProperties = require('postcss-custom-properties');
const PostCSSrtl = require('postcss-rtl');
const aggregateTranslations = require('terra-i18n/scripts/aggregate-translations/aggregate-translations');

aggregateTranslations({ baseDirectory: __dirname });

module.exports = {
  entry: {
    raf: 'raf/polyfill',
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
      test: /\.(scss|css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
            importLoaders: 2,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        }, {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins() {
              return [
                Autoprefixer({
                  browsers: [
                    'ie >= 10',
                    'last 2 versions',
                    'last 2 android versions',
                    'last 2 and_chr versions',
                    'iOS >= 10',
                  ],
                }),
                PostCSSrtl(),
              ];
            },
          },
        },
        {
          loader: 'sass-loader',
        }],
      }),
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: 'file-loader',
    }],
  },
  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),
    new PostCSSAssetsPlugin({
      test: /\.css$/,
      log: false,
      plugins: [
        PostCSSCustomProperties({ preserve: true }),
      ],
    }),
    new webpack.NamedChunksPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'aggregated-translations'), 'node_modules'],

    // See https://github.com/facebook/react/issues/8026
    alias: {
      react: path.resolve(rootPath, 'node_modules', 'react'),
      'react-intl': path.resolve(rootPath, 'node_modules', 'react-intl'),
      'react-dom': path.resolve(rootPath, 'node_modules', 'react-dom'),
    },
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
