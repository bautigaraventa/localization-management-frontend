import { render, screen, fireEvent } from "@testing-library/react";
import { GenericSelector } from "../GenericSelector";

const options = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
];

describe("GenericSelector", () => {
  it("renders label and placeholder", () => {
    render(
      <GenericSelector
        label="Language"
        value=""
        onChange={() => {}}
        options={options}
      />
    );

    expect(screen.getByText("Language")).toBeInTheDocument();
    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  it("shows options on trigger click and allows selecting", () => {
    const onChangeMock = jest.fn();
    render(
      <GenericSelector
        label="Language"
        value=""
        onChange={onChangeMock}
        options={options}
      />
    );

    fireEvent.click(screen.getByTestId("select-button"));

    options.forEach((opt) => {
      expect(screen.getByText(opt.label)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Spanish"));

    expect(onChangeMock).toHaveBeenCalledWith("es");
  });

  it("renders selected value", () => {
    render(
      <GenericSelector
        label="Language"
        value="fr"
        onChange={() => {}}
        options={options}
      />
    );

    expect(screen.getByText("French")).toBeInTheDocument();
  });
});
