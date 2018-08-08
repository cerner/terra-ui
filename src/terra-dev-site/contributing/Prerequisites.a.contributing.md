# Prerequisites

The following sections are helpful to be familiar with before starting a contribution to Terra UI. If you are new to open source, be sure to check out [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Project Governance

This project is maintained and governed following our [terra governance model](https://github.com/cerner/terra-ui/blob/master/GOVERNANCE.md). Along with this, we’ve adopted a [Code of Conduct](https://github.com/cerner/terra-ui/blob/master/CODE_OF_CONDUCT.md) as our guide for community behavior.

## Licensing

All files are released with the Apache 2.0 licence.
Please add your name to the CONTRIBUTORS.md file in the repo you are contributing to. Adding your name to the CONTRIBUTORS.md file signifies agreement to all rights and reservations provided by the [License](https://github.com/cerner/terra-ui/blob/master/LICENSE).

## We Welcome PRs Regarding…

* Bug fixes
* Variants on components
* Documentation updates
* Increasing test coverage

To help you get your feet wet and get you familiar with our contribution process, we have a list of [beginner-friendly issues](https://github.com/search?q=is%3Aopen+is%3Aissue+label%3A%22beginner-friendly%22+archived%3Afalse+repo%3Acerner%2Fterra-clinical+repo%3Acerner%2Fterra-core+repo%3Acerner%2Fterra-dev-site+repo%3Acerner%2Fterra-framework+repo%3Acerner%2Fterra-toolkit+repo%3Acerner%2Fgenerator-terra-module+repo%3Acerner%2Feslint-config-terra+repo%3Acerner%2Fstylelint-config-terra+repo%3Acerner%2Fbrowserslist-config-terra+repo%3Acerner%2Fterra-kaiju-plugin+repo%3Acerner%2Fkaiju-plugin-utils+repo%3Acerner%2Fkaiju+repo%3Acerner%2Fterra-ui+repo%3Acerner%2Fkaiju-docker-base-images+created%3A*..*) that contain bugs or small features that have a relatively limited scope. This is a great place to get started. We also have a set of issues we could use help on labelled by the "[help wanted](https://github.com/search?q=is%3Aopen+is%3Aissue+label%3A%22help-wanted%22+archived%3Afalse+repo%3Acerner%2Fterra-clinical+repo%3Acerner%2Fterra-core+repo%3Acerner%2Fterra-dev-site+repo%3Acerner%2Fterra-framework+repo%3Acerner%2Fterra-toolkit+repo%3Acerner%2Fgenerator-terra-module+repo%3Acerner%2Feslint-config-terra+repo%3Acerner%2Fstylelint-config-terra+repo%3Acerner%2Fbrowserslist-config-terra+repo%3Acerner%2Fterra-kaiju-plugin+repo%3Acerner%2Fkaiju-plugin-utils+repo%3Acerner%2Fkaiju+repo%3Acerner%2Fterra-ui+repo%3Acerner%2Fkaiju-docker-base-images+created%3A*..*)" label.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.
If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take over it but you should still leave a comment.

## Repositories

Terra UI is divided into a several projects:
* [terra-ui](https://github.com/cerner/terra-ui) - The primary documentation site for terra.
* [terra-core](https://github.com/cerner/terra-core) -  Contains core react components to help developers quickly build out new applications.
* [terra-framework](https://github.com/cerner/terra-framework) - Contains higher order, opinionated react components to help developers quickly build out new applications.
* [terra-clinical](https://github.com/cerner/terra-clinical) - Contains clinical focused components to help developers quickly build out new applications.
* [terra-toolkit](https://github.com/cerner/terra-toolkit) - A set of tools providing configuration, as well as helper functions for testing.
* [terra-dev-site](https://github.com/cerner/terra-dev-site) - Common 'dev site' for documenting terra components.
* [generator-terra-module](https://github.com/cerner/generator-terra-module) - Yeoman based generator for scaffolding out a new directory for terra npm packages in a monorepo.
* [eslint-config-terra](https://github.com/cerner/eslint-config-terra) - Terra’s eslint configuration.
* [stylelint-config-terra](https://github.com/cerner/stylelint-config-terra) - Terra’s stylelint configuration.
* [browserslist-config-terra](https://github.com/cerner/browserslist-config-terra) - Terra’s browserslist configuration.

## Development Setup

### Git / GitHub

You must have [git](https://help.github.com/articles/set-up-git/) installed on your computer and an account with [Github](https://github.com/).

### Node / NPM

You’ll need to install [Node.js](https://nodejs.org/) and npm. (npm will be installed when you install Node.js)

We currently use the 8.x version of node in our projects.

We recommend using [nvm](https://github.com/creationix/nvm) to install and manage node on your machine.

In the project directory you can run `nvm use` to use the specified version of node associated with the project.

If your console tells you that you don’t have that version installed, run `nvm install`

### Docker

[Terra Toolkit](https://github.com/cerner/terra-toolkit) uses [Docker](https://www.docker.com/community-edition) to setup, run, and tear down selenium to ensure a consistent testing environment locally and in continuous integration build systems. To use Terra Toolkit for webdriver testing, you must install docker on your machine.

Install Docker version 17.09.0 or higher. Installation instructions can be found at [https://docs.docker.com/install/](https://docs.docker.com/install/).