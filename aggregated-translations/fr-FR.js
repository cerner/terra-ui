import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/fr';

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
  "Terra.timeInput.am": "a.m.",
  "Terra.timeInput.pm": "p.m.",
  "Terra.timeInput.hours": "Hours",
  "Terra.timeInput.minutes": "Minutes",
  "Terra.timeInput.hh": "HH",
  "Terra.timeInput.mm": "mm",
  "Terra.demographicsBanner.dateOfBirth": "DOB",
  "Terra.demographicsBanner.deceased": "Deceased",
  "Terra.demographicsBanner.gestationalAge": "GA",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "PMA",
  "Terra.form.field.optional": "(facultatif)",
  "Terra.form.select.defaultDisplay": "Sélectionner",
  "Terra.Overlay.loading": "Loading...",
  "Terra.searchField.search": "Search",
  "Terra.status-view.no-data": "Aucun résultat",
  "Terra.status-view.no-matching-results": "Aucun résultat correspondant",
  "Terra.status-view.not-authorized": "Non autorisé",
  "Terra.status-view.error": "Erreur",
  "Terra.tabs.more": "Plus",
  "Terra.Clinical.ActionHeader.close": "Fermer",
  "Terra.Clinical.ActionHeader.back": "Retour",
  "Terra.Clinical.ActionHeader.previous": "Précédent",
  "Terra.Clinical.ActionHeader.next": "Suivant",
  "Terra.Clinical.ActionHeader.maximize": "Agrandir",
  "Terra.Clinical.ActionHeader.minimize": "Réduire"
};
const areTranslationsLoaded = true;
const locale = 'fr-FR';
export {
  areTranslationsLoaded,
  locale,
  messages
};
