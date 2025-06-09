"use client";

import { getFiltersOptions } from "@/lib/utils";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";
import { useTranslationKeys } from "@/hooks/useTranslationKeys";
import { useTranslationStore } from "@/store/translationStore";
import { TranslationKeyManager } from "../table";

export function Main() {
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

  const { categories } = getFiltersOptions({
    keys,
  });

  return (
    <div className="flex flex-col md:flex-row flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 md:space-y-0 md:space-x-8">
      <Sidebar categories={categories} />
      <main className="w-full md:w-3/4 xl:w-4/5 flex flex-col space-y-6">
        <Content title="Translation Management">
          <TranslationKeyManager isFetching={isLoading} keys={filtered} />
        </Content>
      </main>
    </div>
  );
}
