import React from 'react';
import Field from 'terra-form-field';
import Select from 'terra-form-select';
import { getPackages, propTypes } from './Helper';

const packageList = getPackages().map(currentPackage => (
  <Select.Option
    value={currentPackage}
    display={currentPackage}
    key={currentPackage}
  />
));

const PackageSelect = (props) => {
  const {
    setPackage,
  } = props;

  return (
    <Field
      label="Package Name"
      help="Selected package for issue / feature request."
    >
      <Select
        aria-label="Drop down menu for selecting the package related to the bug report or feature request."
        onChange={setPackage}
        defaultValue="terra-action-footer"
      >
        {packageList}
      </Select>
    </Field>
  );
};

PackageSelect.propTypes = propTypes;
export default PackageSelect;
