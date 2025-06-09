import { render, screen } from "@testing-library/react";
import { TranslationKeyManager } from "../TranslationKeyManager";
import { TranslationKey } from "@/types";

jest.mock("../TableLoader", () => ({
  TableLoader: () => <div>Mock Table Loader</div>,
}));

jest.mock("../TranslationTable", () => ({
  TranslationTable: ({ data }: { data: TranslationKey[] }) => (
    <div>Mock Translation Table: {data.length} keys</div>
  ),
}));

describe("TranslationKeyManager", () => {
  const mockKeys: TranslationKey[] = [
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

  it("renders TableLoader when isFetching is true", () => {
    render(<TranslationKeyManager keys={mockKeys} isFetching={true} />);
    expect(screen.getByText("Mock Table Loader")).toBeInTheDocument();
  });

  it("renders TranslationTable with data when isFetching is false", () => {
    render(<TranslationKeyManager keys={mockKeys} isFetching={false} />);
    expect(
      screen.getByText("Mock Translation Table: 2 keys")
    ).toBeInTheDocument();
  });
});
