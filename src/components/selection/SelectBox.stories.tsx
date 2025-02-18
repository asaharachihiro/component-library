import type { Meta, StoryObj } from "@storybook/react";
import { SelectBox } from ".";

const meta: Meta<typeof SelectBox> = {
  title: "Components/selection/SelectBox",
  component: SelectBox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "SelectBoxは、複数の選択肢を提供するコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof SelectBox>;

export const Default: Story = {
  args: {
    options: [
      { value: "1", label: "学生" },
      { value: "2", label: "会社員" },
      { value: "3", label: "自営業" },
      { value: "4", label: "パート・アルバイト" },
      { value: "6", label: "その他" },
    ],
    label: "職業",
    placeholder: "職業を選択",
    value: "",
  },
};
