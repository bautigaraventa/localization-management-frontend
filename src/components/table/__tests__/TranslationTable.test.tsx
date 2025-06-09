import { render, screen, fireEvent } from "@testing-library/react";
import { TranslationTable } from "../TranslationTable";
import { TranslationKey } from "@/types";

jest.mock("../InlineTranslationEditor", () => ({
  InlineTranslationEditor: ({ initialValue }: { initialValue: string }) => (
    <div>InlineEditor: {initialValue}</div>
  ),
}));

const mockData: TranslationKey[] = [
  {
    key: "greeting",
    value: "Hello",
    updatedAt: new Date().toISOString(),
    category: "greetings",
  },
  {
    key: "farewell",
    value: "Goodbye",
    updatedAt: new Date().toISOString(),
    category: "greetings",
  },
];

describe("TranslationTable", () => {
  it("shows no results when filter matches nothing", () => {
    render(<TranslationTable data={mockData} />);
    const input = screen.getByPlaceholderText("Filter translation key...");

    fireEvent.change(input, { target: { value: "nonexistent" } });

    expect(screen.getByText("No results.")).toBeInTheDocument();
  });

  it("disables 'Previous' button on first page", () => {
    render(<TranslationTable data={mockData} />);
    expect(screen.getByText("Previous")).toBeDisabled();
  });
});
