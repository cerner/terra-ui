/* eslint-disable import/no-extraneous-dependencies */
const config = require('./webpack.base.config');
const webpack = require('webpack');

const devPort = 3808;

// Add webpack dev server with hot module replacement
config.entry['terra-ui'].unshift('webpack/hot/only-dev-server');

config.plugins.push(new webpack.NoErrorsPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());

config.devtool = 'eval';
config.debug = true;
config.output.pathinfo = true;

// Setup webpack dev server to host the file where Rails would have put it
config.output.publicPath = 'http://localhost:3808/webpack/';

// Configure
config.devServer = {
  hot: true,
  publicPath: '/webpack/',
  host: 'localhost',
  port: devPort,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true',
  },
};

module.exports = config;
