import React from 'react';
import { Field } from 'react-final-form';
import TextareaField from 'terra-form-textarea/lib/TextareaField';
import { propTypes, validateForm } from './Helper';

const FeatureForm = (props) => {
  const {
    setDescription,
  } = props;

  return (
    <div>
      <Field
        name="description"
        validate={validateForm}
      >
        {({ input, meta }) => (
          <TextareaField
            label="Description"
            aria-label="A clear and concise description of what the feature is. Styling with Markdown is supported."
            inputId="description"
            required
            error={meta.error}
            isInvalid={meta.invalid && meta.touched}
            help="A clear and concise description of what the feature is. Styling with Markdown is supported."
            maxWidth="50em"
            onChange={(event) => { input.onChange(event.target.value); setDescription(event.target.value); }}
            value={input.value}
            inputAttrs={{ ...input }}
          />
        )}
      </Field>
    </div>
  );
};

FeatureForm.propTypes = propTypes;
export default FeatureForm;
