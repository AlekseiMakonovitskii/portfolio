import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ruLang from './locales/ru.json';
import enLang from './locales/en.json';

const resources = {
  en: {
    translation: enLang
  },
  ru: {
    translation: ruLang
  }
};

const DETECTION_OPTIONS = {
  order: ['navigator']
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: DETECTION_OPTIONS,
    resources,
    fallbackLng: 'en'
  });

export default i18n;
