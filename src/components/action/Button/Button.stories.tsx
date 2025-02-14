import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Action/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
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
      options: ["sm", "md"],
    },
    disabled: { control: "boolean" },
    isActive: { control: "boolean" },
    isLoading: { control: "boolean" },
    children: { control: "text" },
    asChild: { control: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "BUTTON",
    disabled: false,
    isActive: false,
    isLoading: false,
    icon: "home",
  },
};
