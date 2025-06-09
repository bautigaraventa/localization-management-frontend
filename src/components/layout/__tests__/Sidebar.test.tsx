import { render, screen } from "@testing-library/react";
import { Sidebar } from "../Sidebar";
import { FilterOptions } from "@/types";

jest.mock("../../filters", () => ({
  ProjectSelector: () => (
    <div data-testid="project-selector">Project Selector</div>
  ),
  CategorySelector: ({ categories }: { categories: string[] }) => (
    <div data-testid="category-selector">{categories.join(", ")}</div>
  ),
  LanguageSelector: () => (
    <div data-testid="language-selector">Language Selector</div>
  ),
}));

describe("Sidebar", () => {
  const mockCategories: FilterOptions["categories"] = [
    "Helium",
    "Health Dashboard",
    "Online Banking",
  ];

  it("renders ProjectSelector, CategorySelector with categories, and LanguageSelector", () => {
    render(<Sidebar categories={mockCategories} />);

    expect(screen.getByTestId("project-selector")).toBeInTheDocument();
    expect(screen.getByTestId("category-selector")).toHaveTextContent(
      "Helium, Health Dashboard, Online Banking"
    );
    expect(screen.getByTestId("language-selector")).toBeInTheDocument();
  });
});
