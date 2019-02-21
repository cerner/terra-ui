import React, { useState, useEffect, useRef } from 'react';
import Base from 'terra-base';
import Spacer from 'terra-spacer';
import Button from 'terra-button';
import ButtonGroup from 'terra-button-group/lib/ButtonGroup';
import Popup from 'terra-popup';
import Markdown from 'terra-markdown';
import BugForm from './BugForm';
import FeatureForm from './FeatureForm';
import PackageSelect from './PackageSelect';
import IssueSelect from './IssueSelect';
import Packages from './Packages.json';

const repoList = JSON.parse(JSON.stringify(Packages)).repos;

const getPackages = () => {
  const packageList = Object.values(repoList).map(item => item);
  return packageList.concat.apply([], packageList);
};

const getRepo = (packageName) => {
  const repoName = Object.keys(repoList).find(key => repoList[key].includes(packageName));
  return repoName;
};

const featureBody = (description, context, mentions) => `# Feature Request

## Description
${description}

## Additional Context / Screenshots
${context}

## @ Mentions
${mentions}`;

const bugBody = (description, steps, context, expected, solution, environment, mentions) => `# Bug Report

## Description
${description}

## Steps to Reproduce
${steps}

## Additional Context / Screenshots
${context}

## Expected Behavior
${expected}

## Possible Solution
${solution}

## Environment
${environment}

## @ Mentions
${mentions}`;

const environmentTemplate = `* Component Name and Version: 
* Browser Name and Version: 
* Node/npm Version [e.g. Node 8/npm 5]: 
* Webpack Version: 
* Operating System and version (desktop or mobile): `;

const titleTemplate = (title, repo, selectedPackage) => `# Repo
${repo}
# Title
[${selectedPackage}] ${title}
`;

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

  const submitForm = () => {
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
    <Spacer padding="large+2">
      <Base>
        <IssueSelect issueType={issueType} setIssue={setIssue} value={issueType} />
        <PackageSelect setPackage={setPackage} packageList={packageList} />
        { issueType === 'bug'
          ? (
            <BugForm
              title={event => setTitle(event.target.value)}
              description={event => setDescription(event.target.value)}
              steps={event => setSteps(event.target.value)}
              expected={event => setExpected(event.target.value)}
              solution={event => setSolution(event.target.value)}
              environment={event => setEnvironment(event.target.value)}
              environmentTemplate={environmentTemplate}
              context={event => setContext(event.target.value)}
              mentions={event => setMentions(event.target.value)}
            />
          )
          : (
            <FeatureForm
              title={event => setTitle(event.target.value)}
              description={event => setDescription(event.target.value)}
              context={event => setContext(event.target.value)}
              mentions={event => setMentions(event.target.value)}
            />
          )
          }
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
          <ButtonGroup.Button text="Submit" key="Submit" onClick={submitForm} />
        </ButtonGroup>
      </Base>
    </Spacer>
  );
}

export default IssueForm;
