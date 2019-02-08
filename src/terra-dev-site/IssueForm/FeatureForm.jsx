import React from 'react';
import Field from 'terra-form-field';
import Textarea from 'terra-form-textarea';

const FeatureForm = () => {
  return (
    <div>
      <Field label="Title" required help="Literally the most important part of what you're about to do">
        <Textarea rows={1} required name="title" style={{ resize: 'none', maxWidth: '50em' }} />
      </Field>
      <Field label="Description" required help="Describe you're desired change or feature">
        <Textarea rows={2} isAutoResizable style={{ minWidth: '50em', maxWidth: '50em' }} />
      </Field>
      <Field label="Additional Context / Screenshots" help="Additional information">
        <Textarea rows={2} isAutoResizable style={{ minWidth: '50em', maxWidth: '50em' }} />
      </Field>
      <Field label="Mentions" required help="Who we'll blame for this">
        <Textarea rows={2} isAutoResizable style={{ minWidth: '50em', maxWidth: '50em' }} />
      </Field>
    </div>
  );
};

export default FeatureForm;
