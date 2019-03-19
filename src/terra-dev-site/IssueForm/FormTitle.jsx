import React from 'react';
import { Field } from 'react-final-form';
import TextareaField from 'terra-form-textarea/lib/TextareaField';
import { propTypes, validateForm } from './Helper';

const FormTitle = (props) => {
  const { setTitle } = props;
  return (
    <Field
      name="title"
      validate={validateForm}
    >
      {({ input, meta }) => (
        <TextareaField
          label="Title"
          aria-label="Brief description. Selected package will be included in title."
          inputId="title"
          required
          error={meta.error}
          isInvalid={meta.invalid && meta.touched}
          help="Brief description. Selected package will be included in title."
          maxWidth="50em"
          onChange={(event) => { input.onChange(event.target.value); setTitle(event.target.value); }}
          value={input.value}
          inputAttrs={{ ...input, rows: 1, isAutoResizable: true }}
        />
      )}
    </Field>
  );
};

FormTitle.propTypes = propTypes;
export default FormTitle;
