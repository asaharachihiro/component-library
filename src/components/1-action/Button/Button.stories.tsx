import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Action/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: [
        "primary",
        "secondary",
        "textPrimary",
        "textSecondary",
        "danger",
        "textDanger",
      ],
    },
    size: {
      control: { type: "radio" },
      options: ["s", "m"],
    },
    disabled: { control: "boolean" },
    isActive: {
      control: "boolean",
      description: "モードがある場合のアクティブ状態",
    },
    isLoading: { control: "boolean" },
    children: { control: "text" },
    icon: {
      control: { type: "text" },
      description: "Material Symbols アイコン名",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "m",
    label: "HOME",
    disabled: false,
    isActive: false,
    isLoading: false,
    icon: "home",
  },
};
