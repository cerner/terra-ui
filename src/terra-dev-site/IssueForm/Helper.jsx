import PropTypes from 'prop-types';
import Packages from './Packages.json';

// Prop types for all components.
const propTypes = {
  /**
   * List of packages from terra clinical, core, and framework.
   */
  packageList: PropTypes.arrayOf(PropTypes.string),
  /**
   * Functions that set state with the provided field values.
   */
  setContext: PropTypes.func,
  setDescription: PropTypes.func,
  setEnvironment: PropTypes.func,
  setExpected: PropTypes.func,
  setIssue: PropTypes.func,
  setMentions: PropTypes.func,
  setPackage: PropTypes.func,
  setSolution: PropTypes.func,
  setSteps: PropTypes.func,
  setTitle: PropTypes.func,
  /**
   * Sets the value of the issue type select box to the selected issue type.
   */
  value: PropTypes.string,
};

// Templates used for preview, errors, and forms.
const bugTemplate = props => `# Bug Report

## Description
${props.description}

## Steps to Reproduce
${props.steps}

## Expected Behavior
${props.expected}

## Environment
${props.environment}

${props.context ? `## Additional Context / Screenshots
${props.context}` : ''}

${props.solution ? `## Possible Solution
${props.solution}` : ''}

${props.mentions ? `## @ Mentions
${props.mentions}` : ''}`;

const disclaimerTemplate = `When logging issues to Terra, it is most helpful to have steps to reproduce that just contain the minimal set of components.  Even better would be to be able to reproduce it on <a href="https://engineering.cerner.com/terra-ui" target="_blank">https://engineering.cerner.com/terra-ui</a>. 
    If there are videos or screenshots that are available, those are helpful as well. 

**Note to Cerner associates:** if you have proprietary information, don't post it directly.  Instead post a link to a site that can be protected by the Cerner IDP (e.g. sharepoint or new relic).`;

const environmentTemplate = `* Component Version: 
* Browser Name and Version: 
* Node/npm Version [e.g. Node 8/npm 5]: 
* Webpack Version: 
* Operating System and version (desktop or mobile): `;

const errorTemplate = packageRepo => `Character count for form exceeded. If you require more space, submit the issue directly to <a href="https://github.com/cerner/${packageRepo}/issues/new/choose" target="_blank">github</a>.`;

const featureTemplate = props => `# Feature Request

## Description
${props.description}

${props.context ? `## Additional Context / Screenshots
${props.context}` : ''}

${props.mentions ? `## @ Mentions
${props.mentions}` : ''}`;

const titleTemplate = (title, repo, selectedPackage) => `# Repo
${repo}
# Title
[${selectedPackage}] ${title}
`;

// Functions for gathering package lists and their associated repos.
const repoList = JSON.parse(JSON.stringify(Packages)).repos;

const getPackages = () => {
  const packageList = Object.values(repoList).map(item => item);
  return packageList.concat.apply([], packageList);
};

const getRepo = (packageName) => {
  const repoName = Object.keys(repoList).find(key => repoList[key].includes(packageName));
  return repoName;
};

const pattern = /^[a-z0-9!"#$%&'()*+,./:;<>=?@[\] ^_`{|}~-]*$/im;
// Form validation for required fields.
/* eslint-disable compat/compat */
const validateForm = (value) => {
  if (!pattern.test(value)) {
    return 'Invalid character used';
  }
  if (!value) {
    return 'Field is required.';
  }
  return '';
};

export {
  bugTemplate,
  environmentTemplate,
  disclaimerTemplate,
  errorTemplate,
  featureTemplate,
  getPackages,
  getRepo,
  propTypes,
  titleTemplate,
  validateForm,
};
