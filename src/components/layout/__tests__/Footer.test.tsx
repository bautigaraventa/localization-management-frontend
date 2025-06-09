import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer", () => {
  it("renders the copyright text with current year", () => {
    const year = new Date().getFullYear();
    render(<Footer />);
    expect(
      screen.getByText(
        `© ${year} Helium Contractor Assignment solved by bautigaraventa`
      )
    ).toBeInTheDocument();
  });

  it("contains a link to the GitHub repo", () => {
    render(<Footer />);
    const link = screen.getByRole("link", {
      name: /check project repo here!/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/bautigaraventa/localization-management-frontend"
    );
    expect(link).toHaveAttribute("target", "_blank");
  });
});
