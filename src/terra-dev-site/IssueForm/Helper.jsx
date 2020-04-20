import PropTypes from 'prop-types';
import Packages from './Packages.json';

// Prop types for all components.
const propTypes = {
  /**
   * List of packages from terra clinical, core, and framework.
   */
  packageList: PropTypes.arrayOf(PropTypes.string),
  /**
   * Function that sets context state with the additional context field value.
   */
  setContext: PropTypes.func,
  /**
   * Function that sets description state with the description field value.
   */
  setDescription: PropTypes.func,
  /**
   * Function that sets environment state with the environment field value.
   * Note: This includes the pre-fill template.
   */
  setEnvironment: PropTypes.func,
  /**
   * Function that sets expected state with the expected result field value.
   */
  setExpected: PropTypes.func,
  /**
   * Function that sets issueType state with the issue type select value.
   */
  setIssue: PropTypes.func,
  /**
   * Function that sets mentions state with the mentions field value.
   */
  setMentions: PropTypes.func,
  /**
   * Function that sets selectedPackage state with the package select value.
   */
  setPackage: PropTypes.func,
  /**
   * Function that sets solution state with the potential solution field value.
   */
  setSolution: PropTypes.func,
  /**
   * Function that sets steps state with the steps to reproduce field value.
   */
  setSteps: PropTypes.func,
  /**
   * Function that sets title state with the title field value.
   */
  setTitle: PropTypes.func,
  /**
   * Sets the value of the issue type select box to the selected issue type.
   */
  value: PropTypes.string,
};

// Templates used for preview, errors, and forms.
const disclaimerTemplate = `When logging issues to Terra, it is helpful to have steps to reproduce the issue using a reduced test case, or examples from <a href="https://engineering.cerner.com/terra-ui" target="_blank">https://engineering.cerner.com/terra-ui</a>.
    If there are videos or screenshots that are available, those are helpful as well.

**Note to Cerner associates:** If you have proprietary information, don't post it directly.  Instead post a link to a site that can be protected by the Cerner IDP (e.g. sharepoint).`;

const environmentTemplate = `* Component Version:
* Browser Name and Version:
* Node/npm Version [e.g. Node 8/npm 5]:
* Webpack Version:
* Operating System and version (desktop or mobile): `;

const titleTemplate = (title, repo, selectedPackage) => `# Repo
${repo}
# Title
[${selectedPackage}] ${title}
`;

// Functions for gathering package lists and their associated repos.
const repoList = JSON.parse(JSON.stringify(Packages)).repos;

const getPackages = () => {
  // eslint-disable-next-line compat/compat
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
  environmentTemplate,
  disclaimerTemplate,
  getPackages,
  getRepo,
  propTypes,
  titleTemplate,
  validateForm,
};
