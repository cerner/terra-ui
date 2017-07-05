import React from 'react';
import Heading from 'terra-heading';
import Text from 'terra-text';

class SampleWebpackConfiguration extends React.Component {
  render() {
    return (
      <div>
        <Heading level={3} >Example Webpack Configuration</Heading>
        <pre>
          <code>
          {`
const webpack = require('webpack');

const path = require('path');
const Autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const I18nAggregatorPlugin = require('terra-i18n-plugin');
const i18nSupportedLocales = require('terra-i18n/lib/i18nSupportedLocales');
const CustomProperties = require('postcss-custom-properties');
const rtl = require('postcss-rtl');

module.exports = {
  entry: {
    'babel-polyfill': 'babel-polyfill',
    'myEntryPoint': path.resolve(path.join(__dirname, 'src', 'Index')),
  },
  module: {
    loaders: [{
      test: /\.(jsx|js)$/,
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
                rtl(),
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
          `}
          </code>
        </pre>
      </div>
    );
  }
}

export default SampleWebpackConfiguration;
