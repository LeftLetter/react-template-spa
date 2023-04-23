import { en } from '@/config/translations/locales/en'
import { ja } from '@/config/translations/locales/ja'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

/**
 * i18n configuration object
 */
export const i18next = i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      // translation is the default namespace
      en: { translation: en },
      ja: { translation: ja },
    },
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false,
    },
  })
