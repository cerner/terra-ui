/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

import React from 'react';
import Button from 'terra-button';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/README.md';
import ControlledInputDocs from 'terra-site/lib/examples/form/docs/ControlledInput.md';
import ControlDocs from 'terra-form/docs/Control.md';
import FieldDocs from 'terra-form/docs/Field.md';
import FieldsetDocs from 'terra-form/docs/Fieldset.md';
import InputDocs from 'terra-form/docs/Input.md';
import NumberFieldDocs from 'terra-form/docs/NumberField.md';
import TextareaDocs from 'terra-form/docs/Textarea.md';
import TextareaFieldDocs from 'terra-form/docs/TextareaField.md';
import TextFieldDocs from 'terra-form/docs/TextField.md';
import SelectDocs from 'terra-form/docs/Select.md';
import SelectFieldDocs from 'terra-form/docs/SelectField.md';

import { version } from 'terra-form/package.json';

// Props Table
// import ControlProps from 'terra-form/docs/props-table/Control.md';
import FieldProps from 'terra-form/docs/props-table/Field.md';
import FieldsetProps from 'terra-form/docs/props-table/Fieldset.md';
import InputProps from 'terra-form/docs/props-table/Input.md';
import NumberFieldProps from 'terra-form/docs/props-table/NumberField.md';
import TextareaProps from 'terra-form/docs/props-table/Textarea.md';
import TextareaFieldProps from 'terra-form/docs/props-table/TextareaField.md';
import TextFieldProps from 'terra-form/docs/props-table/TextField.md';
import SelectProps from 'terra-form/docs/props-table/Select.md';
import SelectFieldProps from 'terra-form/docs/props-table/SelectField.md';

// Example Files
import ControlledInput from 'terra-site/lib/examples/form/examples/ControlledInput';
import ControlExamples from 'terra-site/lib/examples/form/examples/Control';
import FieldExamples from 'terra-site/lib/examples/form/examples/Field';
import FieldsetExamples from 'terra-site/lib/examples/form/examples/Fieldset';
import InputExamples from 'terra-site/lib/examples/form/examples/Input';
import NumberFieldExamples from 'terra-site/lib/examples/form/examples/NumberField';
import TextareaExamples from 'terra-site/lib/examples/form/examples/Textarea';
import TextareaFieldExamples from 'terra-site/lib/examples/form/examples/TextareaField';
import TextFieldExamples from 'terra-site/lib/examples/form/examples/TextField';
import SelectExamples from 'terra-site/lib/examples/form/examples/Select';
import SelectFieldExamples from 'terra-site/lib/examples/form/examples/SelectField';

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
      <Button text="Select" variant="link" onClick={() => { scrollToComponent('#select'); }} />
    </div>
    <div>
      <Button text="Select Field" variant="link" onClick={() => { scrollToComponent('#select-field'); }} />
    </div>
    <div>
      <Button text="Controlled Input Example" variant="link" onClick={() => { scrollToComponent('#controlled-input-example'); }} />
    </div>
    <Markdown id="field-docs" src={FieldDocs} />
    <Markdown id="props-table-field" src={FieldProps} />
    <FieldExamples />
    <Markdown id="fieldset-docs" src={FieldsetDocs} />
    <Markdown id="props-table-fieldset" src={FieldsetProps} />
    <FieldsetExamples />
    <Markdown id="input-docs" src={InputDocs} />
    <Markdown id="props-table-input" src={InputProps} />
    <InputExamples />
    <Markdown id="control-docs" src={ControlDocs} />
    {/* <Markdown id="props-table-control" src={ControlProps} /> */}
    <ControlExamples />
    <Markdown id="number-field-docs" src={NumberFieldDocs} />
    <Markdown id="props-table-number-field" src={NumberFieldProps} />
    <NumberFieldExamples />
    <Markdown id="text-area-docs" src={TextareaDocs} />
    <Markdown id="props-table-text-area" src={TextareaProps} />
    <TextareaExamples />
    <Markdown id="text-area-field-docs" src={TextareaFieldDocs} />
    <Markdown id="props-table-text-area-field" src={TextareaFieldProps} />
    <TextareaFieldExamples />
    <Markdown id="text-field-docs" src={TextFieldDocs} />
    <Markdown id="props-table-text-field" src={TextFieldProps} />
    <TextFieldExamples />
    <Markdown id="select-docs" src={SelectDocs} />
    <Markdown id="props-table-select" src={SelectProps} />
    <SelectExamples />
    <Markdown id="select-field-docs" src={SelectFieldDocs} />
    <Markdown id="props-table-select-field" src={SelectFieldProps} />
    <SelectFieldExamples />
    <Markdown id="controlled-input-example" src={ControlledInputDocs} />
    <ControlledInput />
  </div>
);

export default FormsExamples;
