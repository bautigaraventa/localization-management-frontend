import { FilterOptions } from "@/types";
import {
  CategorySelector,
  LanguageSelector,
  ProjectSelector,
} from "../filters";

export function Sidebar({ categories }: FilterOptions) {
  return (
    <aside className="w-1/4 xl:w-1/5 p-4 bg-white dark:bg-stone-800 shadow rounded-lg mr-8 space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-3 text-stone-700 dark:text-stone-300">
          Filters
        </h2>
      </div>
      <ProjectSelector />
      <CategorySelector categories={categories} />
      <LanguageSelector />
    </aside>
  );
}
