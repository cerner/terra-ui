/* eslint-disable import/no-extraneous-dependencies */
const CleanPlugin = require('clean-webpack-plugin');
const config = require('./webpack.base.config');
const webpack = require('webpack');

// Add optimize plugins normally found in the -p (production flag) in CLI
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
  },
}));
config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());

// Set production NODE environment variable to remove dead code using UglifyJS
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
}));

// Setup long-term caching by including a hash on the end of the bundle names
config.output.filename = '[name]-[hash].js';

// Clean build before running
config.plugins.push(new CleanPlugin('public/webpack'));

module.exports = config;
