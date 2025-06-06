"use client";

import { useTranslationStore } from "@/store/translationStore";
import { LanguagesLabels } from "@/types";

export function LanguageSelector() {
  const { selectedLanguage, setSelectedLanguage } = useTranslationStore();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3 text-stone-700 dark:text-stone-300">
        Languages
      </h2>
      <select
        className="p-2 text-sm rounded border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        {Object.entries(LanguagesLabels).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
