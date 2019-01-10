// terraI18n.config.js
const path = require('path');

const i18nConfig = {
  directories: [path.join('node_modules', 'terra-*', 'translations')],
};

module.exports = i18nConfig;
