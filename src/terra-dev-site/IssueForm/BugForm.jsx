import React from 'react';
import Field from 'terra-form-field';
import Textarea from 'terra-form-textarea';

const BugForm = () => {
  return (
    <div>
      <Field label="Title" required help="Literally the most important part of what you're about to do">
        <Textarea rows={1} required name="title" style={{ resize: 'none', maxWidth: '50em' }} />
      </Field>
      <Field label="Issue Description" required help="Describe the issue">
        <Textarea rows={2} isAutoResizable style={{ minWidth: '50em', maxWidth: '50em' }} />
      </Field>
      <Field label="Expected Behavior" required help="Describe the expected behavior">
        <Textarea rows={2} isAutoResizable style={{ minWidth: '50em', maxWidth: '50em' }} />
      </Field>
      <Field label="Current Behavior" required help="Describe the current behavior">
        <Textarea rows={2} isAutoResizable style={{ minWidth: '50em', maxWidth: '50em' }} />
      </Field>
      <Field label="Steps to Reproduce" required help="Detail steps on how to reproduce the issue">
        <Textarea defaultValue={'1. \n2. \n3. \n4. '} rows={4} isAutoResizable style={{ minWidth: '50em', maxWidth: '50em' }} />
      </Field>
    </div>
  );
};

export default BugForm;
