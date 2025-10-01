import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from ".";

const meta: Meta<typeof IconButton> = {
  title: "Components/Action/IconButton",
  component: IconButton,
  argTypes: {
    icon: {
      control: { type: "text" },
      description: "Material Symbols アイコン名",
    },
    size: { control: { type: "radio", options: ["s", "m"] } },
    disabled: { control: "boolean" },
    isLoading: { control: "boolean" },
    checked: {
      control: "boolean",
      description: "ON/OFFの状態を示す",
    },
    className: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    size: "m",
    disabled: false,
    icon: "star",
    isLoading: false,
    checked: false,
  },
};
