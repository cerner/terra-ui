import React from 'react';
import DocTemplate from 'terra-doc-template';
import List from 'terra-list';
import ThemingDoc from './Theming.md';
import themingVariables from '../../../themeable-variables.json';

const themableComponents = Object.keys(themingVariables).filter(x => !x.startsWith('_') && x !== 'MockThemeComponent');

const DocPage = () => (
  <DocTemplate
    readme={ThemingDoc}
  >
    <List style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {themableComponents.map(component => <List.Item key={component} style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }} content={<span>{`- ${component}`}</span>} />)}
    </List>
  </DocTemplate>
);

export default DocPage;
