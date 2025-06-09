import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "../ThemeToggle";

jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe("ThemeToggle", () => {
  const setThemeMock = jest.fn();
  const useTheme = require("next-themes").useTheme;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders Sun icon when theme is light and toggles to dark on click", () => {
    useTheme.mockReturnValue({
      theme: "light",
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />);

    expect(screen.getByTestId("icon-sun")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));

    expect(setThemeMock).toHaveBeenCalledWith("dark");
  });

  it("renders Moon icon when theme is dark and toggles to light on click", () => {
    useTheme.mockReturnValue({
      theme: "dark",
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />);

    expect(screen.getByTestId("icon-moon")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));

    expect(setThemeMock).toHaveBeenCalledWith("light");
  });
});
