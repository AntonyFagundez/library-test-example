import React from "react";
import { render } from "@testing-library/react";
import { type IThemeProviderProps, ThemeProvider } from ".";

const defaultProps: IThemeProviderProps = {};

describe("<ThemeProvider/>", () => {
  it("Should render with classname provided", () => {
    const { getByTestId } = render(<ThemeProvider {...defaultProps} />);

    const element = getByTestId("theme-provider");
    expect(element.className).toBe("themeVars ");
  });
});
