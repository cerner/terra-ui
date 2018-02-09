import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/pt';

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
  "Terra.timeInput.hh": "hh",
  "Terra.timeInput.mm": "mm",
  "Terra.demographicsBanner.dateOfBirth": "DOB",
  "Terra.demographicsBanner.deceased": "Deceased",
  "Terra.demographicsBanner.gestationalAge": "GA",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "PMA",
  "Terra.form.field.optional": "(facultatif)",
  "Terra.form.select.defaultDisplay": "- Selecione -",
  "Terra.Overlay.loading": "Loading...",
  "Terra.searchField.search": "Search",
  "Terra.status-view.no-data": "Sem resultados",
  "Terra.status-view.no-matching-results": "Não há resultados correspondentes",
  "Terra.status-view.not-authorized": "Não autorizado",
  "Terra.status-view.error": "Erro",
  "Terra.tabs.more": "Mais",
  "Terra.Clinical.ActionHeader.close": "Fechar",
  "Terra.Clinical.ActionHeader.back": "Voltar",
  "Terra.Clinical.ActionHeader.previous": "Anterior",
  "Terra.Clinical.ActionHeader.next": "Avançar",
  "Terra.Clinical.ActionHeader.maximize": "Maximizar",
  "Terra.Clinical.ActionHeader.minimize": "Minimizar"
};
const areTranslationsLoaded = true;
const locale = 'pt-BR';
export {
  areTranslationsLoaded,
  locale,
  messages
};
