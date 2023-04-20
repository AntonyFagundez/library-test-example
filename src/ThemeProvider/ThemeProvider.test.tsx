import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from ".";

describe("<ThemeProvider/>", () => {
  it("Should render with classname provided", () => {
    const { getByTestId } = render(<ThemeProvider />);

    const element = getByTestId("theme-provider");
    expect(element.className).toBe("themeVars ");
  });
});
