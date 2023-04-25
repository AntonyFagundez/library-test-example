import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from ".";

const OPTIONS = [
  "XXSMALL",
  "XSMALL",
  "MSMALL",
  "SMALL",
  "REGULAR",
  "REGULAR",
  "MEDIUM",
  "XMEDIUM",
  "LARGE",
  "BIG",
  "XBIG",
  "XXBIG",
];

const meta = {
  title: "Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: OPTIONS,
      control: { type: "select" },
    },
  },
  args: {
    source: "https://dummyimage.com/300x300/616161/fff&text=icon",
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Simple: Story = {};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
