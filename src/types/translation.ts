export interface TranslationValue {
  value: string;
  updatedAt: string;
  updatedBy: string;
}
  
export interface TranslationKey {
  id: string;
  key: string;
  category: string;
  description?: string;
  translations: {
    [languageCode: string]: TranslationValue;
  };
}

export interface UpdateTranslationValue {
  id: string;
  language: string;
  value: string;
}