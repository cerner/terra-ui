import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/fi';

addLocaleData(localeData);

const messages = {
  "Terra.alert.dismiss": "Verwerfen~n9KZ Pi",
  "Terra.alert.info": "Informações~n9KZ Pi.",
  "Terra.alert.error": "Erreur~n9KZ Pi.",
  "Terra.alert.warning": "Avertissement~n9KZ Pi.",
  "Terra.alert.alert": "Benachrichtigung~n9KZ Pi.",
  "Terra.alert.advisory": "Recommandation~n9KZ Pi.",
  "Terra.alert.success": "Erfolgreich~n9KZ Pi.",
  "Terra.ajax.error": "This content failed to load.n9KZ Pi~",
  "Terra.datePicker.today": "Today ~",
  "Terra.datePicker.openCalendar": "Open Calendar ~",
  "Terra.dateTimePicker.timeClarification.title": "Time Clarification ~",
  "Terra.dateTimePicker.timeClarification.message": "The time selected occurs during the transition from Daylight Saving Time to Standard Time. Would you like to enter this before or after the time change from Daylight Saving to Standard time? ~",
  "Terra.dateTimePicker.timeClarification.button.daylightSaving": "Before (Daylight Saving) ~",
  "Terra.dateTimePicker.timeClarification.button.standardTime": "After (Standard Time) ~",
  "Terra.timeInput.am": "a.m.",
  "Terra.timeInput.pm": "p.m.",
  "Terra.timeInput.hours": "Hours",
  "Terra.timeInput.minutes": "Minutes",
  "Terra.timeInput.hh": "HH",
  "Terra.timeInput.mm": "mm",
  "Terra.demographicsBanner.dateOfBirth": "DOB ~",
  "Terra.demographicsBanner.deceased": "Deceased ~",
  "Terra.demographicsBanner.gestationalAge": "GA ~",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "PMA ~",
  "Terra.form.field.optional": "(optional)2384932**",
  "Terra.form.select.defaultDisplay": "- Select -",
  "Terra.Overlay.loading": "Lataamalla...",
  "Terra.searchField.search": "Search ~",
  "Terra.status-view.no-data": "Ei tuloksia",
  "Terra.status-view.no-matching-results": "Ei vastaavia tuloksia",
  "Terra.status-view.not-authorized": "Ei sallittu",
  "Terra.status-view.error": "Virhe",
  "Terra.tabs.more": "More",
  "Terra.Clinical.ActionHeader.close": "Kiinni",
  "Terra.Clinical.ActionHeader.back": "Takaisin",
  "Terra.Clinical.ActionHeader.previous": "Edellinen",
  "Terra.Clinical.ActionHeader.next": "Seuraava",
  "Terra.Clinical.ActionHeader.maximize": "Maksimoida",
  "Terra.Clinical.ActionHeader.minimize": "Minimoida"
};
const areTranslationsLoaded = true;
const locale = 'fi-FI';
export {
  areTranslationsLoaded,
  locale,
  messages
};
