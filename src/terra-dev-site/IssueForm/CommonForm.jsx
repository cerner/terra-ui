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

const FormContext = (props) => {
  const { context, setContext } = props;
  return (
    <TextareaField
      label="Additional Context / Screenshots"
      aria-label="Add any other context about the feature here. If applicable, add screenshots to help explain."
      inputId="context"
      help="Add any other context about the feature here. If applicable, add screenshots to help explain."
      maxWidth="50em"
      value={context}
      onChange={event => setContext(event.target.value)}
      inputAttrs={{ rows: 2, isAutoResizable: true }}
    />
  );
};

const FormMentions = (props) => {
  const { mentions, setMentions } = props;
  return (
    <TextareaField
      label="Mentions"
      aria-label="Mention anyone on the terra team that you have been working with so far."
      inputId="mentions"
      help="Mention anyone on the terra team that you have been working with so far."
      maxWidth="50em"
      value={mentions}
      onChange={event => setMentions(event.target.value)}
      inputAttrs={{ rows: 2, isAutoResizable: true }}
    />
  );
};

FormTitle.propTypes = propTypes;
FormContext.propTypes = propTypes;
FormMentions.propTypes = propTypes;
export { FormTitle, FormContext, FormMentions };
