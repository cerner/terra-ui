import React from 'react';
import TextareaField from 'terra-form-textarea/lib/TextareaField';

const BugForm = (props) => {
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
        label="Issue Description"
        inputId="description"
        required
        help="Describe the issue"
        maxWidth="50em"
      />
      <TextareaField
        label="Expected Behavior"
        inputId="expected"
        required
        help="Describe the expected behavior"
        maxWidth="50em"
      />
      <TextareaField
        label="Current Behavior"
        inputId="current"
        required
        help="Describe the current behavior"
        maxWidth="50em"
      />
      <TextareaField
        label="Steps to Reproduce"
        inputId="steps"
        required
        help="Detail steps on how to reproduce the issue"
        defaultValue={'1. \n2. \n3. \n4. '}
        maxWidth="50em"
      />
    </div>
  );
};

export default BugForm;
