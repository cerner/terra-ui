# Terra Governance

- [Overview](#overview)
- [Roles](#roles)
  - [Maintainers](#maintainers)
  - [Committers](#committers)
  - [Contributors](#contributors)
  - [Implementers](#implementers)
  - [The Community](#the-community)
- [Contributions](#contributions)
  - [Main branch](#main-branch)
  - [Feature branches](#feature-branches)
  - [Forks](#forks)
- [Voting and Consensus](#voting-and-consensus)
  - [Approve](#approve)
  - [Abstain](#abstain)
  - [Request changes](#request-changes)
  - [Consensus](#consensus)
- [Releases](#releases)
  - [Versioning](#versioning)
  - [Scope & Feedback](#scope--feedback)
- [Communication](#communication)
- [Code of Conduct](#code-of-conduct)
- [Licensing](#licensing)

## Overview

Terra offers a set of configurable React components designed to help build scalable and modular application UIs. The library easily integrates with webpack-based workflows and was created to solve real-world issues in projects we work on day to day.

The Terra organization produces UI components and related projects that are driven by a community of individuals with varying backgrounds. This document outlines the governance model and consensus driven process by which this community works to ensure we all are operating with the same understanding and expectations. This helps keep our community healthy and happy.

Care has been taken to separate the development process we follow from the tools. With that being said, our use of Github certainly has a great influence in how we've defined this process.

## Roles

### Maintainers

The maintainers are individuals who are recognized by merit and have a demonstrated history of contributions and commitment to the project. These individuals have write access to the code base and are collectively responsible for the project. This includes project direction and scope, accepting contributions, and cultivating the community. Maintainers are expected to maintain an active role in the Terra project and community. Any maintainer who has been inactive in the Terra project for a year will be relieved of the maintainer status.

The current Maintainers on the project are:

- [Dave Kasper](https://github.com/dkasper-was-taken)
- [Matt Henkes](https://github.com/mjhenkes)
- [Ryan Manuel](https://github.com/rfmanuel)
- [Tyler Biethman](https://github.com/tbiethman)

### Committers

The committers are individuals who have demonstrated an active role in the terra community and commit to the project regularly. They are given access to create branches within Terra projects and merge branches to main after checks and reviews have completed. They do not have access to push directly to main. Committers may be removed after long periods of inactivity.

### Contributors

Anyone who has submitted a change to any code or documentation that was successfully accepted is considered a contributor. Each contributor will be recognized in the commit log as well as in the CONTRIBUTORS.md file associated within the corresponding terra project.

### Implementers

Implementers are those who have implemented applications using Terra. Such implementations can be done locally, in a test environment, or in a production system.

### The Community

The community refers to the collective set of individuals and parties contributing to, implementing, and/or following the Terra project.

## Accepting New Maintainers

Any existing maintainer may nominate a contributor to be a new maintainer on the project. The nominee should have a demonstrated history of contributions and commitment. Contributions can come in many forms such as code, issues, documentation, and community engagement. A nominee must receive a unanimous vote from the existing maintainers. Upon being accepted, the maintainers will grant the nominee write access to the Terra repositories and announce the new maintainer.

## Contributions

Anyone is welcome to contribute to the project. All contributions are public and associated to the individual(s) submitting the change.

### main branch

The main branch must be kept in a releasable state.

Trivial changes may be committed directly to a repository. Changes deemed trivial are things like small documentation typos, ecosystem changes (eg, CI configuration, linting rules), etc. Obviously, *trivial* is subjective and anyone is welcome to comment directly on such changes or open an issue regarding them.

All other changes must be reviewed by the maintainers. This includes contributions from the community as well as the current maintainers. We use [Github pull requests](https://help.github.com/articles/about-pull-requests/) and [Github pull request reviews](https://help.github.com/articles/about-pull-request-reviews/) to manage reviewing and merging the proposed changes.

For small changes, at least one maintainer must approve the change. If a maintainer was the author of the change being reviewed, the approval must come from a different maintainer.

For large, significant, or breaking changes, the participating maintainers must reach consensus on the change. Like *trivial*, the notion of *small* and *large* are subjective terms. However, a breaking change should be clear and unambiguous. Note that the size of the contribution does not determine whether the change requires just one approval or consensus. Rather, the impact of the change reflects the type of review required. For instance, the addition of a new component would be considered a significant change and would warrant consensus amongst the maintainers.

Component API changes are scrutinized far more closely than that of documentation or related code projects (like sample projects, test harnesses, etc). As such, API changes are always considered significant and require consensus from the maintainers.

Example change classifications:

Trivial

- Change log updates
- Release preparation
- Dependency lock in or rollbacks

Small

- Test changes
- Documentation changes
- Lint updates
- Minor dependency version bumps

Large

- A new component
- Non-passive public api changes
- Changing the testing framework
- Major dependency version bumps

### Feature branches

Committers should use feature branches to work on in-progress features and changes. Committers may commit directly to feature branches at any time and without prior review.

Committers can submit a pull request from their feature branch to the main branch for review.

### Forks

As contributors do not have write access to the repository, their contributions must be done from personal forks.

Contributors can submit a pull request from their fork to the upstream main branch for review.

## Voting and Consensus

Anyone is welcome to comment on proposed changes. This includes expressing their opinion on why a proposed change should or should not be approved. Ultimately, maintainers make the final determination on accepting a proposed change.

Maintainers should seek out the opinions and experiences from the broader community. It is the maintainers responsibility to balance the feedback from the community along with their own opinions and experiences.

Maintainers must express their votes via the github review process:

### Approve

Green Checkmark, The change is approved as proposed.

### Abstain

Abstentions can be explicit or implicit. An explicit abstain vote is an indication that voter does not have feelings one way or the other on the change. An implicit abstain vote is when no vote is received and does not imply feelings on the change. Abstentions will be represented as a comment stating "abstain".

Maintainers are encouraged to participate when possible.

### Request changes

Red X, These votes ask the author to make alterations to their proposed change. This type of vote **must** clearly articulate the reasoning behind the vote and when possible, include concrete details of the requested changes.

### Consensus

Consensus is defined as a general agreement between the maintainers. Consensus is achieved when all participating maintainers have reached agreement. A minimum of two maintainers must participate for consensus. Adequate time must be provided for maintainers to participate. Again, *adequate* is subjective and left up to the best judgment of the maintainers.

## Releases

The Terra projects strive to be released weekly if the project has had changes the week prior.

### Versioning

All projects shall use [semantic versioning](http://semver.org/). Any community member can propose a release. [Github milestones](https://help.github.com/articles/about-milestones/) are used to associate issues to a particular quarter.

### Scope & Feedback

The intended scope for a quarter will be defined via [Github milestones](https://help.github.com/articles/about-milestones/). This helps frame upcoming releases to all stakeholders and set expectations.

Major releases must be identified and clearly communicated prior to the release. When the scope of a major release is determined and a release timeframe is known, the maintainers are responsible for announcing plans for upcoming major releases to solicit feedback from the community. These major release feedback periods will vary depending on the scope of the release and should be of a sufficient length to allow the community to participate.

Minor/patch releases containing passive enhancements or bug fixes do not warrant delay until a minor/patch release. As such, minor/patch releases often are communicated prior to release or have little prior planning and may not allow for similar release feedback periods.

The maintainers are responsible for announcing releases to the community.

## Communication

Communication should be done in an open and public manner. Sometimes, communication occurs outside of these public channels and this is okay; however, maintainers must summarize any private discussions and any decisions resulting from them in a public channel.

## Code of Conduct

In support of a healthy and inclusive community, Terra uses and enforces a [code of conduct](./CODE_OF_CONDUCT.md) for all members of its community, including maintainers. The code of conduct is adapted from the [Contributor Covenant](http://contributor-covenant.org/).

If you encounter any violation of these terms, please contact any maintainer. All reports will be kept in strict confidence and dealt with promptly.

## Licensing

All code is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
