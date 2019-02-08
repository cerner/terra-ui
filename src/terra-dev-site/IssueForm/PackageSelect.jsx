import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import Select from 'terra-form-select';
import Packages from './Packages.json';

const propTypes = {
  repo: PropTypes.oneOf(['terra-core', 'terra-framework', 'terra-clinical']),
  selectedPackage: PropTypes.func,
  value: PropTypes.string,
};

const getPackages = (repo) => {
  const packages = JSON.parse(JSON.stringify(Packages)).repos;
  const packageList = Object.values(packages[repo]).reduce(item => item);

  return packageList;
};

const PackageSelect = (props) => {
  const packageData = getPackages(props.repo);

  return (
    <Field label="Package Name" required help="Which package you have broken">
      <Select style={{ maxWidth: '30em' }} onSelect={props.selectedPackage} value={props.value}>
        {packageData.map(currentPackage => <Select.Option value={currentPackage} display={currentPackage} key={currentPackage} />)}
      </Select>
    </Field>
  );
};

PackageSelect.propTypes = propTypes;
export default PackageSelect;
