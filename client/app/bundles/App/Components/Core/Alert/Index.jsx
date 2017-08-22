/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import AlertProps from 'terra-alert/docs/props-table/Alert.md';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-alert/docs/README.md';
import { version } from 'terra-alert/package.json';

// Example Files
import AlertExample from 'terra-site/lib/examples/alert/AlertExample';
import ErrorExample from 'terra-site/lib/examples/alert/ErrorExample';
import WarningExample from 'terra-site/lib/examples/alert/WarningExample';
import AdvisoryExample from 'terra-site/lib/examples/alert/AdvisoryExample';
import InfoExample from 'terra-site/lib/examples/alert/InfoExample';
import SuccessExample from 'terra-site/lib/examples/alert/SuccessExample';
import CustomExample from 'terra-site/lib/examples/alert/CustomExample';
import LongTextExample from 'terra-site/lib/examples/alert/LongTextExample';
import ActionExample from 'terra-site/lib/examples/alert/ActionExample';
import SmallContainerExample from 'terra-site/lib/examples/alert/SmallContainerExample';
import DismissibleExample from 'terra-site/lib/examples/alert/DismissibleExample';
import ActionAndDismissibleExample from 'terra-site/lib/examples/alert/ActionAndDismissibleExample';
import BuildYourOwnAlertExample from 'terra-site/lib/examples/alert/BuildYourOwnAlertExample';

const AlertExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={AlertProps} />
    <h2>Alert Examples</h2>
    <br />
    <p>
    PLEASE NOTE: The strings that are internationalized in the following examples are the default titles for each of
    the alert types (except the custom alert type), and the text for the Dismiss button.
    </p>
    <br /><hr /><br />
    <AlertExample />
    <br /><hr /><br />
    <ErrorExample />
    <br /><hr /><br />
    <WarningExample />
    <br /><hr /><br />
    <AdvisoryExample />
    <br /><hr /><br />
    <InfoExample />
    <br /><hr /><br />
    <SuccessExample />
    <br /><hr /><br />
    <CustomExample />
    <br /><hr /><br />
    <LongTextExample />
    <br /><hr /><br />
    <ActionExample />
    <br /><hr /><br />
    <SmallContainerExample />
    <br /><hr /><br />
    <DismissibleExample />
    <br /><hr /><br />
    <ActionAndDismissibleExample />
    <br /><hr /><br />
    <BuildYourOwnAlertExample />
    <br /><hr /><br />
  </div>
);

export default AlertExamples;
