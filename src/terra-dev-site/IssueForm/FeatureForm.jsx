import React from 'react';
import { Field } from 'react-final-form';
import TextareaField from 'terra-form-textarea/lib/TextareaField';
import { propTypes, validateForm } from './Helper';

const FeatureForm = (props) => {
  const {
    context,
    mentions,
    setContext,
    setDescription,
    setMentions,
    setTitle,
  } = props;

  return (
    <div>
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
            inputAttrs={{ ...input }}
          />
        )}
      </Field>
      <Field
        name="description"
        validate={validateForm}
      >
        {({ input, meta }) => (
          <TextareaField
            label="Description"
            aria-label="A clear and concise description of what the feature is."
            inputId="description"
            required
            error={meta.error}
            isInvalid={meta.invalid && meta.touched}
            help="A clear and concise description of what the feature is."
            maxWidth="50em"
            onChange={(event) => { input.onChange(event.target.value); setDescription(event.target.value); }}
            value={input.value}
            inputAttrs={{ ...input }}
          />
        )}
      </Field>
      <TextareaField
        label="Additional Context / Screenshots"
        aria-label="Add any other context about the feature here. If applicable, add screenshots to help explain."
        inputId="context"
        help="Add any other context about the feature here. If applicable, add screenshots to help explain."
        maxWidth="50em"
        value={context}
        onChange={event => setContext(event.target.value)}
      />
      <TextareaField
        label="Mentions"
        aria-label="Mention anyone on the terra team that you have been working with so far."
        inputId="mentions"
        help="Mention anyone on the terra team that you have been working with so far."
        maxWidth="50em"
        value={mentions}
        onChange={event => setMentions(event.target.value)}
      />
    </div>
  );
};

FeatureForm.propTypes = propTypes;
export default FeatureForm;
