import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import Select from 'terra-form-select';
import Packages from './Packages.json';

const PackageSelect = (props) => {
  const packageList = props.packageList;

  return (
    <Field label="Package Name" required help="Which package you have broken">
      <Select style={{ maxWidth: '30em' }} onSelect={props.selectedPackage} value={props.value}>
        {packageList.map(currentPackage => <Select.Option value={currentPackage} display={currentPackage} key={currentPackage} />)}
      </Select>
    </Field>
  );
};

export default PackageSelect;
