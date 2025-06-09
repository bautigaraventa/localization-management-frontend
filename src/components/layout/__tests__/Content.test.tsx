import { render, screen } from "@testing-library/react";
import { Content } from "../Content";

describe("Content component", () => {
  it("renders the title", () => {
    render(<Content title="Test Title">Child Content</Content>);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <Content title="With Children">
        <p>Here is some child content</p>
      </Content>
    );
    expect(screen.getByText("Here is some child content")).toBeInTheDocument();
  });

  it("applies the correct styling classes", () => {
    render(<Content title="Styled">Child</Content>);
    const section = screen.getByRole("region");
    expect(section).toHaveClass("flex-grow");
    expect(section).toHaveClass("bg-white");
    expect(section).toHaveClass("dark:bg-stone-800");
  });
});
