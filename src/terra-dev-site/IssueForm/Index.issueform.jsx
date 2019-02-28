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

  const previousIssueType = useRef(issueType);
  useEffect(() => {
    if (previousIssueType.current !== issueType) {
      if (issueType === 'bug') {
        setContext('');
        setSteps('');
        setExpected('');
        setSolution('');
        setEnvironment(environmentTemplate);
      } else {
        setContext('');
      }
      setCount(0);
      previousIssueType.current = issueType;
    }
    const total = issueType === 'bug'
      ? [title, selectedPackage, description, context, mentions, steps, expected, solution, environment].reduce((prev, current) => prev + current).length
      : [title, selectedPackage, description, context, mentions].reduce((prev, current) => prev + current).length;
    setCount(total);
  });

  /* eslint-disable compat/compat */
  const packageList = getPackages();
  const packageRepo = getRepo(selectedPackage);
  const errorText = errorTemplate(packageRepo);
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const issueBody = issueType === 'bug'
    ? bugTemplate(description, steps, context, expected, solution, environment, mentions)
    : featureTemplate(description, context, mentions);
  const previewBody = titleTemplate(title, packageRepo, selectedPackage) + issueBody;

  const popupTarget = () => document.getElementById('preview-button');
  const togglePopup = () => {
    return !isOpen
      ? setIsOpen(true)
      : setIsOpen(false);
  };

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
                    handleSubmit={handleSubmit}
                    setTitle={setTitle}
                    setDescription={setDescription}
                    setSteps={setSteps}
                    setExpected={setExpected}
                    setEnvironment={setEnvironment}
                    setContext={setContext}
                    setSolution={setSolution}
                    setMentions={setMentions}
                  />
                )
                : (
                  <FeatureForm
                    handleSubmit={handleSubmit}
                    setTitle={setTitle}
                    setDescription={setDescription}
                    setContext={setContext}
                    setMentions={setMentions}
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
                        contentHeight="auto"
                        targetRef={popupTarget}
                        contentWidth="auto"
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
                        contentHeight="auto"
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
