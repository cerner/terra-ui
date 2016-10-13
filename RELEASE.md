# How to release

Releasing the project requires these steps:

0. Verify the version number in `package.json`
1. There are 3 scripts for releasing a new version. Make sure to follow [semantic versioning](semantic-versioning).
  - release:patch
  - release:minor
  - release:major

Each of these commands will cut a tag for the release. This project is not published to npm.

[semantic-versioning]: http://semver.org/
