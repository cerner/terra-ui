import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import Select from 'terra-form-select';

const propTypes = {
  setIssue: PropTypes.func,
  value: PropTypes.string,
};

function IssueSelect(props) {
  const {
    setIssue,
    value,
  } = props;

  return (
    <Field
      label="Issue Type"
      help="Bug report, or feature request"
    >
      <Select
        style={{ maxWidth: '30em' }}
        onChange={setIssue}
        value={value}
      >
        <Select.Option
          value="bug"
          display="Bug Report"
          key="bug"
        />
        <Select.Option
          value="feature"
          display="Feature Request"
          key="feature"
        />
      </Select>
    </Field>
  );
}

IssueSelect.propTypes = propTypes;
export default IssueSelect;
