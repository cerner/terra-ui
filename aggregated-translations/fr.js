import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/fr';

addLocaleData(localeData);

const messages = {
  "Terra.alert.dismiss": "Ignorer",
  "Terra.alert.info": "Information.",
  "Terra.alert.error": "Erreur.",
  "Terra.alert.warning": "Avertissement.",
  "Terra.alert.alert": "Alerte.",
  "Terra.alert.advisory": "Recommandation.",
  "Terra.alert.success": "Réussite.",
  "Terra.ajax.error": "Échec du chargement du contenu.",
  "Terra.datePicker.today": "Aujourd'hui",
  "Terra.datePicker.openCalendar": "Ouvrir le calendrier",
  "Terra.dateTimePicker.timeClarification.title": "Clarification de l'heure",
  "Terra.dateTimePicker.timeClarification.message": "L'heure sélectionnée se situe lors du passage de l'heure d'été à l'heure d'hiver. Voulez-vous documenter cette valeur avant ou après le passage de l'heure d'été à l'heure d'hiver ?",
  "Terra.dateTimePicker.timeClarification.button.daylightSaving": "Avant (Heure d'été)",
  "Terra.dateTimePicker.timeClarification.button.standardTime": "Après (Heure d'hiver)",
  "Terra.timeInput.am": "a.m.",
  "Terra.timeInput.pm": "p.m.",
  "Terra.timeInput.hours": "Hours",
  "Terra.timeInput.minutes": "Minutes",
  "Terra.timeInput.hh": "HH",
  "Terra.timeInput.mm": "mm",
  "Terra.demographicsBanner.dateOfBirth": "Date de naissance",
  "Terra.demographicsBanner.deceased": "Décédé(e)",
  "Terra.demographicsBanner.gestationalAge": "Âge gestationnel",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "Âge postmenstruel",
  "Terra.form.field.optional": "(facultatif)",
  "Terra.form.select.defaultDisplay": "Sélectionner",
  "Terra.Overlay.loading": "Chargement...",
  "Terra.searchField.search": "Rechercher",
  "Terra.status-view.no-data": "Aucun résultat",
  "Terra.status-view.no-matching-results": "Aucun résultat correspondant",
  "Terra.status-view.not-authorized": "Non autorisé",
  "Terra.status-view.error": "Erreur",
  "Terra.tabs.more": "Plus",
  "Terra.Clinical.ActionHeader.close": "Fermer",
  "Terra.Clinical.ActionHeader.back": "Précédent",
  "Terra.Clinical.ActionHeader.previous": "Précédent",
  "Terra.Clinical.ActionHeader.next": "Suivant",
  "Terra.Clinical.ActionHeader.maximize": "Agrandir",
  "Terra.Clinical.ActionHeader.minimize": "Réduire"
};
const areTranslationsLoaded = true;
const locale = 'fr';
export {
  areTranslationsLoaded,
  locale,
  messages
};
