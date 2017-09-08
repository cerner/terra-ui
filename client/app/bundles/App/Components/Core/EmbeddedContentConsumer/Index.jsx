/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import EmbeddedContentConsumerProps from 'terra-embedded-content-consumer/docs/props-table/EmbeddedContentConsumer.md';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-embedded-content-consumer/docs/README.md';
import { version } from 'terra-embedded-content-consumer/package.json';
import { Consumer } from 'xfc';

// Example files
import BasicConsumer from 'terra-site/lib/examples/embedded-content-consumer/consumers/BasicConsumer';
import CustomEventConsumer from 'terra-site/lib/examples/embedded-content-consumer/consumers/CustomEventConsumer';
import CustomEventsConsumer from 'terra-site/lib/examples/embedded-content-consumer/consumers/CustomEventsConsumer';
import DataStatusConsumer from 'terra-site/lib/examples/embedded-content-consumer/consumers/DataStatusConsumer';
import FillConsumer from 'terra-site/lib/examples/embedded-content-consumer/consumers/FillConsumer';
import OnReadyConsumer from 'terra-site/lib/examples/embedded-content-consumer/consumers/OnReadyConsumer';

Consumer.init();

const EmbeddedContentConsumerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Embedded Content Consumer</h2>
    <Markdown src={EmbeddedContentConsumerProps} />
    <h2 id="Basic Embedded Content">Basic Embedded Content</h2>
    <BasicConsumer />
    <h2 id="Filled Embedded Content">Filled Embedded Content</h2>
    <FillConsumer />
    <h2 id="Custom Event Embedded Content">Custom Event Embedded Content</h2>
    <CustomEventConsumer />
    <h2 id="Custom Events Embedded Content">Custom Events Embedded Content</h2>
    <CustomEventsConsumer />
    <h2 id="Data status Embedded Content">Data Status Embedded Content</h2>
    <DataStatusConsumer />
    <h2 id="On Ready Embedded Content">On Ready Embedded Content</h2>
    <OnReadyConsumer />
  </div>
);

export default EmbeddedContentConsumerExamples;
