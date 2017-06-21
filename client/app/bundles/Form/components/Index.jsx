/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

import React from 'react';
import Button from 'terra-button';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/README.md';
import ControlDocs from 'terra-form/docs/Control.md';
import FieldDocs from 'terra-form/docs/Field.md';
import FieldsetDocs from 'terra-form/docs/Fieldset.md';
import InputDocs from 'terra-form/docs/Input.md';
import NumberFieldDocs from 'terra-form/docs/NumberField.md';
import TextareaDocs from 'terra-form/docs/Textarea.md';
import TextareaFieldDocs from 'terra-form/docs/TextareaField.md';
import TextFieldDocs from 'terra-form/docs/TextField.md';

import { version } from 'terra-form/package.json';


// Example Files
import ControlledInputDocs from 'terra-site/lib/examples/form/docs/ControlledInput.md';
import ControlledInput from 'terra-site/lib/examples/form/examples/ControlledInput';
import ControlExamples from 'terra-site/lib/examples/form/examples/Control';
import FieldExamples from 'terra-site/lib/examples/form/examples/Field';
import FieldsetExamples from 'terra-site/lib/examples/form/examples/Fieldset';
import InputExamples from 'terra-site/lib/examples/form/examples/Input';
import NumberFieldExamples from 'terra-site/lib/examples/form/examples/NumberField';
import TextareaExamples from 'terra-site/lib/examples/form/examples/Textarea';
import TextareaFieldExamples from 'terra-site/lib/examples/form/examples/TextareaField';
import TextFieldExamples from 'terra-site/lib/examples/form/examples/TextField';

const scrollToComponent = (id) => {
  document.querySelector(id).scrollIntoView();
};

const FormsExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h1>Components</h1>
    <hr />
    <div>
      <Button text="Field" variant="link" onClick={() => { scrollToComponent('#field'); }} />
    </div>
    <div>
      <Button text="Fieldset" variant="link" onClick={() => { scrollToComponent('#fieldset'); }} />
    </div>
    <div>
      <Button text="Input" variant="link" onClick={() => { scrollToComponent('#input'); }} />
    </div>
    <div>
      <Button text="Control" variant="link" onClick={() => { scrollToComponent('#control'); }} />
    </div>
    <div>
      <Button text="Number Field" variant="link" onClick={() => { scrollToComponent('#number-field'); }} />
    </div>
    <div>
      <Button text="Textarea" variant="link" onClick={() => { scrollToComponent('#textarea'); }} />
    </div>
    <div>
      <Button text="Textarea Field" variant="link" onClick={() => { scrollToComponent('#textarea-field'); }} />
    </div>
    <div>
      <Button text="Text Field" variant="link" onClick={() => { scrollToComponent('#text-field'); }} />
    </div>
    <div>
      <Button text="Controlled Input Example" variant="link" onClick={() => { scrollToComponent('#controlled-input-example'); }} />
    </div>
    <Markdown id="field-docs" src={FieldDocs} />
    <FieldExamples />
    <Markdown id="fieldset-docs" src={FieldsetDocs} />
    <FieldsetExamples />
    <Markdown id="input-docs" src={InputDocs} />
    <InputExamples />
    <Markdown id="control-docs" src={ControlDocs} />
    <ControlExamples />
    <Markdown id="number-field-docs" src={NumberFieldDocs} />
    <NumberFieldExamples />
    <Markdown id="text-area-docs" src={TextareaDocs} />
    <TextareaExamples />
    <Markdown id="text-area-field-docs" src={TextareaFieldDocs} />
    <TextareaFieldExamples />
    <Markdown id="text-field-docs" src={TextFieldDocs} />
    <TextFieldExamples />
    <Markdown id="controlled-input-example" src={ControlledInputDocs} />
    <ControlledInput />
  </div>
);

export default FormsExamples;
