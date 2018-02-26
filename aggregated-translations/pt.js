import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/pt';

addLocaleData(localeData);

const messages = {
  "Terra.alert.dismiss": "Ignorar",
  "Terra.alert.info": "Informações.",
  "Terra.alert.error": "Erro.",
  "Terra.alert.warning": "Advertência.",
  "Terra.alert.alert": "Alerta.",
  "Terra.alert.advisory": "Recomendação.",
  "Terra.alert.success": "Êxito.",
  "Terra.ajax.error": "Falha ao carregar conteúdo.",
  "Terra.datePicker.today": "Hoje",
  "Terra.datePicker.openCalendar": "Abrir calendário",
  "Terra.dateTimePicker.timeClarification.title": "Explicação sobre o horário",
  "Terra.dateTimePicker.timeClarification.message": "A hora selecionada ocorre durante a transição do horário de verão para o horário padrão. Gostaria de inserir um horário anterior ou posterior ao selecionado?",
  "Terra.dateTimePicker.timeClarification.button.daylightSaving": "Antes (horário de verão)",
  "Terra.dateTimePicker.timeClarification.button.standardTime": "Depois (horário padrão)",
  "Terra.timeInput.am": "",
  "Terra.timeInput.pm": "",
  "Terra.timeInput.hours": "Horas",
  "Terra.timeInput.minutes": "Minutos",
  "Terra.timeInput.hh": "HH",
  "Terra.timeInput.mm": "mm",
  "Terra.demographicsBanner.dateOfBirth": "DN",
  "Terra.demographicsBanner.deceased": "Óbito",
  "Terra.demographicsBanner.gestationalAge": "IG",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "IPM",
  "Terra.form.field.optional": "(opcional)",
  "Terra.form.select.defaultDisplay": "- Selecione -",
  "Terra.Overlay.loading": "Carregando...",
  "Terra.searchField.search": "Pesquisar",
  "Terra.status-view.no-data": "Sem resultados",
  "Terra.status-view.no-matching-results": "Não há resultados correspondentes",
  "Terra.status-view.not-authorized": "Não autorizado",
  "Terra.status-view.error": "Erro",
  "Terra.tabs.more": "Mais",
  "Terra.Clinical.ActionHeader.close": "Fechar",
  "Terra.Clinical.ActionHeader.back": "Voltar",
  "Terra.Clinical.ActionHeader.previous": "Anterior",
  "Terra.Clinical.ActionHeader.next": "Próximo",
  "Terra.Clinical.ActionHeader.maximize": "Maximizar",
  "Terra.Clinical.ActionHeader.minimize": "Minimizar"
};
const areTranslationsLoaded = true;
const locale = 'pt';
export {
  areTranslationsLoaded,
  locale,
  messages
};
