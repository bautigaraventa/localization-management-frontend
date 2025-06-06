import { getFiltersOptions } from "@/lib/utils";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";
import { mockedTranslationKeys } from "@/lib/mocks";
import { TranslationKeyManager } from "../table/TranslationKeyManager";

export function Main() {
  const { categories } = getFiltersOptions({
    keys: mockedTranslationKeys,
  });

  return (
    <div className="flex flex-col md:flex-row flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 md:space-y-0 md:space-x-8">
      <Sidebar categories={categories} />
      <main className="w-full md:w-3/4 xl:w-4/5 flex flex-col space-y-6">
        <Content title="Translation Management">
          <TranslationKeyManager />
        </Content>
      </main>
    </div>
  );
}
