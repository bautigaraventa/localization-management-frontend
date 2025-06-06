"use client";

import { useTranslationStore } from "@/store/translationStore";

interface CategorySelectorProps {
  categories: string[];
}

export function CategorySelector({ categories }: CategorySelectorProps) {
  const { selectedCategory, setSelectedCategory } = useTranslationStore();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3 text-stone-700 dark:text-stone-300">
        Categories
      </h2>
      <select
        className="p-2 text-sm rounded border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
