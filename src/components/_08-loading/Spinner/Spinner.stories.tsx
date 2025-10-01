import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from ".";

const meta: Meta<typeof Spinner> = {
  title: "Components/Loading/Spinner",
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: "Spinnerは、待機状態の場合に表示されるアイコンです",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
