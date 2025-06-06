"use client";

import { useTranslationStore } from "@/store/translationStore";
import { GenericSelector } from "./GenericSelector";

interface CategorySelectorProps {
  categories: string[];
}

export function CategorySelector({ categories }: CategorySelectorProps) {
  const { selectedCategory, setSelectedCategory } = useTranslationStore();

  return (
    <GenericSelector
      label="Category"
      value={selectedCategory}
      onChange={setSelectedCategory}
      options={[
        { value: "all", label: "All" },
        ...categories.map((c) => ({ value: c, label: c })),
      ]}
      placeholder="Select a category"
    />
  );
}
