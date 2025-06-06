"use client";

import { useTranslationStore } from "@/store/translationStore";
import { LanguagesLabels } from "@/types";
import { GenericSelector } from "./GenericSelector";

export function LanguageSelector() {
  const { selectedLanguage, setSelectedLanguage } = useTranslationStore();

  return (
    <GenericSelector
      label="Language"
      value={selectedLanguage}
      onChange={setSelectedLanguage}
      options={Object.entries(LanguagesLabels).map(([key, label]) => ({
        value: key,
        label,
      }))}
      placeholder="Select a language"
    />
  );
}
