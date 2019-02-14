import React, { useState, useEffect, useRef } from 'react';
import Base from 'terra-base';
import Spacer from 'terra-spacer';
import ButtonGroup from 'terra-button-group/lib/ButtonGroup';
import BugForm from './BugForm';
import FeatureForm from './FeatureForm';
import PackageSelect from './PackageSelect';
import IssueSelect from './IssueSelect';
import Packages from './Packages.json';

const getPackages = () => {
  const repoList = JSON.parse(JSON.stringify(Packages)).repos;
  const packageList = Object.values(repoList).map(item => item);

  return packageList.concat.apply([], packageList);
};

const getRepo = (packageName) => {
  const packageJSON = JSON.parse(JSON.stringify(Packages)).repos;
  const repoName = Object.keys(packageJSON).find(key => packageJSON[key].includes(packageName));

  return repoName;
};

const initialState = {
  issueType: 'bug',
  title: '',
};

function IssueForm() {
  const [issueType, setIssue] = useState(initialState.issueType);
  const [selectedPackage, setPackage] = useState('');
  const [title, setTitle] = useState(initialState.title);
  const packageList = getPackages();
  const packageRepo = getRepo(selectedPackage);

  const previousIssueType = useRef(issueType);
  useEffect(() => {
    if (previousIssueType.current !== issueType) {
      setTitle('');
      previousIssueType.current = issueType;
    }
  });

  return (
    <Spacer padding="large+2">
      <Base>
        <IssueSelect issueType={issueType} setIssue={setIssue} value={issueType} />
        <PackageSelect setPackage={setPackage} packageList={packageList} />
        { issueType === 'bug'
          ? (
            <BugForm
              title={event => setTitle(event.target.value)}
            />
          )
          : (
            <FeatureForm
              title={event => setTitle(event.target.value)}
            />
          )
          }
        <ButtonGroup style={{ paddingLeft: '40em' }}>
          <ButtonGroup.Button text="Preview" key="preview" />
          <ButtonGroup.Button text="Submit" key="Submit" />
        </ButtonGroup>
      </Base>
    </Spacer>
  );
}

export default IssueForm;
