import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-date-picker/docs/README.md';
import { version } from 'terra-date-picker/package.json';
import Markdown from 'terra-markdown';

import DatePicker from 'terra-date-picker';
import moment from 'moment';
import DateRange from 'terra-date-picker/lib/DateRange';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import DatePickerFilterDates from 'terra-site/lib/examples/date-picker/DatePickerFilterDates';
import DatePickerOnChange from 'terra-site/lib/examples/date-picker/DatePickerOnChange';

const dateFormat = 'MM/DD/YYYY';

const DatePickerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="default">Default</h2>
    <DatePicker />
    <h2 id="exclude-dates">ExcludeDates</h2>
    <DatePicker
      excludeDates={[moment().subtract(1, 'days').format(dateFormat), moment().add(1, 'days').format(dateFormat)]}
    />
    <h2 id="filter-dates">FilterDates</h2>
    <DatePickerFilterDates />
    <h2 id="include-dates">Include Dates</h2>
    <DatePicker
      includeDates={[moment().format(dateFormat), moment().subtract(1, 'days').format(dateFormat), moment().add(1, 'days').format(dateFormat)]}
    />
    <h2 id="min-max">Min Max</h2>
    <DatePicker
      minDate={moment().format(dateFormat)}
      maxDate={moment().add(6, 'days').format(dateFormat)}
    />
    <h2 id="on-change">On Change</h2>
    <DatePickerOnChange />
    <h2 id="start-date">Default Date</h2>
    <DatePicker
      selectedDate={moment().format(dateFormat)}
    />
    <h2 id="date-range">Date Range</h2>
    <DateRange
      startDate={moment().add(1, 'days').format(dateFormat)}
      endDate={moment().add(7, 'days').format(dateFormat)}
    />
  </div>
);

export default DatePickerExamples;
