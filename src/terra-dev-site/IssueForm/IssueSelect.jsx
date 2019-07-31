import React from 'react';
import Field from 'terra-form-field';
import Select from 'terra-form-select';
import { propTypes } from './Helper';

function IssueSelect(props) {
  const {
    setIssueType,
    value,
  } = props;

  return (
    <Field
      label="Issue Type"
      help="Bug report, or feature request"
    >
      <Select
        aria-label="Issue Type drop down select menu. Select Bug Report or Feature Request."
        onChange={setIssueType}
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
