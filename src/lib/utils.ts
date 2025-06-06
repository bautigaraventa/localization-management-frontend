import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { FilterOptions, TranslationKey } from "@/types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
  }

export function getFiltersOptions({ keys }: { keys: TranslationKey[] }): FilterOptions {
    const categories = new Set<string>();
  
    for (const key of keys) {
      categories.add(key.category);
    }
  
    return {
      categories: Array.from(categories),
    };
  }




