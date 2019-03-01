import React from 'react';
import { Field } from 'react-final-form';
import TextareaField from 'terra-form-textarea/lib/TextareaField';
import { environmentTemplate, propTypes, validateForm } from './Helper';

const BugForm = (props) => {
  const {
    context,
    mentions,
    solution,
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
            label="Issue Description"
            aria-label="A clear and concise description of what the bug is. Providing a link to a live example / minimal demo of the problem greatly helps us debug issues."
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
            aria-label="Please specify the exact steps you took for this bug to occur. Provide as much detail as possible so we're able to reproduce these steps."
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
            aria-label="A clear and concise description of what you expected to happen."
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
            aria-label="Include as many relevant details about the environment you experienced the bug in."
            inputId="environment"
            required
            error={meta.error}
            isInvalid={meta.invalid && meta.touched}
            help="Include as many relevant details about the environment you experienced the bug in."
            maxWidth="50em"
            value={!input.value ? environmentTemplate : input.value}
            onChange={(event) => { input.onChange(event.target.value); setEnvironment(event.target.value); }}
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
        label="Possible Solution"
        aria-label="If you have suggestions to fix the bug, let us know."
        inputId="solution"
        help="If you have suggestions to fix the bug, let us know."
        maxWidth="50em"
        value={solution}
        onChange={event => setSolution(event.target.value)}
      />
      <TextareaField
        label="Mentions"
        aria-label="@ Mention anyone on the terra team that you have been working with so far."
        inputId="mentions"
        help="@ Mention anyone on the terra team that you have been working with so far."
        maxWidth="50em"
        value={mentions}
        onChange={event => setMentions(event.target.value)}
      />
    </div>
  );
};

BugForm.propTypes = propTypes;
export default BugForm;
