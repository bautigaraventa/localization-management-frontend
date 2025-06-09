export interface TranslationValue {
  value: string;
  updatedAt: string;
  updatedBy: string;
}

export interface TranslationKey {
  id: string;
  key: string;
  value: string;
  updatedAt: string;
  category: string;
}

export interface UpdateTranslationValue {
  id: string;
  language: string;
  value: string;
}