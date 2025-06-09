import { render, screen, fireEvent } from "@testing-library/react";
import { CategorySelector } from "../CategorySelector";

jest.mock("@/store/translationStore", () => ({
  useTranslationStore: jest.fn(),
}));

import { useTranslationStore } from "@/store/translationStore";

describe("CategorySelector", () => {
  const categories = ["cat1", "cat2", "cat3"];
  const setSelectedCategoryMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useTranslationStore as jest.Mock).mockReturnValue({
      selectedCategory: "all",
      setSelectedCategory: setSelectedCategoryMock,
    });
  });

  it("renders GenericSelector with correct props", () => {
    render(<CategorySelector categories={categories} />);

    expect(screen.getByText("Category")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("select-button"));

    categories.forEach((cat) => {
      expect(screen.getByText(cat)).toBeInTheDocument();
    });
  });

  it("calls setSelectedCategory when option selected", () => {
    render(<CategorySelector categories={categories} />);

    fireEvent.click(screen.getByTestId("select-button"));
    fireEvent.click(screen.getByText("cat2"));

    expect(setSelectedCategoryMock).toHaveBeenCalledWith("cat2");
  });
});
