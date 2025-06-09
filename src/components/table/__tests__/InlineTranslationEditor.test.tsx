import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { InlineTranslationEditor } from "../InlineTranslationEditor";
import { useTranslationStore } from "@/store/translationStore";
import { useUpdateTranslationKey } from "@/hooks/useTranslationKeys";

jest.mock("@/store/translationStore", () => ({
  useTranslationStore: jest.fn(),
}));

jest.mock("@/hooks/useTranslationKeys", () => ({
  useUpdateTranslationKey: jest.fn(),
}));

describe("InlineTranslationEditor", () => {
  const mockMutate = jest.fn();
  const mockSelectedLanguage = "fr";

  beforeEach(() => {
    jest.clearAllMocks();

    (useTranslationStore as jest.Mock).mockReturnValue(mockSelectedLanguage);

    (useUpdateTranslationKey as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: false,
    });
  });

  it("renders initial value in view mode", () => {
    render(<InlineTranslationEditor keyId="123" initialValue="Bonjour" />);
    expect(screen.getByText("Bonjour")).toBeInTheDocument();
  });

  it("enters edit mode on click", () => {
    render(<InlineTranslationEditor keyId="123" initialValue="Bonjour" />);
    fireEvent.click(screen.getByText("Bonjour"));
    expect(screen.getByDisplayValue("Bonjour")).toBeInTheDocument();
  });

  it("calls mutate on blur if value changes", async () => {
    render(<InlineTranslationEditor keyId="123" initialValue="Bonjour" />);
    fireEvent.click(screen.getByText("Bonjour"));
    const input = screen.getByDisplayValue("Bonjour");
    fireEvent.change(input, { target: { value: "Salut" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith({
        id: "123",
        language: mockSelectedLanguage,
        value: "Salut",
      });
    });
  });

  it("does not call mutate on blur if value did not change", async () => {
    render(<InlineTranslationEditor keyId="123" initialValue="Bonjour" />);
    fireEvent.click(screen.getByText("Bonjour"));
    const input = screen.getByDisplayValue("Bonjour");
    fireEvent.blur(input);

    await waitFor(() => {
      expect(mockMutate).not.toHaveBeenCalled();
    });
  });

  it("submits on Enter key", async () => {
    render(<InlineTranslationEditor keyId="123" initialValue="Bonjour" />);
    fireEvent.click(screen.getByText("Bonjour"));
    const input = screen.getByDisplayValue("Bonjour");
    fireEvent.change(input, { target: { value: "Salut" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith({
        id: "123",
        language: mockSelectedLanguage,
        value: "Salut",
      });
    });
  });

  it("cancels edit on Escape", async () => {
    render(<InlineTranslationEditor keyId="123" initialValue="Bonjour" />);
    fireEvent.click(screen.getByText("Bonjour"));
    const input = screen.getByDisplayValue("Bonjour");
    fireEvent.change(input, { target: { value: "Annuler" } });
    fireEvent.keyDown(input, { key: "Escape", code: "Escape" });

    await waitFor(() => {
      expect(screen.getByText("Bonjour")).toBeInTheDocument();
      expect(mockMutate).not.toHaveBeenCalled();
    });
  });

  it("shows loader when pending", () => {
    (useUpdateTranslationKey as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: true,
    });

    render(<InlineTranslationEditor keyId="123" initialValue="Bonjour" />);

    expect(screen.getByTestId("animate-spin")).toBeInTheDocument();
  });
});
