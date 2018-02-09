import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/es';

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
  "Terra.timeInput.am": "a. m.",
  "Terra.timeInput.pm": "p. m.",
  "Terra.timeInput.hours": "Horas",
  "Terra.timeInput.minutes": "Minutos",
  "Terra.timeInput.hh": "HH",
  "Terra.timeInput.mm": "mm",
  "Terra.demographicsBanner.dateOfBirth": "DOB",
  "Terra.demographicsBanner.deceased": "Deceased",
  "Terra.demographicsBanner.gestationalAge": "GA",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "PMA",
  "Terra.form.field.optional": "(opcional)",
  "Terra.form.select.defaultDisplay": "- Predeterminado -",
  "Terra.Overlay.loading": "Loading...",
  "Terra.searchField.search": "Search",
  "Terra.status-view.no-data": "Sin resultados",
  "Terra.status-view.no-matching-results": "Sin resultados coincidentes",
  "Terra.status-view.not-authorized": "No autorizado",
  "Terra.status-view.error": "Error",
  "Terra.tabs.more": "Más",
  "Terra.Clinical.ActionHeader.close": "Cerrar",
  "Terra.Clinical.ActionHeader.back": "Atrás",
  "Terra.Clinical.ActionHeader.previous": "Anterior",
  "Terra.Clinical.ActionHeader.next": "Siguiente",
  "Terra.Clinical.ActionHeader.maximize": "Maximizar",
  "Terra.Clinical.ActionHeader.minimize": "Minimimzar"
};
const areTranslationsLoaded = true;
const locale = 'es-ES';
export {
  areTranslationsLoaded,
  locale,
  messages
};
