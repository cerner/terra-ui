import React from 'react';
import TextareaField from 'terra-form-textarea/lib/TextareaField';
import { propTypes } from './Helper';

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

FormMentions.propTypes = propTypes;
export default FormMentions;
