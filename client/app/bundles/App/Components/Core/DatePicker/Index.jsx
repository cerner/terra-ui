import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-date-picker/docs/README.md';
import { version } from 'terra-date-picker/package.json';
import Markdown from 'terra-markdown';
import DatePickerProps from 'terra-date-picker/docs/props-table/DatePicker.md';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import DatePickerDefault from 'terra-site/lib/examples/date-picker/DatePickerDefault';
import DatePickerExcludeDates from 'terra-site/lib/examples/date-picker/DatePickerExcludeDates';
import DatePickerIncludeDates from 'terra-site/lib/examples/date-picker/DatePickerIncludeDates';
import DatePickerFilterDates from 'terra-site/lib/examples/date-picker/DatePickerFilterDates';
import DatePickerMinMax from 'terra-site/lib/examples/date-picker/DatePickerMinMax';
import DatePickerDefaultDate from 'terra-site/lib/examples/date-picker/DatePickerDefaultDate';
import DatePickerInsideModal from 'terra-site/lib/examples/date-picker/DatePickerInsideModal';

const DatePickerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table-date-picker" src={DatePickerProps} />
    <h2 id="default">Default</h2>
    <DatePickerDefault />
    <br />
    <br />
    <h2 id="exclude-dates">Exclude Dates</h2>
    <DatePickerExcludeDates />
    <br />
    <br />
    <h2 id="filter-dates">Filter Dates</h2>
    <DatePickerFilterDates />
    <br />
    <br />
    <h2 id="include-dates">Include Dates</h2>
    <DatePickerIncludeDates />
    <br />
    <br />
    <h2 id="min-max">Min Max Selection Options</h2>
    <DatePickerMinMax />
    <br />
    <br />
    <h2 id="start-date">Default Date</h2>
    <DatePickerDefaultDate />
    <br />
    <br />
    <h2 id="modal">Presented Inside Modal</h2>
    <DatePickerInsideModal />
    <br />
  </div>
);


export default DatePickerExamples;
