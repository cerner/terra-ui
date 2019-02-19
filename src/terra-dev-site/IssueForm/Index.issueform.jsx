import React, { useState, useEffect, useRef } from 'react';
import Base from 'terra-base';
import Spacer from 'terra-spacer';
import ButtonGroup from 'terra-button-group/lib/ButtonGroup';
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
};

function IssueForm() {
  const [issueType, setIssue] = useState(initialState.issueType);
  const [selectedPackage, setPackage] = useState(initialState.selectedPackage);
  const [title, setTitle] = useState(initialState.title);
  const [description, setDescription] = useState(initialState.description);
  const [context, setContext] = useState(initialState.context);
  const [mentions, setMentions] = useState(initialState.mentions);
  const [steps, setSteps] = useState(initialState.steps);
  const [expected, setExpected] = useState(initialState.expected);
  const [solution, setSolution] = useState(initialState.solution);
  const [environment, setEnvironment] = useState(initialState.environment);
  const packageList = getPackages();
  const packageRepo = getRepo(selectedPackage);

  const previousIssueType = useRef(issueType);
  useEffect(() => {
    if (previousIssueType.current !== issueType) {
      setTitle('');
      previousIssueType.current = issueType;
    }
  });

  const submitForm = () => {
    const issueBody = issueType === 'bug'
      ? bugBody(description, steps, context, expected, solution, environment, mentions)
      : featureBody(description, context, mentions);

    const encodeBody = encodeURIComponent(issueBody).replace(/%2B/gi, '+');

    window.open(
      `https://github.com/cerner/${packageRepo}/issues/new?title=[${selectedPackage}] ${title}&body=${encodeBody}`,
    );
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
          <ButtonGroup.Button text="Preview" key="preview" />
          <ButtonGroup.Button text="Submit" key="Submit" onClick={submitForm} />
        </ButtonGroup>
      </Base>
    </Spacer>
  );
}

export default IssueForm;
