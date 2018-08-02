# Git Workflow
The follow section outlines our Git workflow for terra-ui projects.

## Fork the repository

Start by [forking](https://help.github.com/articles/fork-a-repo/) the repo you’ll be working on.

_Note: The [terra team](https://github.com/orgs/cerner/teams/terra) and [terra contributors](https://github.com/orgs/cerner/teams/terra-contributors) can ignore this step and clone the repo directly._

## Clone the repo

`git clone git@github.com:cerner/terra-core.git`

## Clone your forked repo

New contributors will need to clone their forked repo.

`git clone git@github.com:<github username>/terra-core.git`

## Creating a branch

Before starting your work, first ensure you're in the master branch and that you've pulled down the latest changes:

```sh
git checkout master
git pull
```

Next, create a new branch for your work, with an appropriate name for your change:

`git checkout -b my-feature-or-bug-branch`

## Development workflow

Read through our [development workflow guide](#/contributing/terra-ui/developer-workflow) to better understand the development process.

## Committing

Regularly git commit locally and git push to the remote branch. [Write good commit messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).
Your commits will automatically be squashed when your PR is merged into master.

`git add .`
`git commit -m "fixes bug xxx"`


This will commit your changes to your local copy of the repo, (distinct from your fork on Github).

When addressing feedback, push additional commits instead of overwriting or squashing (the branch will be automatically squashed when the PR is merged).

## Submit a PR

When your branch is ready, open a new pull request via GitHub. The repo [PR template](https://github.com/cerner/terra-ui/blob/master/.github/PULL_REQUEST_TEMPLATE.md) will guide you toward describing your contribution.

You can [use words in PR description that refrence the related issue](https://help.github.com/articles/closing-issues-using-keywords/) and will automatically close it when the PR is merged.

For example, to close an issue numbered `123`, you could use the phrase `Closes #123` or `Closes: #123` in your pull request description.

## Code Review

Per our [terra governance doc](https://github.com/cerner/terra-ui/blob/master/GOVERNANCE.md), changes must be reviewed by the maintainers. This includes contributions from the community as well as the current maintainers. We use [Github pull requests](https://help.github.com/articles/about-pull-requests/) and [Github pull request reviews](https://help.github.com/articles/about-pull-request-reviews/) to manage reviewing and merging the proposed changes.

In order for your pull request to be accepted, the [Travis CI](https://travis-ci.org/) build needs to pass.

For small changes, at least one maintainer must approve the change. If a maintainer was the author of the change being reviewed, the approval must come from a different maintainer.

Changes will be considered small unless otherwise noted by a label, “**Large**”, on the PR.

For large, significant, or breaking changes, the participating maintainers must reach consensus on the change. Like *trivial*, the notion of *small* and *large* are subjective terms. However, a breaking change should be clear and unambiguous. Note that the size of the contribution does not determine whether the change requires just one approval or consensus. Rather, the impact of the change reflects the type of review required. For instance, the addition of a new component would be considered a significant change and would warrant consensus amongst the maintainers.

Component API changes are scrutinized far more closely than that of documentation or related code projects (like sample projects, test harnesses, etc). As such, API changes are always considered significant and require consensus from the maintainers.

Along with reviews from maintainers, depending on the change, you may need a review from our **UX designer** and our **Solution designer**.

This is denoted with the following labels added on the PR, “**Needs UX review**” and “**Needs functional review**”.

Once our UX designer and Solution designer complete their reviews, they’ll leave a comment and remove the associated labels.

If a PR has a label of “**Tech Only**” on it, UX and functional review is not required.

Depending on the size of the changes, additional reviews via meetings/emails may be necessary.

If decisions are made in meetings/emails, details/decisions should be added to the relevant GitHub issue as comments when possible to ensure that the decisions/changes/reasons are tracked and documented.

## Merging the PR

Once everything is good on the PR, someone from the [terra team](https://github.com/orgs/cerner/teams/terra) will merge your change in!

After the PR has been merged into master, the PR branch will be deleted.

## Versioning

New versions are published in weekly releases. The version number will be determined based on changes in the code reviews / changes described in the changelog. The version number will be automatically bumped in the package.json during release and does not need to be updated in a PR.

## Releases

At that point, your contribution will be available in the next official release of terra-ui. Releases happen on weekly basis, whatever is ready in the master branch gets released. If you have any questions at all, don't hesitate to get in touch. We love to talk all things terra and we look forward to seeing your contribution!
