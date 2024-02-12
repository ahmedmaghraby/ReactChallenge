import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import themeConfig from './theme.config'
import enLang from './locale/en.json'
import arLang from './locale/ar.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enLang },
    ar: { ...arLang },
  },
  fallbackLng: themeConfig.locale || 'en',
  debug: false,
  load: 'languageOnly',
})
export default i18n
