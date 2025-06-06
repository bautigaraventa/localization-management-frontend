import { FilterOptions } from "@/types";
import {
  CategorySelector,
  LanguageSelector,
  ProjectSelector,
} from "../filters";

export function Sidebar({ categories }: FilterOptions) {
  return (
    <aside className="w-full md:w-1/3 xl:w-1/5 p-4 bg-white dark:bg-stone-800 shadow rounded-lg">
      <ProjectSelector />
      <CategorySelector categories={categories} />
      <LanguageSelector />
    </aside>
  );
}
