import React from 'react';
import TextareaField from 'terra-form-textarea/lib/TextareaField';

const FeatureForm = (props) => {
  const { title, value } = props;
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
        label="Description"
        inputId="description"
        required
        help="Describe you're desired change or feature"
        maxWidth="50em"
      />
      <TextareaField
        label="Additional Context / Screenshots"
        inputId="context"
        help="Additional information"
        maxWidth="50em"
      />
      <TextareaField
        label="Mentions"
        inputId="mentions"
        required
        help="Who we'll blame for this"
        maxWidth="50em"
      />
    </div>
  );
};

export default FeatureForm;
