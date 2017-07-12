import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-date-picker/docs/README.md';
import { version } from 'terra-date-picker/package.json';
import Markdown from 'terra-markdown';
import DatePickerProps from 'terra-date-picker/docs/props-table/DatePicker.md';
import DatePicker from 'terra-date-picker';
import moment from 'moment';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import DatePickerFilterDates from 'terra-site/lib/examples/date-picker/DatePickerFilterDates';
import DatePickerOnChange from 'terra-site/lib/examples/date-picker/DatePickerOnChange';

const DatePickerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={DatePickerProps} />
    <h2 id="default">Default</h2>
    <DatePicker
      name="date-input-default"
    />
    <br />
    <br />
    <h2 id="exclude-dates">ExcludeDates</h2>
    <DatePicker
      name="date-input-exclude"
      excludeDates={[moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
    />
    <br />
    <br />
    <h2 id="filter-dates">FilterDates</h2>
    <DatePickerFilterDates />
    <br />
    <h2 id="include-dates">Include Dates</h2>
    <DatePicker
      name="date-input-include"
      includeDates={[moment().format(), moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
    />
    <br />
    <br />
    <h2 id="min-max">Min Max</h2>
    <DatePicker
      name="date-input-min-max"
      minDate={moment().format()}
      maxDate={moment().add(6, 'days').format()}
    />
    <br />
    <br />
    <h2 id="on-change">On Change</h2>
    <DatePickerOnChange />
    <br />
    <h2 id="start-date">Default Date</h2>
    <DatePicker
      name="date-input-default-date"
      selectedDate={moment().format()}
    />
  </div>
);

export default DatePickerExamples;
