import { render } from "@testing-library/react";

import { IconSize } from "./constants";
import { Icon } from ".";
import React from "react";

const ICON_SIZE = [
  IconSize.XXSMALL,
  IconSize.XSMALL,
  IconSize.MSMALL,
  IconSize.SMALL,
  IconSize.REGULAR,
  IconSize.XREGULAR,
  IconSize.MEDIUM,
  IconSize.XMEDIUM,
  IconSize.LARGE,
  IconSize.BIG,
  IconSize.XBIG,
  IconSize.XXBIG,
];

const source = "";

describe("Icon", () => {
  it("Renders icon when is SVG correctly", () => {
    const { container } = render(<Icon source={source} />);
    expect(container).toMatchSnapshot();
  });
  it("Renders Icon with other Size number correctly", () => {
    const { container } = render(<Icon source={source} size={16} />);
    expect(container).toMatchSnapshot();
  });
  test.each(ICON_SIZE)("Renders Icon with size %p as argument", (value) => {
    const { container } = render(<Icon source={source} size={value} />);
    expect(container).toMatchSnapshot();
  });
  it("Renders disabled Icon correctly", () => {
    const { container } = render(<Icon source={source} isDisabled />);
    expect(container).toMatchSnapshot();
  });

  it("Renders no disabled Icon correctly", () => {
    const { container } = render(<Icon source={source} isDisabled={false} />);
    expect(container).toMatchSnapshot();
  });
});
