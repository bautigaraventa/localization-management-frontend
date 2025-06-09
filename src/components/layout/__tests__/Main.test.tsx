import { render, screen } from "@testing-library/react";
import { useTranslationKeys } from "@/hooks/useTranslationKeys";
import { useTranslationStore } from "@/store/translationStore";
import { getFiltersOptions } from "@/lib/utils";
import { Main } from "../Main";

jest.mock("@/hooks/useTranslationKeys");
jest.mock("@/store/translationStore");
jest.mock("@/lib/utils");

jest.mock("@/components/layout/Sidebar", () => ({
  Sidebar: ({ categories }: { categories: string[] }) => (
    <div data-testid="sidebar">
      Sidebar with categories: {categories.join(", ")}
    </div>
  ),
}));

jest.mock("@/components/layout/Content", () => ({
  Content: ({
    children,
    title,
  }: {
    children: React.ReactNode;
    title: string;
  }) => (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  ),
}));

jest.mock("@/components/table", () => ({
  TranslationKeyManager: ({ keys }: { keys: any[] }) => (
    <div data-testid="manager">Keys count: {keys.length}</div>
  ),
}));

describe("<Main />", () => {
  beforeEach(() => {
    (useTranslationStore as jest.Mock).mockReturnValue({
      selectedLanguage: "en",
      selectedProject: "project-1",
      selectedCategory: "greeting",
    });

    (useTranslationKeys as jest.Mock).mockReturnValue({
      data: [
        { id: "1", category: "greeting", key: "hello" },
        { id: "2", category: "cta", key: "submit" },
      ],
      isLoading: false,
    });

    (getFiltersOptions as jest.Mock).mockReturnValue({
      categories: ["greeting", "cta"],
    });
  });

  it("renders Main component with filtered keys and sidebar", () => {
    render(<Main />);

    expect(screen.getByText("Translation Management")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar")).toHaveTextContent("greeting, cta");
    expect(screen.getByTestId("manager")).toHaveTextContent("Keys count: 1");
  });
});
