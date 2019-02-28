import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import TextareaField from 'terra-form-textarea/lib/TextareaField';
import { environmentTemplate, validateForm } from './Helper';

const propTypes = {
  setContext: PropTypes.func,
  setDescription: PropTypes.func,
  setEnvironment: PropTypes.func,
  setExpected: PropTypes.func,
  setMentions: PropTypes.func,
  setSolution: PropTypes.func,
  setSteps: PropTypes.func,
  setTitle: PropTypes.func,
};

const BugForm = (props) => {
  const {
    setContext,
    setDescription,
    setEnvironment,
    setExpected,
    setMentions,
    setSolution,
    setSteps,
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
            label="Issue Description"
            inputId="description"
            required
            error={meta.error}
            isInvalid={meta.invalid && meta.touched}
            help="A clear and concise description of what the bug is. Providing a link to a live example / minimal demo of the problem greatly helps us debug issues."
            maxWidth="50em"
            onChange={(event) => { input.onChange(event.target.value); setDescription(event.target.value); }}
            value={input.value}
            inputAttrs={{ ...input }}
          />
        )}
      </Field>
      <Field
        name="steps"
        validate={validateForm}
      >
        {({ input, meta }) => (
          <TextareaField
            label="Steps to Reproduce"
            inputId="steps"
            required
            error={meta.error}
            isInvalid={meta.invalid && meta.touched}
            help="Please specify the exact steps you took for this bug to occur. Provide as much detail as possible so we're able to reproduce these steps."
            maxWidth="50em"
            onChange={(event) => { input.onChange(event.target.value); setSteps(event.target.value); }}
            value={input.value}
            inputAttrs={{ ...input }}
          />
        )}
      </Field>
      <Field
        name="expected"
        validate={validateForm}
      >
        {({ input, meta }) => (
          <TextareaField
            label="Expected Behavior"
            inputId="description"
            required
            error={meta.error}
            isInvalid={meta.invalid && meta.touched}
            help="A clear and concise description of what you expected to happen."
            maxWidth="50em"
            onChange={(event) => { input.onChange(event.target.value); setExpected(event.target.value); }}
            value={input.value}
            inputAttrs={{ ...input }}
          />
        )}
      </Field>
      <Field
        name="environment"
        validate={validateForm}
      >
        {({ input, meta }) => (
          <TextareaField
            label="Environment"
            inputId="environment"
            required
            error={meta.error}
            isInvalid={meta.invalid && meta.touched}
            help="Include as many relevant details about the environment you experienced the bug in."
            maxWidth="50em"
            defaultValue={environmentTemplate}
            onChange={(event) => { input.onChange(event.target.value); setEnvironment(event.target.value); }}
            inputAttrs={{ ...input }}
          />
        )}
      </Field>
      <TextareaField
        label="Additional Context / Screenshots"
        inputId="context"
        help="Add any other context about the feature here. If applicable, add screenshots to help explain."
        maxWidth="50em"
        onChange={event => setContext(event.target.value)}
      />
      <TextareaField
        label="Possible Solution"
        inputId="solution"
        help="If you have suggestions to fix the bug, let us know."
        maxWidth="50em"
        onChange={event => setSolution(event.target.value)}
      />
      <TextareaField
        label="Mentions"
        inputId="mentions"
        help="@ Mention anyone on the terra team that you have been working with so far."
        maxWidth="50em"
        onChange={event => setMentions(event.target.value)}
      />
    </div>
  );
};

BugForm.propTypes = propTypes;
export default BugForm;
