import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/ar';

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
  "Terra.timeInput.am": "مساءً",
  "Terra.timeInput.pm": "صباحًا",
  "Terra.timeInput.hours": "ساعات",
  "Terra.timeInput.minutes": "دقائق",
  "Terra.timeInput.hh": "س س",
  "Terra.timeInput.mm": "د د",
  "Terra.demographicsBanner.dateOfBirth": "DOB",
  "Terra.demographicsBanner.deceased": "Deceased",
  "Terra.demographicsBanner.gestationalAge": "GA",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "PMA",
  "Terra.form.field.optional": "(اختياري)",
  "Terra.form.select.defaultDisplay": "- Select -",
  "Terra.Overlay.loading": "Loading...",
  "Terra.searchField.search": "Search",
  "Terra.status-view.no-data": "لا نتائج",
  "Terra.status-view.no-matching-results": "لا يوجد نتائج مطابقة",
  "Terra.status-view.not-authorized": "غير مخول",
  "Terra.status-view.error": "خطأ",
  "Terra.tabs.more": "المزيد",
  "Terra.Clinical.ActionHeader.close": "إغلاق",
  "Terra.Clinical.ActionHeader.back": "العودة",
  "Terra.Clinical.ActionHeader.previous": "السابق",
  "Terra.Clinical.ActionHeader.next": "التّالي",
  "Terra.Clinical.ActionHeader.maximize": "تكبير",
  "Terra.Clinical.ActionHeader.minimize": "تصغير"
};
const areTranslationsLoaded = true;
const locale = 'ar';
export {
  areTranslationsLoaded,
  locale,
  messages
};
