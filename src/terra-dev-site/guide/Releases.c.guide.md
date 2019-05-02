# Releases

## Release cycle

* Weekly.
  * Terra will release any component that has had changes reviewed and merged into master the last week. Generally we release mid week on Tuesday or Wednesday.
* One-offs released as needed.
  * We keep our master branch in an always release-able state to enable quick turnaround time.

## Bugs

* Terra aims for zero net new bugs and a turn around time of 30 days.

## Versioning

* Terra uses [Semantic Versioning](https://semver.org/) to indicate changes in our Javascript API.

## When will X issue be fixed

As a widely used framework our first concern is quality, all changes to terra must meet our standards before we release them. That said there are a few indicators to help you predict when a change could be available.

1. Has the issue been completed?
  * Check the changelog for the component at terra-ui to find the version of the component containing the fix.
2. Does the issue have a linked pull request?
  * Most pull requests are completed within 1 to 2 weeks of being issued and released within a week.
3. Second, check for your issue on our [project board](https://github.com/orgs/cerner/projects/1).
  * If the issue is there it means it’s currently being worked on and you can track the progress.
4. If the issue is neither out for pull request or in process, it’s been prioritized below other issues.
  * To express interest in the issue, add a comment to the issue. If there is enough interest, we may prioritize the issue higher.

## Where can I find upcoming Major Version Bumps

Upcoming major version bumps can be found by searching our repository issues for the label 'Major Version Bump'. This search will show individual issues that will change the api non-passively and will require a major version bump. When possible we will group major version bumps together for components and related components. In this instance we will create an issue that bundles these major version bumps together.

[Grouped major version bump issue example](https://github.com/cerner/terra-framework/issues/643)

### Major Version Bump Issues

* [terra-clinical](https://github.com/cerner/terra-clinical/issues?q=is%3Aissue+is%3Aopen+label%3A%22Major+Version+Bump%22)
* [terra-core](https://github.com/cerner/terra-core/issues?q=is%3Aissue+is%3Aopen+label%3A%22Major+Version+Bump%22)
* [terra-framework](https://github.com/cerner/terra-framework/issues?q=is%3Aissue+is%3Aopen+label%3A%22Major+Version+Bump%22)
