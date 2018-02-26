import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/en';

addLocaleData(localeData);

const messages = {
  "Terra.alert.dismiss": "Dismiss",
  "Terra.alert.info": "Information.",
  "Terra.alert.error": "Error.",
  "Terra.alert.warning": "Warning.",
  "Terra.alert.alert": "Alert.",
  "Terra.alert.advisory": "Advisory.",
  "Terra.alert.success": "Success.",
  "Terra.ajax.error": "This content failed to load.",
  "Terra.datePicker.today": "Today",
  "Terra.datePicker.openCalendar": "Open Calendar",
  "Terra.dateTimePicker.timeClarification.title": "Time Clarification",
  "Terra.dateTimePicker.timeClarification.message": "The time selected occurs during the transition from Daylight Saving Time to Standard Time. Would you like to enter this before or after the time change from Daylight Saving to Standard time?",
  "Terra.dateTimePicker.timeClarification.button.daylightSaving": "Before (Daylight Saving)",
  "Terra.dateTimePicker.timeClarification.button.standardTime": "After (Standard Time)",
  "Terra.timeInput.am": "",
  "Terra.timeInput.pm": "",
  "Terra.timeInput.hours": "Hours",
  "Terra.timeInput.minutes": "Minutes",
  "Terra.timeInput.hh": "HH",
  "Terra.timeInput.mm": "mm",
  "Terra.demographicsBanner.dateOfBirth": "DOB",
  "Terra.demographicsBanner.deceased": "Deceased",
  "Terra.demographicsBanner.gestationalAge": "GA",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "PMA",
  "Terra.form.field.optional": "(optional)",
  "Terra.form.select.defaultDisplay": "- Select -",
  "Terra.Overlay.loading": "Loading...",
  "Terra.searchField.search": "Search",
  "Terra.status-view.no-data": "No Results",
  "Terra.status-view.no-matching-results": "No Matching Results",
  "Terra.status-view.not-authorized": "Not Authorised",
  "Terra.status-view.error": "Error",
  "Terra.tabs.more": "More",
  "Terra.Clinical.ActionHeader.close": "Close",
  "Terra.Clinical.ActionHeader.back": "Back",
  "Terra.Clinical.ActionHeader.previous": "Previous",
  "Terra.Clinical.ActionHeader.next": "Next",
  "Terra.Clinical.ActionHeader.maximize": "Maximise",
  "Terra.Clinical.ActionHeader.minimize": "Minimise"
};
const areTranslationsLoaded = true;
const locale = 'en-GB';
export {
  areTranslationsLoaded,
  locale,
  messages
};
