import { render, screen, fireEvent, within } from "@testing-library/react";
import { LanguageSelector } from "../LanguageSelector";

jest.mock("@/store/translationStore", () => ({
  useTranslationStore: jest.fn(),
}));

import { useTranslationStore } from "@/store/translationStore";
import { LanguagesLabels } from "@/types";

describe("LanguageSelector", () => {
  const setSelectedLanguageMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useTranslationStore as jest.Mock).mockReturnValue({
      selectedLanguage: "en",
      setSelectedLanguage: setSelectedLanguageMock,
    });
  });

  it("renders GenericSelector with language options", () => {
    render(<LanguageSelector />);

    expect(screen.getByText("Language")).toBeInTheDocument();

    const triggerButton = screen.getByTestId("select-button");
    fireEvent.click(triggerButton);

    const listbox = screen.getByRole("listbox");
    const utils = within(listbox);

    Object.values(LanguagesLabels).forEach((label) => {
      expect(utils.getAllByText(label).length).toBeGreaterThan(0);
    });
  });
});
