import React from 'react';
import IssueSelect from './IssueSelect';
import RepoSelect from './RepoSelect';
import PackageSelect from './PackageSelect';

class SelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPackage: '',
      value: '',
    };
    this.handleRepoSelect = this.handleRepoSelect.bind(this);
    this.handlePackageSelect = this.handlePackageSelect.bind(this);
  }

  handleRepoSelect(value) {
    this.setState({ value });
  }

  handlePackageSelect(selectedPackage) {
    this.setState({ selectedPackage });
  }

  render() {
    const currentRepo = this.state.value;
    const currentPackage = this.state.selectedPackage;

    return (
      <div>
        <IssueSelect issueType={this.props.issueType} />
        <RepoSelect repo={this.handleRepoSelect} value={currentRepo} />
        { this.state.value ? <PackageSelect repo={currentRepo} selectedPackage={this.handlePackageSelect} value={currentPackage} /> : null }
      </div>
    );
  }
}

export default SelectForm;
