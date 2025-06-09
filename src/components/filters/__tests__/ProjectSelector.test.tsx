import { render, screen, fireEvent } from "@testing-library/react";
import { ProjectSelector } from "../ProjectSelector";

jest.mock("@/store/translationStore", () => ({
  useTranslationStore: jest.fn(),
}));

import { useTranslationStore } from "@/store/translationStore";
import { mockedProjects } from "@/lib/mocks";

describe("ProjectSelector", () => {
  const setSelectedProjectMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useTranslationStore as jest.Mock).mockReturnValue({
      selectedProject: "all",
      setSelectedProject: setSelectedProjectMock,
    });
  });

  it("renders GenericSelector with project options", () => {
    render(<ProjectSelector />);

    expect(screen.getByText("Project")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("select-button"));

    mockedProjects.forEach((p) => {
      expect(screen.getByText(p.name)).toBeInTheDocument();
    });
  });

  it("calls setSelectedProject when option selected", () => {
    render(<ProjectSelector />);

    fireEvent.click(screen.getByTestId("select-button"));
    fireEvent.click(screen.getByText(mockedProjects[0].name));

    expect(setSelectedProjectMock).toHaveBeenCalledWith(mockedProjects[0].id);
  });
});
