import React, { useState, useEffect, useRef } from 'react';
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
  bugTemplate, environmentTemplate, errorTemplate, featureTemplate, getPackages, getRepo, titleTemplate,
} from './Helper';

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

function IssueForm() {
  // Initialize state variables and setter functions.
  const [context, setContext] = useState(initialState.context);
  const [count, setCount] = useState(initialState.count);
  const [description, setDescription] = useState(initialState.description);
  const [environment, setEnvironment] = useState(initialState.environment);
  const [expected, setExpected] = useState(initialState.expected);
  const [isOpen, setIsOpen] = useState(initialState.isOpen);
  const [issueType, setIssue] = useState(initialState.issueType);
  const [mentions, setMentions] = useState(initialState.mentions);
  const [selectedPackage, setPackage] = useState(initialState.selectedPackage);
  const [solution, setSolution] = useState(initialState.solution);
  const [steps, setSteps] = useState(initialState.steps);
  const [title, setTitle] = useState(initialState.title);

  useEffect(() => {
    // Initialize and track character count between updates and form changes.
    const total = issueType === 'bug'
      ? [context, description, environment, expected, mentions, selectedPackage, solution, steps, title]
        .reduce((prev, current) => prev + current).length
      : [context, description, mentions, selectedPackage, title]
        .reduce((prev, current) => prev + current).length;
    setCount(total);
  });

  /* eslint-disable compat/compat */
  // Get packagelist from file, and update repo based on the currently selected package.
  const packageList = getPackages();
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
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const submitForm = async () => {
    await sleep(500);
    const encodeTitle = encodeURIComponent(title).replace(/%2B/gi, '+');
    const encodeBody = encodeURIComponent(issueBody).replace(/%2B/gi, '+');

    window.open(
      `https://github.com/cerner/${packageRepo}/issues/new?title=[${selectedPackage}] ${encodeTitle}&body=${encodeBody}`,
    );
  };

  return (
    <Spacer padding="large+2">
      <Base>
        <IssueSelect issueType={issueType} setIssue={setIssue} value={issueType} />
        <PackageSelect setPackage={setPackage} packageList={packageList} />
        <Form
          onSubmit={submitForm}
          render={({ handleSubmit, pristine, invalid }) => (
            <form
              onSubmit={handleSubmit}
            >
              { issueType === 'bug'
                ? (
                  <BugForm
                    setContext={setContext}
                    setDescription={setDescription}
                    setEnvironment={setEnvironment}
                    setExpected={setExpected}
                    setMentions={setMentions}
                    setSolution={setSolution}
                    setSteps={setSteps}
                    setTitle={setTitle}
                    context={context}
                    mentions={mentions}
                    solution={solution}
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
