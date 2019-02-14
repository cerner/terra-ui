import React from 'react';
import Field from 'terra-form-field';
import Select from 'terra-form-select';

function IssueSelect(props) {
  const { setIssue, value } = props;

  return (
    <Field label="Issue Type" required help="Bug report, or feature request">
      <Select style={{ maxWidth: '30em' }} onChange={setIssue} value={value}>
        <Select.Option value="bug" display="Bug Report" key="bug" />
        <Select.Option value="feature" display="Feature Request" key="feature" />
      </Select>
    </Field>
  );
}

export default IssueSelect;
