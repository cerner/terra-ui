/* eslint-disable import/no-extraneous-dependencies */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

// add scss path for each terra module.
// gets include path from each module in package.json dependencies

const modulePaths = Object.keys(require('./package.json').dependencies)
  .reduce((paths, module) => {
    // eslint-disable-next-line global-require
    const includePaths = require(module).includePaths;

    return paths.concat(includePaths);
  }, []);

module.exports = {
  // directory to find entry point
  context: path.join(__dirname, 'app', 'modules'),

  // define entry point
  entry: {
    'terra-ui': ['./terra-ui.js'],
  },

  // define output directory and filename
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public', 'webpack'),
  },

  plugins: [
    // commonsChunkPlugin for code splitting
    new webpack.optimize.CommonsChunkPlugin({
      name: 'terra-ui',
    }),

    // create a css file instead of bundling it in js
    new ExtractTextPlugin('[name].css'),

    // this is used to make sure an asset manifest is created for the webpack-rails gem
    // so that we can  We only need assetsByChunkName
    new StatsPlugin('manifest.json', {
      chunkModules: false,
      source: false,
      chunks: false,
      modules: false,
      assets: true,
    }),
  ],

  module: {
    loaders: [
      {
        // js and jsx extentions, traspiled with babel
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        // scss/css extentions, autoprefixed, extracted into css
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
      },
    ],
  },

  // https://autoprefixer.github.io/
  postcss: [
    autoprefixer({
      browsers: [
        'ie >= 9',
        'last 2 versions',
        'last 2 android versions',
        'last 2 and_chr versions',
        'iOS >= 8',
      ],
    }),
  ],

  // add scss paths for each module. Shortens import syntax for scss.
  sassLoader: {
    includePaths: modulePaths,
  },
};
