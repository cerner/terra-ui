# Git Workflow
The follow section outlines our Git workflow for Terra UI projects.

## Fork The Repository

Start by [forking](https://help.github.com/articles/fork-a-repo/) the repo you’ll be working on.

_Note: The [terra team](https://github.com/orgs/cerner/teams/terra) and [terra contributors](https://github.com/orgs/cerner/teams/terra-contributors) can ignore this step and clone the repo directly._

## Creating A Branch

Before starting your work, first ensure you're in the master branch and that you've pulled down the latest changes:

```sh
git checkout master
git pull
```

Next, create a new branch for your work, with an appropriate name for your change:

`git checkout -b my-feature-or-bug-branch`

## Development Workflow

Read through our [development workflow guide](/#/contributing/terra-ui/developer-workflow) to better understand the development process.

## Adding, Committing, And Pushing Changes

Git commit to the local branch and git push to the remote branch. [Write good commit messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).
Your commits will automatically be squashed when your PR is merged into master.

This will commit your changes to your local copy of the repo.

```sh
git add .
git commit -m "Fixes issue #123"
```

Then push your changes to the remote repo.

`git push`

## Submitting Your Contribution

We use [Github pull requests](https://help.github.com/articles/about-pull-requests/) and [Github pull request reviews](https://help.github.com/articles/about-pull-request-reviews/) to manage reviewing and merging the proposed changes.

### Submit A Pull Request

When your branch is ready, open a new pull request via GitHub. The repo [PR template](https://github.com/cerner/terra-ui/blob/master/.github/PULL_REQUEST_TEMPLATE.md) will guide you toward describing your contribution.

You can [use words in PR description that refrence the related issue](https://help.github.com/articles/closing-issues-using-keywords/) and will automatically close it when the PR is merged.

For example, to close an issue numbered `123`, you could use the phrase `Closes #123` or `Closes: #123` in your pull request description.

### Code Review

Per our [terra governance model](https://github.com/cerner/terra-ui/blob/master/GOVERNANCE.md), changes must be reviewed by the maintainers. This includes contributions from the community, as well as the current maintainers.

In order for your pull request to be accepted, the [Travis CI](https://travis-ci.org/) build needs to pass.

### Small And Large Changes

For small changes, at least one maintainer must approve the change. If a maintainer was the author of the change being reviewed, the approval must come from a different maintainer.

For large, significant, or breaking changes, the participating maintainers must reach consensus on the change. Like *trivial*, the notion of *small* and *large* are subjective terms. However, a breaking change should be clear and unambiguous. Note that the size of the contribution does not determine whether the change requires just one approval or consensus. Rather, the impact of the change reflects the type of review required. For instance, the addition of a new component would be considered a significant change and would warrant consensus amongst the maintainers.

Component API changes are scrutinized far more closely than that of documentation or related code projects (like sample projects, test harnesses, etc). As such, API changes are always considered significant and require consensus from the maintainers.

Depending on the size of the changes, additional reviews via meetings/emails may be necessary.

If decisions are made in meetings/emails, details/decisions should be added to the relevant GitHub issue as comments when possible to ensure that the decisions/changes/reasons are tracked and documented.

#### PR Labelling

We will add the appropriate label on the PR: "**Small**" or "**Large**" to denote the change size.

Changes are typically considered small unless otherwise noted by a label, “**Large**”, on the pull request.

### UX And Functional Reviews

Along with reviews from maintainers, depending on the change, you may need a review from our **UX designer** and our **Solution designer**.

This is denoted with the following labels added on the PR, “**Needs UX review**” and “**Needs functional review**”.

Once our UX designer and Solution designer complete their reviews, they’ll leave a comment and remove the associated labels.

### Tech Only Changes
If a PR has a label of “**Tech Only**” on it, UX and functional review is not required, though this will still need reviews by maintainers based on the small and large change concepts.

### Pull Request Deployments

When a PR is created in one of a the following repos, [terra-core](https://github.com/cerner/terra-core), [terra-clinical](https://github.com/cerner/terra-clinical), [terra-framework](https://github.com/cerner/terra-framework), [terra-ui](https://github.com/cerner/terra-ui), [terra-dev-site](https://github.com/cerner/terra-dev-site), a Heroku PR deployment is triggered automatically that will generate a build of the code on the PR and deploy it to a generated URL. This URL will be added as an link on the PR automatically based on the success of the Heroku build.

If the Heroku deployment build fails, a link reporting the failed build status will be added to the PR. If your PR build fails, reach out to one of the maintainers to look into the build issue.

If you've forked the repo and are submitting a PR back to the upstream repo, Heroku PR builds will not be triggered automatically when opening a PR. Reach out to one of the maintainers to trigger the Heroku PR deployment for your PR from a fork.

## Adding The Pull Request To The Project Board

We use [GitHub project boards](https://help.github.com/articles/about-project-boards/) to track what work is actively being developed. If you are on the [terra team](https://github.com/orgs/cerner/teams/terra), you can add PRs to the project board by clicking on the "Projects" section in the right sidebar, then clicking on the "Organizations" tab, and then clicking on "Terra". This will add a card for the PR to awaiting triage section of the [terra project board](https://github.com/orgs/cerner/projects/1). From here, [terra team](https://github.com/orgs/cerner/teams/terra) members should manage their PR card on the board and update as they work on the issue.

## Merging The Pull Request

Once everything is good on the PR, an individual from the [terra team](https://github.com/orgs/cerner/teams/terra) will merge your change in!

After the PR has been merged into master, the PR branch will be deleted.

## Versioning

We view the React.js props API of our components as our main public API. We use this to guide us when versioning components.

Prior to components reaching v1.0.0, a component is considered to be in a beta stage. Components in beta stage may include breaking changes, new features, and bug fixes all within v0.x.x releases.

New versions are published in weekly releases. The version number will be determined based on changes in the pull request / changes described in the changelog. The version number will be automatically bumped in the package.json during release and does not need to be updated in a PR.

For more information on versioning, check out [https://semver.npmjs.com/](https://semver.npmjs.com/)

## Releases

At that point, your contribution will be available in the next official release of Terra UI. Releases happen on weekly basis, whatever is ready in the master branch gets released. If you have any questions at all, don't hesitate to get in touch. We love to talk all things terra and we look forward to seeing your contribution!
