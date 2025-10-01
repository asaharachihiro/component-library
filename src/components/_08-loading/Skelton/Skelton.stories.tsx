import type { Meta, StoryObj } from "@storybook/react";
import { Skelton } from ".";

const meta: Meta<typeof Skelton> = {
  title: "Components/Loading/Skelton",
  component: Skelton,
};
export default meta;

type Story = StoryObj<typeof Skelton>;

export const Primary: Story = {
  args: {
    className: "h-6 w-[500px]",
  },
};
