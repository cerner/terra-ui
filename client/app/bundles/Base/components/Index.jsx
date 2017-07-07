import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-base/docs/README.md';
import { version } from 'terra-base/package.json';
import Markdown from 'terra-markdown';
import Base from 'terra-base';
import BaseProps from 'terra-base/docs/props-table/Base.md';
/* eslint-enable import/no-extraneous-dependencies */


const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const BaseExamples = () => (
  <Base locale={locale}>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={BaseProps} />
    <div>
      <h1>Globale BaseStyles example</h1>
      <p>Sample paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <img src="https://placeholdit.imgix.net/~text?txtsize=20&txt=200%C3%97200&w=200&h=200" alt="Placeholder" />
      <dl>
        <dt>Description name</dt>
        <dd>Description value</dd>
        <dt>Description name</dt>
        <dd>Description value</dd>
      </dl>
      <ol>
        <li>Ordered list item</li>
        <li>Ordered list item
          <ol>
            <li>Nested ordered list item</li>
          </ol>
        </li>
        <li>Ordered list item</li>
      </ol>
      <ul>
        <li>Unordered list item</li>
        <li>Unordered list item
          <ol>
            <li>Nested unordered list item</li>
          </ol>
        </li>
        <li>Unordered list item</li>
      </ul>
    </div>
  </Base>
);

export default BaseExamples;
