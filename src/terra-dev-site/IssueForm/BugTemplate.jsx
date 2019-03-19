const BugTemplate = props => `# Bug Report

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

${props.mentions ? `## Mentions
${props.mentions}` : ''}`;

export default BugTemplate;
