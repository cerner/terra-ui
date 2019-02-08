import React from 'react';
import Base from 'terra-base';
import BugForm from './BugForm';
import FeatureForm from './FeatureForm';
import SelectForm from './SelectForm';

class IssueForm extends React.Component {
  constructor() {
    super();
    this.state = {
      issueType: 'bug',
    };
    this.handleIssueSelect = this.handleIssueSelect.bind(this);
  }

  handleIssueSelect(issueType) {
    this.setState({ issueType });
  }

  render() {
    const { issueType } = this.state;
    return (
      <div style={{ marginLeft: '2em' }}>
        <Base>
          <SelectForm issueType={this.handleIssueSelect} />
          { issueType === 'bug' ? <BugForm /> : <FeatureForm />}
        </Base>
      </div>
    );
  }
}

export default IssueForm;
