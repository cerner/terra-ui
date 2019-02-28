import Packages from './Packages.json';

const bugTemplate = (description, steps, context, expected, solution, environment, mentions) => `# Bug Report

## Description
${description}

## Steps to Reproduce
${steps}

## Expected Behavior
${expected}

## Environment
${environment}

${context ? `## Additional Context / Screenshots
${context}` : ''}

${solution ? `## Possible Solution
${solution}` : ''}

${mentions ? `## @ Mentions
${mentions}` : ''}`;

const environmentTemplate = `* Component Name and Version: 
* Browser Name and Version: 
* Node/npm Version [e.g. Node 8/npm 5]: 
* Webpack Version: 
* Operating System and version (desktop or mobile): `;

const errorTemplate = `Character count for form exceeded. If you require more space, submit the issue directly to [github](https://github.com/cerner/${packageRepo}/issues/new/choose).`;

const featureTemplate = (description, context, mentions) => `# Feature Request

## Description
${description}

${context ? `## Additional Context / Screenshots
${context}` : ''}

${mentions ? `## @ Mentions
${mentions}` : ''}`;

const titleTemplate = (title, repo, selectedPackage) => `# Repo
${repo}
# Title
[${selectedPackage}] ${title}
`;

const repoList = JSON.parse(JSON.stringify(Packages)).repos;

const getPackages = () => {
  const packageList = Object.values(repoList).map(item => item);
  return packageList.concat.apply([], packageList);
};

const getRepo = (packageName) => {
  const repoName = Object.keys(repoList).find(key => repoList[key].includes(packageName));
  return repoName;
};

/* eslint-disable compat/compat */
const validateForm = async (value) => {
  const response = new Promise((resolve) => {
    if (!value) {
      return resolve('Field is required.');
    }
    return resolve('');
  });

  await response;
  return response;
};

export {
  bugTemplate,
  environmentTemplate,
  errorTemplate,
  featureTemplate,
  getPackages,
  getRepo,
  titleTemplate,
  validateForm,
};
