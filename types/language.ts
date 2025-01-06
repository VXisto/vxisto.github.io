export type Language = 'en' | 'pt'

export interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

export interface TranslationType {
  en: string
  pt: string
}

