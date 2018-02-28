import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/es';

addLocaleData(localeData);

const messages = {
  "Terra.alert.dismiss": "Descartar",
  "Terra.alert.info": "Información.",
  "Terra.alert.error": "Error.",
  "Terra.alert.warning": "Advertencia.",
  "Terra.alert.alert": "Alerta.",
  "Terra.alert.advisory": "Recomendación.",
  "Terra.alert.success": "Éxito.",
  "Terra.ajax.error": "Error al cargar el contenido.",
  "Terra.datePicker.today": "Hoy",
  "Terra.datePicker.openCalendar": "Abrir calendario",
  "Terra.dateTimePicker.timeClarification.title": "Aclaración respecto a la hora",
  "Terra.dateTimePicker.timeClarification.message": "La hora seleccionada se produce durante el cambio del horario de ahorro de energía a la hora estándar. ¿Desea escribir esta entrada antes o después de dicho cambio?",
  "Terra.dateTimePicker.timeClarification.button.daylightSaving": "Antes (horario de ahorro de energía)",
  "Terra.dateTimePicker.timeClarification.button.standardTime": "Después (hora estándar)",
  "Terra.timeInput.am": "",
  "Terra.timeInput.pm": "",
  "Terra.timeInput.hours": "Horas",
  "Terra.timeInput.minutes": "Minutos",
  "Terra.timeInput.hh": "HH",
  "Terra.timeInput.mm": "mm",
  "Terra.demographicsBanner.dateOfBirth": "Fecha de nacimiento",
  "Terra.demographicsBanner.deceased": "Fallecido",
  "Terra.demographicsBanner.gestationalAge": "EG",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "EPM",
  "Terra.form.field.optional": "(opcional)",
  "Terra.form.select.defaultDisplay": "- Predeterminado -",
  "Terra.Overlay.loading": "Cargando...",
  "Terra.searchField.search": "Buscar",
  "Terra.status-view.no-data": "Sin resultados",
  "Terra.status-view.no-matching-results": "Sin resultados coincidentes",
  "Terra.status-view.not-authorized": "No autorizado",
  "Terra.status-view.error": "Error",
  "Terra.tabs.more": "Más",
  "Terra.Clinical.ActionHeader.close": "Cerrar",
  "Terra.Clinical.ActionHeader.back": "Retroceder",
  "Terra.Clinical.ActionHeader.previous": "Anterior",
  "Terra.Clinical.ActionHeader.next": "Siguiente",
  "Terra.Clinical.ActionHeader.maximize": "Maximizar",
  "Terra.Clinical.ActionHeader.minimize": "Minimizar"
};
const areTranslationsLoaded = true;
const locale = 'es';
export {
  areTranslationsLoaded,
  locale,
  messages
};
