import React from 'react';
import IssueSelect from './IssueSelect';
import RepoSelect from './RepoSelect';
import PackageSelect from './PackageSelect';

const SelectForm = (props) => {
  const { issueType, selectedPackage, packageList } = props;

  return (
    <div>
      <IssueSelect issueType={issueType} />
      <PackageSelect selectedPackage={selectedPackage} packageList={packageList} />
    </div>
  );
};

export default SelectForm;
