const FeatureTemplate = props => `# Feature Request

## Description
${props.description}

${props.context ? `## Additional Context / Screenshots
${props.context}` : ''}

${props.mentions ? `## Mentions
${props.mentions}` : ''}`;

export default FeatureTemplate;
