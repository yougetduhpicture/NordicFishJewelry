import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en/translation.json';
import fi from '../locales/fi/translation.json';

const testI18n = createInstance();

testI18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    fi: { translation: fi },
  },
  interpolation: { escapeValue: false },
});

export default testI18n;
