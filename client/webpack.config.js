const webpack = require('webpack');
const { resolve } = require('path');

const ManifestPlugin = require('webpack-manifest-plugin');
const webpackConfigLoader = require('react-on-rails/webpackConfigLoader');

const configPath = resolve('..', 'config');
const { devBuild, manifest, webpackOutputPath, webpackPublicOutputDir } = webpackConfigLoader(configPath);
const Autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const I18nAggregatorPlugin = require('terra-i18n-plugin');
/* eslint-disable import/no-extraneous-dependencies */
const i18nSupportedLocales = require('terra-i18n/lib/i18nSupportedLocales');
/* eslint-enable import/no-extraneous-dependencies */

const config = {
  context: resolve(__dirname),
  entry: {
    'commons-bundle': ['babel-polyfill'],
    'components-bundle': ['./app/bundles/Components/startup/registration'],
    'arrange-bundle': ['./app/bundles/Arrange/startup/registration'],
    'base-bundle': ['./app/bundles/Base/startup/registration'],
    'badge-bundle': ['./app/bundles/Badge/startup/registration'],
    'button-bundle': ['./app/bundles/Button/startup/registration'],
    'button-group-bundle': ['./app/bundles/ButtonGroup/startup/registration'],
    'content-bundle': ['./app/bundles/Content/startup/registration'],
    'content-container-bundle': ['./app/bundles/ContentContainer/startup/registration'],
    'date-picker-bundle': ['./app/bundles/DatePicker/startup/registration'],
    'demographics-banner-bundle': ['./app/bundles/DemographicsBanner/startup/registration'],
    'form-bundle': ['./app/bundles/Form/startup/registration'],
    'grid-bundle': ['./app/bundles/Grid/startup/registration'],
    'i18n-bundle': ['./app/bundles/I18n/startup/registration'],
    'icon-bundle': ['./app/bundles/Icon/startup/registration'],
    'image-bundle': ['./app/bundles/Image/startup/registration'],
    'list-bundle': ['./app/bundles/List/startup/registration'],
    'modal-bundle': ['./app/bundles/Modal/startup/registration'],
    'progress-bar-bundle': ['./app/bundles/ProgressBar/startup/registration'],
    'responsive-element-bundle': ['./app/bundles/ResponsiveElement/startup/registration'],
    'slide-panel-bundle': ['./app/bundles/SlidePanel/startup/registration'],
    'standout-bundle': ['./app/bundles/Standout/startup/registration'],
    'status-bundle': ['./app/bundles/Status/startup/registration'],
    'table-bundle': ['./app/bundles/Table/startup/registration'],
    'title-bundle': ['./app/bundles/Title/startup/registration'],
  },

  output: {
    // Name comes from the entry section.
    filename: '[name]-[hash].js',

    // Leading slash is necessary
    publicPath: `/${webpackPublicOutputDir}`,
    path: webpackOutputPath,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'aggregated-translations'), 'node_modules'],
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
    new ManifestPlugin({ fileName: manifest, writeToFileEmit: true }),
    new I18nAggregatorPlugin({
      baseDirectory: __dirname,
      supportedLocales: i18nSupportedLocales,
    }),
    new webpack.NamedChunksPlugin(),
  ],

  module: {
    rules: [
      {
        test: require.resolve('react'),
        use: {
          loader: 'imports-loader',
        },
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
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
                ];
              },
            },
          }, {
            loader: 'sass-loader',
            options: {
              data: `@import "${path.resolve(path.join(__dirname, 'node_modules/terra-legacy-theme/lib/LegacyTheme.scss'))}"; $terra-bidi: true;`,
            },
          }],
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
    ],
  },
  resolveLoader: {
    modules: [path.resolve(path.join(__dirname, 'node_modules'))],
  },
};

module.exports = config;

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map';
} else {
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
