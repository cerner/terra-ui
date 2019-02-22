import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import Select from 'terra-form-select';

const propTypes = {
  setPackage: PropTypes.func,
  packageList: PropTypes.arrayOf(PropTypes.string),
};

const PackageSelect = (props) => {
  const {
    setPackage,
    packageList,
  } = props;

  return (
    <Field label="Package Name" required help="Which package you have broken">
      <Select style={{ maxWidth: '30em' }} onChange={setPackage} defaultValue="terra-action-footer">
        {packageList.map(currentPackage => <Select.Option value={currentPackage} display={currentPackage} key={currentPackage} />)}
      </Select>
    </Field>
  );
};

PackageSelect.propTypes = propTypes;
export default PackageSelect;
