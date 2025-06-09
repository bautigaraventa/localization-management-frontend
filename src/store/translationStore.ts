import { create } from "zustand";

interface TranslationStore {
  selectedLanguage: string;
  selectedCategory: string;
  selectedProject: string;
  setSelectedLanguage: (lang: string) => void;
  setSelectedCategory: (cat: string) => void;
  setSelectedProject: (proj: string) => void;
}

export const useTranslationStore = create<TranslationStore>((set) => ({
  selectedLanguage: "en",
  selectedCategory: "all",
  selectedProject: "all",
  setSelectedLanguage: (selectedLanguage) => set({ selectedLanguage }),
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
  setSelectedProject: (selectedProject) => set({ selectedProject }),
}));