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
import { BuildYourOwnAlertExample as CustomizableAlertExample } from 'terra-site/lib/examples/alert/BuildYourOwnAlertExample';
// Styles
import styles from '../../Index.scss';

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
    <hr className={styles.hr} />
    <AlertExample />
    <hr className={styles.hr} />
    <ErrorExample />
    <hr className={styles.hr} />
    <WarningExample />
    <hr className={styles.hr} />
    <AdvisoryExample />
    <hr className={styles.hr} />
    <InfoExample />
    <hr className={styles.hr} />
    <SuccessExample />
    <hr className={styles.hr} />
    <CustomExample />
    <hr className={styles.hr} />
    <LongTextExample />
    <hr className={styles.hr} />
    <ActionExample />
    <hr className={styles.hr} />
    <SmallContainerExample />
    <hr className={styles.hr} />
    <DismissibleExample />
    <hr className={styles.hr} />
    <ActionAndDismissibleExample />
    <hr className={styles.hr} />
    <CustomizableAlertExample />
    <hr className={styles.hr} />
  </div>
);

export default AlertExamples;
