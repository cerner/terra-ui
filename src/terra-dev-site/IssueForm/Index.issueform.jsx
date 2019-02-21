import React, { useState, useEffect, useRef, useContext } from 'react';
import Base from 'terra-base';
import Spacer from 'terra-spacer';
import Button from 'terra-button';
import Overlay from 'terra-overlay';
import ButtonGroup from 'terra-button-group/lib/ButtonGroup';
import Popup from 'terra-popup';
import Markdown from 'terra-markdown';
import BugForm from './BugForm';
import FeatureForm from './FeatureForm';
import PackageSelect from './PackageSelect';
import IssueSelect from './IssueSelect';
import IssuePreview from './IssuePreview';
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

const titleTemplate = (title, repo, selectedPackage) => `# Title
[${repo}][${selectedPackage}] ${title}
`;

const initialState = {
  issueType: 'bug',
  selectedPackage: '',
  title: '',
  description: '',
  context: '',
  mentions: '',
  steps: '',
  expected: '',
  solution: '',
  environment: '',
  isOpen: false,
  ref: null,
};

function IssueForm() {
  const [title, setTitle] = useState(initialState.title);
  const [issueType, setIssue] = useState(initialState.issueType);

  const previousIssueType = useRef(issueType);
  useEffect(() => {
    if (previousIssueType.current !== issueType) {
      setTitle('');
      previousIssueType.current = issueType;
    }
  });

  const [selectedPackage, setPackage] = useState(initialState.selectedPackage);
  const [description, setDescription] = useState(initialState.description);
  const [context, setContext] = useState(initialState.context);
  const [mentions, setMentions] = useState(initialState.mentions);
  const [steps, setSteps] = useState(initialState.steps);
  const [expected, setExpected] = useState(initialState.expected);
  const [solution, setSolution] = useState(initialState.solution);
  const [environment, setEnvironment] = useState(initialState.environment);
  const [isOpen, setIsOpen] = useState(initialState.isOpen);
  const [ref, setRef] = useState(initialState.ref);

  const packageList = getPackages();
  const packageRepo = getRepo(selectedPackage);

  const issueBody = issueType === 'bug'
    ? bugBody(description, steps, context, expected, solution, environment, mentions)
    : featureBody(description, context, mentions);

  const markdownBody = titleTemplate(title, packageRepo, selectedPackage) + issueBody;

  const submitForm = () => {
    const encodeBody = encodeURIComponent(issueBody).replace(/%2B/gi, '+');

    window.open(
      `https://github.com/cerner/${packageRepo}/issues/new?title=[${selectedPackage}] ${title}&body=${encodeBody}`,
    );
  };

  const openPopup = () => {
    setIsOpen(true);
  }

  const closePopup = () => {
    setIsOpen(false);
  }

  const popupRef = useRef();
  const newTarget = () => {
    return setRef(popupRef.current);
  }

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
        <ButtonGroup style={{ paddingLeft: '40em' }}>
          <React.Fragment>
            <Popup isOpen={isOpen} contentHeight="auto" targetRef={ref} contentWidth="640" onRequestClose={closePopup} key="preview-popup">
              <Spacer padding="large+2">
                <Markdown src={markdownBody} />
              </Spacer>
            </Popup>
            <Button text="Preview" onClick={openPopup} refCallback={newTarget} key="Preview" />
          </React.Fragment>
          <ButtonGroup.Button text="Submit" key="Submit" onClick={submitForm} />
        </ButtonGroup>
      </Base>
    </Spacer>
  );
}
//          <IssuePreview title={title} repo={packageRepo} openPopup={openPopup} targetRef={newTarget} open={isOpen} close={closePopup} selectedPackage={selectedPackage} issueBody={issueBody} key="Preview" />

export default IssueForm;
