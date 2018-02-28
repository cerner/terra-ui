import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/de';

addLocaleData(localeData);

const messages = {
  "Terra.alert.dismiss": "Verwerfen",
  "Terra.alert.info": "Informationen.",
  "Terra.alert.error": "Fehler.",
  "Terra.alert.warning": "Warnung.",
  "Terra.alert.alert": "Benachrichtigung.",
  "Terra.alert.advisory": "Empfehlung.",
  "Terra.alert.success": "Erfolgreich.",
  "Terra.ajax.error": "Inhalt konnte nicht geladen werden.",
  "Terra.datePicker.today": "Heute",
  "Terra.datePicker.openCalendar": "Kalender öffnen",
  "Terra.dateTimePicker.timeClarification.title": "Klärung der Zeit",
  "Terra.dateTimePicker.timeClarification.message": "Die ausgewählte Zeit liegt während der Umstellung von Sommer- auf Standardzeit. Möchten Sie für die Zeit vor oder nach der Zeitumstellung dokumentieren?",
  "Terra.dateTimePicker.timeClarification.button.daylightSaving": "Vor (Sommerzeit)",
  "Terra.dateTimePicker.timeClarification.button.standardTime": "Nach (Standardzeit)",
  "Terra.timeInput.am": "",
  "Terra.timeInput.pm": "",
  "Terra.timeInput.hours": "Stunden",
  "Terra.timeInput.minutes": "Minuten",
  "Terra.timeInput.hh": "hh",
  "Terra.timeInput.mm": "mm",
  "Terra.demographicsBanner.dateOfBirth": "Geburtsdatum",
  "Terra.demographicsBanner.deceased": "Verstorben",
  "Terra.demographicsBanner.gestationalAge": "GA",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "Postmenstruelles Alter",
  "Terra.form.field.optional": "(Optional)",
  "Terra.form.select.defaultDisplay": "- Auswählen -",
  "Terra.Overlay.loading": "Ladevorgang...",
  "Terra.searchField.search": "Suchen",
  "Terra.status-view.no-data": "Keine Ergebnisse",
  "Terra.status-view.no-matching-results": "Keine Übereinstimmungen",
  "Terra.status-view.not-authorized": "Nicht autorisiert",
  "Terra.status-view.error": "Fehler",
  "Terra.tabs.more": "Mehr",
  "Terra.Clinical.ActionHeader.close": "Schließen",
  "Terra.Clinical.ActionHeader.back": "Zurück",
  "Terra.Clinical.ActionHeader.previous": "Vorherige",
  "Terra.Clinical.ActionHeader.next": "Nächste",
  "Terra.Clinical.ActionHeader.maximize": "Maximieren",
  "Terra.Clinical.ActionHeader.minimize": "Minimieren"
};
const areTranslationsLoaded = true;
const locale = 'de';
export {
  areTranslationsLoaded,
  locale,
  messages
};
