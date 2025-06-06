"use client";

import { useTranslationStore } from "@/store/translationStore";
import { useTranslationKeys } from "@/hooks/useTranslationKeys";
import { TranslationTable } from "./TranslationTable";
import { TableLoader } from "./TableLoader";

export function TranslationKeyManager() {
  const { selectedLanguage, selectedProject, selectedCategory } =
    useTranslationStore();

  const { data: keys = [], isLoading } = useTranslationKeys({
    projectId: selectedProject,
    locale: selectedLanguage,
  });

  const filtered =
    selectedCategory === "all"
      ? keys
      : keys.filter((k) => k.category === selectedCategory);

  if (isLoading) return <TableLoader />;

  return (
    <div className="space-y-2">
      <TranslationTable data={filtered} />
    </div>
  );
}
