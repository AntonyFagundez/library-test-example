import type { Meta, StoryObj } from "@storybook/react";

import { Example } from ".";

const meta = {
  title: "Example",
  component: Example,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Simple: Story = {
  args: {
    text: "Simple example",
  },
};
