export interface themeState {
  theme: string
  rtlClass: string
  locale: string
  languageList: LanguageList[]
  pageTitle: string
  userData: User
  toggleTheme: (by: string) => void
  toggleLocale: (by: string) => void
  setPageTitle: (by: string) => void
}

export interface LanguageList {
  code: string
  name: string
}

export interface User {
  id?: string
  email?: string
  mobile?: string
  name?: string
  imgUrl?: string
}
