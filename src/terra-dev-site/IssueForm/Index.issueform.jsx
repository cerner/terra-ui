import React, { useState, useEffect } from 'react';
import { Form } from 'react-final-form';
import Base from 'terra-base';
import ButtonGroup from 'terra-button-group/lib/ButtonGroup';
import Markdown from 'terra-markdown';
import Popup from 'terra-popup';
import Spacer from 'terra-spacer';
import BugForm from './BugForm';
import FeatureForm from './FeatureForm';
import IssueSelect from './IssueSelect';
import PackageSelect from './PackageSelect';
import {
  bugTemplate, disclaimerTemplate, environmentTemplate, errorTemplate, featureTemplate, getPackages, getRepo, titleTemplate,
} from './Helper';

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

// Get packagelist from Packages.json.
const packageList = getPackages();

function IssueForm() {
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

  // Construct error text template, with link to appropriate repo issue selection based on selected package.
  const errorText = errorTemplate(packageRepo);

  // Construct issue body based on current input form data.
  const issueBody = issueType === 'bug'
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

  // Construct markdown template with current data for previewing.
  const previewBody = titleTemplate(title, packageRepo, selectedPackage) + issueBody;

  // Set target for preview window popup, and toggle open status.
  const popupTarget = () => document.getElementById('preview-button');
  function togglePopup() {
    return !isOpen
      ? setIsOpen(true)
      : setIsOpen(false);
  }

  // Wait to ensure form validation has completed, then submit form data to the appropriate repo on github.
  const submitForm = async () => {
    await sleep(500);
    const encodeTitle = encodeURIComponent(title).replace(/%2B/gi, '+');
    const encodeBody = encodeURIComponent(issueBody).replace(/%2B/gi, '+');

    window.open(
      `https://github.com/cerner/${packageRepo}/issues/new?title=[${selectedPackage}]${encodeTitle}&body=${encodeBody}`,
    );
  };

  return (
    <Spacer padding="large+2">
      <Base>
        <Markdown src={disclaimerTemplate} />
        <div style={{ display: 'inline-block', width: '20em', marginRight: '2em' }}>
          <IssueSelect issueType={issueType} setIssueType={setIssueType} value={issueType} />
        </div>
        <div style={{ display: 'inline-block', width: '20em' }}>
          <PackageSelect setPackage={setPackage} packageList={packageList} />
        </div>
        <Form
          onSubmit={submitForm}
          render={({ handleSubmit, pristine, invalid }) => (
            <form
              onSubmit={handleSubmit}
            >
              { issueType === 'bug'
                ? (
                  <BugForm
                    context={context}
                    mentions={mentions}
                    solution={solution}
                    setContext={setContext}
                    setDescription={setDescription}
                    setEnvironment={setEnvironment}
                    setExpected={setExpected}
                    setMentions={setMentions}
                    setSolution={setSolution}
                    setSteps={setSteps}
                    setTitle={setTitle}
                  />
                )
                : (
                  <FeatureForm
                    setContext={setContext}
                    setDescription={setDescription}
                    setMentions={setMentions}
                    setTitle={setTitle}
                    context={context}
                    mentions={mentions}
                  />
                )
              }
              <p>
                {`Character count / max: ${count} / `}
                {count > 5500 ? <span style={{ color: 'red' }}>5500</span> : 5500}
              </p>
              <ButtonGroup>
                <React.Fragment key="popup">
                  { count > 5500
                    ? (
                      <Popup
                        contentAttachment="top center"
                        isOpen={isOpen}
                        targetRef={popupTarget}
                        contentWidth="640"
                        onRequestClose={togglePopup}
                      >
                        <Spacer
                          style={{ textAlign: 'center' }}
                          padding="large"
                        >
                          <Markdown
                            src={errorText}
                          />
                        </Spacer>
                      </Popup>
                    )
                    : (
                      <Popup
                        isOpen={isOpen}
                        contentHeight="880"
                        targetRef={popupTarget}
                        contentWidth="960"
                        onRequestClose={togglePopup}
                      >
                        <Spacer
                          padding="large+2"
                        >
                          <Markdown
                            src={previewBody}
                          />
                        </Spacer>
                      </Popup>
                    )}
                </React.Fragment>
                <ButtonGroup.Button
                  id="preview-button"
                  text="Preview"
                  onClick={togglePopup}
                  key="Preview"
                />
                <ButtonGroup.Button
                  text="Submit"
                  key="Submit"
                  onClick={count > 5500 ? togglePopup : undefined}
                  type={count > 5500 ? undefined : 'submit'}
                  isDisabled={pristine || invalid}
                />
              </ButtonGroup>
            </form>
          )}
        />
      </Base>
    </Spacer>
  );
}


export default IssueForm;
