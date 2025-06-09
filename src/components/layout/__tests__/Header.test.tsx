import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

jest.mock("../ThemeToggle", () => ({
  ThemeToggle: () => <div data-testid="theme-toggle" />,
}));

jest.mock("@/components/ui/avatar", () => ({
  Avatar: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="avatar">{children}</div>
  ),
  AvatarImage: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} data-testid="avatar-image" />
  ),
  AvatarFallback: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="avatar-fallback">{children}</div>
  ),
}));

describe("Header", () => {
  it("renders the Helium brand name", () => {
    render(<Header />);
    expect(screen.getByText("Helium")).toBeInTheDocument();
  });

  it("renders the ThemeToggle", () => {
    render(<Header />);
    expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();
  });

  it("renders the user avatar with image and fallback", () => {
    render(<Header />);
    const avatarImage = screen.getByTestId("avatar-image");
    expect(avatarImage).toHaveAttribute(
      "src",
      expect.stringContaining("pravatar.cc")
    );
    expect(avatarImage).toHaveAttribute("alt", "User Avatar");

    const avatarFallback = screen.getByTestId("avatar-fallback");
    expect(avatarFallback).toHaveTextContent("JD");
  });

  it("displays the user name", () => {
    render(<Header />);
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });
});
