import React, { useState, useEffect } from 'react';
import { Form } from 'react-final-form';
import Base from 'terra-base';
import ActionHeader from 'terra-action-header';
import ButtonGroup from 'terra-button-group';
import DialogModal from 'terra-dialog-modal';
import Heading from 'terra-heading';
import Markdown from 'terra-markdown';
import Spacer from 'terra-spacer';
import BugForm from './BugForm';
import FeatureForm from './FeatureForm';
import { FormTitle, FormContext, FormMentions } from './CommonForm';
import IssueSelect from './IssueSelect';
import PackageSelect from './PackageSelect';
import {
  bugTemplate, disclaimerTemplate, environmentTemplate, featureTemplate, getRepo, titleTemplate,
} from './Helper';
import styles from './IssueForm.scss';

/* eslint-disable compat/compat */
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const initialState = {
  context: '',
  count: 0,
  description: '',
  environment: environmentTemplate,
  expected: '',
  isOpen: false,
  issueType: 'bug',
  mentions: '',
  selectedPackage: 'terra-action-footer',
  solution: '',
  steps: '',
  title: '',
};

const IssueForm = () => {
  // Initialize state variables and setter functions.
  const [context, setContext] = useState(initialState.context);
  const [count, setCount] = useState(initialState.count);
  const [description, setDescription] = useState(initialState.description);
  const [environment, setEnvironment] = useState(initialState.environment);
  const [expected, setExpected] = useState(initialState.expected);
  const [isOpen, setIsOpen] = useState(initialState.isOpen);
  const [issueType, setIssueType] = useState(initialState.issueType);
  const [mentions, setMentions] = useState(initialState.mentions);
  const [selectedPackage, setPackage] = useState(initialState.selectedPackage);
  const [solution, setSolution] = useState(initialState.solution);
  const [steps, setSteps] = useState(initialState.steps);
  const [title, setTitle] = useState(initialState.title);

  /**
   * Initialize and track character count between updates and form changes.
   * The total amount of characters that can be submitted in a URL is limited,
   * so the form has an upper limit of 5500 characters. IE will fail at around 2K.
   */
  const total = issueType === 'bug'
    ? [context, description, environment, expected, mentions, selectedPackage, solution, steps, title]
      .reduce((prev, current) => prev + current).length
    : [context, description, mentions, selectedPackage, title]
      .reduce((prev, current) => prev + current).length;

  // Basic test to check if form data has been entered when attempting to navigate away from the page.
  const formDidUpdate = [title, description, steps, expected, context, mentions].reduce((prev, current) => prev + current).length > 0;
  useEffect(() => {
    setCount(total);
    if (formDidUpdate) {
      window.onbeforeunload = () => true;
    } else {
      window.onbeforeunload = undefined;
    }
  });

  // Update repo based on the currently selected package.
  const packageRepo = getRepo(selectedPackage);

  // Construct issue body based on current input form data.
  let issueBody = issueType === 'bug'
    ? bugTemplate({
      description,
      steps,
      context,
      expected,
      solution,
      environment,
      mentions,
    })
    : featureTemplate({ description, context, mentions });

  /**
   * Construct preview body. marked.js ignores new lines when inserting a block of text into a template;
   * this maintains formatting entered into the form when previewing.
   */
  const createPreview = () => {
    let issuePreview;
    if (issueType === 'bug') {
      issuePreview = Object.assign({}, {
        context: context.replace(/(?:\n)/g, '<br>'),
        description: description.replace(/(?:\n)/g, '<br>'),
        environment,
        expected: expected.replace(/(?:\n)/g, '<br>'),
        mentions: mentions.replace(/(?:\n)/g, '<br>'),
        solution: solution.replace(/(?:\n)/g, '<br>'),
        steps: steps.replace(/(?:\n)/g, '<br>'),
      });
      return bugTemplate(issuePreview);
    }
    issuePreview = Object.assign({}, {
      description: description.replace(/(?:\n)/g, '<br>'),
      context: context.replace(/(?:\n)/g, '<br>'),
      mentions: mentions.replace(/(?:\n)/g, '<br>'),
    });
    return featureTemplate(issuePreview);
  };

  // Feed Markdown expected string value
  const previewBody = titleTemplate(title, packageRepo, selectedPackage) + createPreview();

  function toggleModal() {
    return !isOpen
      ? setIsOpen(true)
      : setIsOpen(false);
  }

  function handleCloseModal() {
    return setIsOpen(false);
  }

  // Wait to ensure form validation has completed, then submit form data to the appropriate repo on github.
  const submitForm = async () => {
    await sleep(500);

    if (count > 5500) {
      issueBody = issueBody.slice(0, 5500);
    }

    const encodeTitle = encodeURIComponent(title).replace(/%2B/gi, '+');
    const encodeBody = encodeURIComponent(issueBody).replace(/%2B/gi, '+');

    window.open(
      `https://github.com/cerner/${packageRepo}/issues/new?title=[${selectedPackage}] ${encodeTitle}&body=${encodeBody}`,
    );
  };

  return (
    <Spacer padding="large+2">
      <Base>
        <Heading level={1}>Issue Form</Heading>
        <Markdown src={disclaimerTemplate} />
        <div className={styles['issue-form-select-margin']}>
          <IssueSelect issueType={issueType} setIssueType={setIssueType} value={issueType} />
        </div>
        <div className={styles['issue-form-select']}>
          <PackageSelect setPackage={setPackage} />
        </div>
        <Form
          onSubmit={submitForm}
          subscription={{ submitting: true, pristine: true }}
          render={({ handleSubmit, submitting, pristine }) => (
            <form
              onSubmit={handleSubmit}
            >
              <FormTitle setTitle={setTitle} />
              { issueType === 'bug'
                ? (
                  <BugForm
                    solution={solution}
                    setDescription={setDescription}
                    setEnvironment={setEnvironment}
                    setExpected={setExpected}
                    setSolution={setSolution}
                    setSteps={setSteps}
                  />
                )
                : (
                  <FeatureForm
                    setDescription={setDescription}
                  />
                )
              }
              <FormContext context={context} setContext={setContext} />
              <FormMentions mentions={mentions} setMentions={setMentions} />
              <p>
                {`Character count / max: ${count} / `}
                {count > 5500 ? (
                  <span>
                    <span className={styles['error-text']}>5500</span>
                    <br />
                    Character count exceeded. Click Submit to continue on Github (Characters beyond form limit will be truncated).
                  </span>
                ) : 5500}
              </p>
              <DialogModal
                ariaLabel="Default Dialog Modal"
                isOpen={isOpen}
                onRequestClose={handleCloseModal}
                header={<ActionHeader title="Preview Issue" onClose={handleCloseModal} />}
                footer={<div />}
              >
                <Spacer padding="large+2">
                  <Markdown src={previewBody} />
                </Spacer>
              </DialogModal>
              <ButtonGroup>
                <ButtonGroup.Button
                  id="preview-button"
                  text="Preview"
                  onClick={toggleModal}
                  key="Preview"
                />
                <ButtonGroup.Button
                  text="Submit"
                  key="Submit"
                  type="submit"
                  isDisabled={submitting || pristine}
                />
              </ButtonGroup>
            </form>
          )}
        />
      </Base>
    </Spacer>
  );
};

export default IssueForm;
