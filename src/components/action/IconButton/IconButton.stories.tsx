import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from ".";

const meta: Meta<typeof IconButton> = {
  title: "Components/Action/IconButton",
  component: IconButton,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["global", "function"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
    isToggled: { control: "boolean" },
    asChild: { control: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    variant: "global",
    disabled: false,
    icon: "star",
  },
  parameters: {
    controls: {
      exclude: ["asChild", "className"],
    },
  },
};
