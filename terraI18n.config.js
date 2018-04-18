// terraI18n.config.js
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const glob = require('glob');

const searchPattern = path.resolve(process.cwd(), 'node_modules', 'terra-*', 'packages', '*', 'translations');

const i18nConfig = {
  directories: glob.sync(searchPattern),
};

module.exports = i18nConfig;
