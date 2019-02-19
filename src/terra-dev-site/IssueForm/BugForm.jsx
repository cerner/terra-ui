import React from 'react';
import PropTypes from 'prop-types';
import TextareaField from 'terra-form-textarea/lib/TextareaField';

const propTypes = {
  title: PropTypes.func,
  description: PropTypes.func,
  steps: PropTypes.func,
  expected: PropTypes.func,
  context: PropTypes.func,
  solution: PropTypes.func,
  environment: PropTypes.func,
  mentions: PropTypes.func,
  value: PropTypes.string,
};

const BugForm = (props) => {
  const {
    title,
    description,
    steps,
    expected,
    context,
    solution,
    environment,
    mentions,
    value
  } = props;

  const environmentDefault = `* Component Name and Version: 
* Browser Name and Version: 
* Node/npm Version [e.g. Node 8/npm 5]: 
* Webpack Version: 
* Operating System and version (desktop or mobile): `;

  return (
    <div>
      <TextareaField
        label="Title"
        inputId="title"
        required
        help="Literally the most important part of what you're about to do"
        name="title"
        maxWidth="50em"
        value={value}
        onChange={title}
      />
      <TextareaField
        label="Issue Description"
        inputId="description"
        required
        help="A clear and concise description of what the bug is. Providing a link to a live example / minimal demo of the problem greatly helps us debug issues."
        maxWidth="50em"
        onChange={description}
      />
      <TextareaField
        label="Steps to Reproduce"
        inputId="steps"
        required
        help="Please specify the exact steps you took for this bug to occur. Provide as much detail as possible so we're able to reproduce these steps."
        maxWidth="50em"
        onChange={steps}
      />
      <TextareaField
        label="Additional Context / Screenshots"
        inputId="context"
        required
        help="Add any other context about the problem here. If applicable, add screenshots to help explain."
        maxWidth="50em"
        onChange={context}
      />
      <TextareaField
        label="Expected Behavior"
        inputId="expected"
        required
        help="A clear and concise description of what you expected to happen."
        maxWidth="50em"
        onChange={expected}
      />
      <TextareaField
        label="Possible Solution"
        inputId="solution"
        required
        help="If you have suggestions to fix the bug, let us know."
        maxWidth="50em"
        onChange={solution}
      />
      <TextareaField
        label="Environment"
        inputId="environment"
        required
        size="large"
        help="Include as many relevant details about the environment you experienced the bug in."
        maxWidth="50em"
        defaultValue={environmentDefault}
        onChange={environment}
      />
      <TextareaField
        label="Mentions"
        inputId="mentions"
        required
        help="Mention anyone on the terra team that you have been working with so far."
        maxWidth="50em"
        onChange={mentions}
      />
    </div>
  );
};

BugForm.propTypes = propTypes;
export default BugForm;
