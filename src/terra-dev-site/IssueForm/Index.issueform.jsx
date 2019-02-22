import React, { useState, useEffect, useRef } from 'react';
import { Form, Field } from 'react-final-form';
import Base from 'terra-base';
import Spacer from 'terra-spacer';
import Button from 'terra-button';
import ButtonGroup from 'terra-button-group/lib/ButtonGroup';
import Popup from 'terra-popup';
import Markdown from 'terra-markdown';
import TextareaField from 'terra-form-textarea/lib/TextareaField';
import PackageSelect from './PackageSelect';
import IssueSelect from './IssueSelect';
import {
  getPackages, getRepo, featureBody, bugBody, environmentTemplate, titleTemplate,
} from './Helper';

/* eslint-disable compat/compat */
const validateForm = async (value) => {
  const response = new Promise((resolve) => {
    if (!value) {
      return resolve('Field is required.');
    }
    return resolve('');
  });

  await response;
  return response;
};

const initialState = {
  issueType: 'bug',
  selectedPackage: 'terra-action-footer',
  title: '',
  description: '',
  context: '',
  mentions: '',
  steps: '',
  expected: '',
  solution: '',
  environment: environmentTemplate,
  isOpen: false,
  count: 0,
};

function IssueForm() {
  const [title, setTitle] = useState(initialState.title);
  const [issueType, setIssue] = useState(initialState.issueType);
  const [count, setCount] = useState(initialState.count);
  const [selectedPackage, setPackage] = useState(initialState.selectedPackage);
  const [description, setDescription] = useState(initialState.description);
  const [context, setContext] = useState(initialState.context);
  const [mentions, setMentions] = useState(initialState.mentions);
  const [steps, setSteps] = useState(initialState.steps);
  const [expected, setExpected] = useState(initialState.expected);
  const [solution, setSolution] = useState(initialState.solution);
  const [environment, setEnvironment] = useState(initialState.environment);
  const [isOpen, setIsOpen] = useState(initialState.isOpen);

  const previousIssueType = useRef(issueType);
  useEffect(() => {
    if (previousIssueType.current !== issueType) {
      if (issueType === 'bug') {
        setTitle('');
        setDescription('');
        setContext('');
        setMentions('');
        setSteps('');
        setExpected('');
        setSolution('');
        setEnvironment(environmentTemplate);
      } else {
        setTitle('');
        setDescription('');
        setContext('');
        setMentions('');
      }
      setCount(0);
      previousIssueType.current = issueType;
    }
    const total = issueType === 'bug'
      ? [title, selectedPackage, description, context, mentions, steps, expected, solution, environment].reduce((prev, current) => prev + current).length
      : [title, selectedPackage, description, context, mentions].reduce((prev, current) => prev + current).length;
    setCount(total);
  });

  const packageList = getPackages();
  const packageRepo = getRepo(selectedPackage);

  const issueBody = issueType === 'bug'
    ? bugBody(description, steps, context, expected, solution, environment, mentions)
    : featureBody(description, context, mentions);
  const previewBody = titleTemplate(title, packageRepo, selectedPackage) + issueBody;

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const submitForm = async () => {
    await sleep(300);
    const encodeBody = encodeURIComponent(issueBody).replace(/%2B/gi, '+');
    window.open(
      `https://github.com/cerner/${packageRepo}/issues/new?title=[${selectedPackage}] ${title}&body=${encodeBody}`,
    );
  };

  const popupTarget = () => document.getElementById('preview-button');
  const errorSrc = `Character count for form exceeded. If you require more space, submit the issue directly to [github](https://github.com/cerner/${packageRepo}/issues/new/choose).`;

  const togglePopup = () => {
    return !isOpen
      ? setIsOpen(true)
      : setIsOpen(false);
  };

  return (
    <Form
      onSubmit={submitForm}
      render={({ handleSubmit, pristine, invalid }) => (
        <Spacer padding="large+2">
          <Base>
            <IssueSelect issueType={issueType} setIssue={setIssue} value={issueType} />
            <PackageSelect setPackage={setPackage} packageList={packageList} />
            { issueType === 'bug'
              ? (
                <form
                  onSubmit={handleSubmit}
                >
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
                    label="Environment"
                    inputId="environment"
                    size="large"
                    help="Include as many relevant details about the environment you experienced the bug in."
                    maxWidth="50em"
                    defaultValue={environmentTemplate}
                    onChange={event => setEnvironment(event.target.value)}
                  />
                  <TextareaField
                    label="Mentions"
                    inputId="mentions"
                    help="@ Mention anyone on the terra team that you have been working with so far."
                    maxWidth="50em"
                    onChange={event => setMentions(event.target.value)}
                  />
                  <p>
                    {`Character count / max: ${count} / `}
                    {count > 5500 ? <span style={{ color: 'red' }}>5500</span> : 5500}
                  </p>
                  <ButtonGroup style={{ paddingLeft: '40em' }}>
                    <React.Fragment key="popup">
                      { count > 5500
                        ? (
                          <Popup contentAttachment="top center" isOpen={isOpen} contentHeight="auto" targetRef={popupTarget} contentWidth="auto" onRequestClose={togglePopup}>
                            <Spacer style={{ textAlign: 'center' }} padding="large">
                              <Markdown src={errorSrc} />
                            </Spacer>
                          </Popup>
                        )
                        : (
                          <Popup isOpen={isOpen} contentHeight="auto" targetRef={popupTarget} contentWidth="960" onRequestClose={togglePopup}>
                            <Spacer padding="large+2">
                              <Markdown src={previewBody} />
                            </Spacer>
                          </Popup>
                        )}
                      <Button id="preview-button" text="Preview" onClick={togglePopup} key="Preview" />
                    </React.Fragment>
                    <ButtonGroup.Button text="Submit" key="Submit" type="submit" disabled={pristine || invalid} />
                  </ButtonGroup>
                </form>
              )
              : (
                <form
                  onSubmit={handleSubmit}
                >
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
                        label="Description"
                        inputId="description"
                        required
                        error={meta.error}
                        isInvalid={meta.invalid && meta.touched}
                        help="A clear and concise description of what the feature is."
                        maxWidth="50em"
                        onChange={(event) => { input.onChange(event.target.value); setDescription(event.target.value); }}
                        value={input.value}
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
                    label="Mentions"
                    inputId="mentions"
                    help="@ Mention anyone on the terra team that you have been working with so far."
                    maxWidth="50em"
                    onChange={event => setMentions(event.target.value)}
                  />
                  <p>
                    {`Character count / max: ${count} / `}
                    {count > 5500 ? <span style={{ color: 'red' }}>5500</span> : 5500}
                  </p>
                  <ButtonGroup style={{ paddingLeft: '40em' }}>
                    <React.Fragment key="popup">
                      { count > 5500
                        ? (
                          <Popup contentAttachment="top center" isOpen={isOpen} contentHeight="auto" targetRef={popupTarget} contentWidth="auto" onRequestClose={togglePopup}>
                            <Spacer style={{ textAlign: 'center' }} padding="large">
                              <Markdown src={errorSrc} />
                            </Spacer>
                          </Popup>
                        )
                        : (
                          <Popup isOpen={isOpen} contentHeight="auto" targetRef={popupTarget} contentWidth="960" onRequestClose={togglePopup}>
                            <Spacer padding="large+2">
                              <Markdown src={previewBody} />
                            </Spacer>
                          </Popup>
                        )}
                      <Button id="preview-button" text="Preview" onClick={togglePopup} key="Preview" />
                    </React.Fragment>
                    <ButtonGroup.Button text="Submit" key="Submit" type="submit" disabled={pristine || invalid} />
                  </ButtonGroup>
                </form>
              )
            }
          </Base>
        </Spacer>
      )}
    />
  );
}


export default IssueForm;
