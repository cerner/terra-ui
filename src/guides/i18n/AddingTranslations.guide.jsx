/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
/* eslint-enable import/no-extraneous-dependencies */
import CreatingTranslations from './CreatingTranslations.md';
import I18ningComponents from './I18n-ingComponents.md';

const AddingTranslations = () => (
  <div>
    <Markdown src={CreatingTranslations} />
    <Markdown src={I18ningComponents} />
  </div>
);

export default AddingTranslations;
