import { ja } from '@/config/translations/locales/ja'
import 'i18next'

/**
 * Extend i18next type to enable type completion to take effect when inputting i18n text
 */
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof ja
    }
  }
}
