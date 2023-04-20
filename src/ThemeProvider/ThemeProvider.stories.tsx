import type { Meta, StoryObj } from "@storybook/react";
import styles from "./overrides.module.css";
import { ThemeProvider } from ".";
import React from "react";

const meta = {
  title: "ThemeProvider",
  component: ThemeProvider,
  tags: ["autodocs"],
  argTypes: {
    cssVarsOverrides: { control: "text" },
  },
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Simple: Story = {
  args: {
    children: (
      <div style={{ backgroundColor: "var(--primaryPaymentDefault)", width: 100, height: 100 }} />
    ),
  },
};

export const WithCssOverride: Story = {
  args: {
    cssVarsOverrides: styles.overridesExample,
    children: (
      <div style={{ backgroundColor: "var(--primaryPaymentDefault)", width: 100, height: 100 }} />
    ),
  },
};
