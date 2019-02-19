import React from 'react';
import PropTypes from 'prop-types';
import TextareaField from 'terra-form-textarea/lib/TextareaField';

const propTypes = {
  title: PropTypes.func,
  description: PropTypes.func,
  context: PropTypes.func,
  mentions: PropTypes.func,
  value: PropTypes.string,
};

const FeatureForm = (props) => {
  const {
    title,
    value,
    description,
    context,
    mentions,
  } = props;

  return (
    <div>
      <TextareaField
        label="Title"
        inputId="title"
        required
        help="Brief description. Selected package will be included in title."
        name="title"
        maxWidth="50em"
        value={value}
        onChange={title}
      />
      <TextareaField
        label="Description"
        inputId="description"
        required
        help="A clear and concise description of the requested feature."
        maxWidth="50em"
        onChange={description}
      />
      <TextareaField
        label="Additional Context / Screenshots"
        inputId="context"
        help="Add any other context about the feature here. If applicable, add screenshots to help explain."
        maxWidth="50em"
        onChange={context}
      />
      <TextareaField
        label="Mentions"
        inputId="mentions"
        required
        help="@ Mention anyone on the terra team that you have been working with so far."
        maxWidth="50em"
        onChange={mentions}
      />
    </div>
  );
};

FeatureForm.propTypes = propTypes;
export default FeatureForm;
