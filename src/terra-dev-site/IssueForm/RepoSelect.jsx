import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import Select from 'terra-form-select';
import Packages from './Packages.json';

const propTypes = {
  repo: PropTypes.func,
  value: PropTypes.string,
};

const repoOptions = Object.keys(JSON.parse(JSON.stringify(Packages)).repos);

function RepoSelect(props) {
  const {
    repo,
    value,
  } = props;

  return (
    <Field label="Repo Name" required help="Which repo you're causing problems in">
      <Select style={{ maxWidth: '30em' }} onChange={repo} value={value}>
        {repoOptions.map(currentRepo => <Select.Option value={currentRepo} display={currentRepo} key={currentRepo}>{currentRepo}</Select.Option>)}
      </Select>
    </Field>
  );
}

RepoSelect.propTypes = propTypes;
export default RepoSelect;
