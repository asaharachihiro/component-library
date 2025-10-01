import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Progressbar } from ".";

const meta: Meta<typeof Progressbar> = {
  title: "Components/Loading/Progressbar",
  component: Progressbar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Progressbarは、待機状態の場合に表示されるコンポーネントです。",
      },
    },
  },
  argTypes: {
    percentage: {
      description:
        "進捗を0-100で渡す。値がない場合はアニメーションをリピート表示する",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Progressbar>;

export const Primary: Story = {
  args: {
    className: "h-6 w-[500px]",
  },
};
