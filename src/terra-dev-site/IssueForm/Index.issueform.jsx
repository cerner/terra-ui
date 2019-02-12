import React from 'react';
import Base from 'terra-base';
import Spacer from 'terra-spacer';
import ButtonGroup from 'terra-button-group/lib/ButtonGroup';
import BugForm from './BugForm';
import FeatureForm from './FeatureForm';
import SelectForm from './SelectForm';
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

class IssueForm extends React.Component {
  constructor() {
    super();
    this.state = {
      issueType: 'bug',
      selectedPackage: '',
      selectedRepo: '',
      issueBody: '',
      title: '',
    };
    this.handleIssueSelect = this.handleIssueSelect.bind(this);
    this.handlePackageSelect = this.handlePackageSelect.bind(this);
    this.handleCreateIssue = this.handlePackageSelect.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  handleTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleIssueSelect(issueType) {
    this.setState({ issueType });
  }

  handlePackageSelect(selectedPackage) {
    this.setState({ selectedPackage, selectedRepo: getRepo(selectedPackage) });
  }

  render() {
    const { issueType, title } = this.state;
    const packageList = getPackages();

    return (
      <Spacer padding="large+2">
        <Base>
          <SelectForm
            issueType={this.handleIssueSelect}
            selectedPackage={this.handlePackageSelect}
            packageList={packageList}
          />
          { issueType === 'bug' ? <BugForm title={this.handleTitle} value={title} /> : <FeatureForm title={this.handleTitle} value={title} />}
          <ButtonGroup style={{ paddingLeft: '40em' }}>
            <ButtonGroup.Button text="Preview" key="preview" />
            <ButtonGroup.Button text="Submit" key="Submit" />
          </ButtonGroup>
        </Base>
      </Spacer>
    );
  }
}

export default IssueForm;
