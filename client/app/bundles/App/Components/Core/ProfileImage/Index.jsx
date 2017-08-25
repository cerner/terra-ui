import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-profile-image/docs/README.md';
import { version } from 'terra-profile-image/package.json';
import Markdown from 'terra-markdown';
import ProfileImageProps from 'terra-profile-image/docs/props-table/ProfileImage.md';
/* eslint-enable import/no-extraneous-dependencies */


// Example Files
import ProfileImageDefault from 'terra-site/lib/examples/profile-image/ProfileImageDefault';

const ProfileImageExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={ProfileImageProps} />
    <ProfileImageDefault />
  </div>
);

export default ProfileImageExamples;
