import React from "react";
import { render } from "@testing-library/react";
import { Example, type IExampleProps } from ".";

const defaultProps: IExampleProps = {
  text: "Hola Cele",
};

describe("<Example/>", () => {
  it("Should render with default props", () => {
    const { getByText } = render(<Example {...defaultProps} />);

    const testComponent = getByText(defaultProps.text);
    expect(testComponent).toBeInTheDocument();
  });
});
