import React from 'react';
import TextareaField from 'terra-form-textarea/lib/TextareaField';
import { propTypes } from './Helper';

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

FormContext.propTypes = propTypes;
export default FormContext;
