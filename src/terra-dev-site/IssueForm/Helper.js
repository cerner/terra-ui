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

const environmentTemplate = `* Component Name and Version: 
* Browser Name and Version: 
* Node/npm Version [e.g. Node 8/npm 5]: 
* Webpack Version: 
* Operating System and version (desktop or mobile): `;

const titleTemplate = (title, repo, selectedPackage) => `# Repo
${repo}
# Title
[${selectedPackage}] ${title}
`;

export {
  getPackages,
  getRepo,
  featureBody,
  bugBody,
  environmentTemplate,
  titleTemplate,
};