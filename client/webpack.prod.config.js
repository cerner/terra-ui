// By default eslint assumes packages imported are supposed to be dependencies,
// not devDependencies. Disabling this rule in webpack.conig.js
/* eslint-disable import/no-extraneous-dependencies */

const config = require('./webpack.config');
const path = require('path');

// Create output file
config.output = {
  filename: '[name]-[hash].js',
  path: path.resolve('../app/assets/webpack'),
};

module.exports = config;
