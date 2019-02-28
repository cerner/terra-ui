import React from 'react';
import Field from 'terra-form-field';
import Select from 'terra-form-select';
import propTypes from './Helper';

const PackageSelect = (props) => {
  const {
    packageList,
    setPackage,
  } = props;

  return (
    <Field
      label="Package Name"
      help="Selected package for issue / feature request."
    >
      <Select
        style={{ maxWidth: '30em' }}
        onChange={setPackage}
        defaultValue="terra-action-footer"
      >
        {packageList.map(currentPackage => (
          <Select.Option
            value={currentPackage}
            display={currentPackage}
            key={currentPackage}
          />
        ))}
      </Select>
    </Field>
  );
};

PackageSelect.propTypes = propTypes;
export default PackageSelect;
