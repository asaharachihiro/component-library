import type { Meta, StoryObj } from "@storybook/react";
import { MultiSelectBox } from ".";

const meta: Meta<typeof MultiSelectBox> = {
  title: "Components/Selection/MultiSelectBox",
  component: MultiSelectBox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "MultiSelectBoxは、複数選択可能な選択肢を提供するコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof MultiSelectBox>;

const Template: Story = {
  render: (args) => {
    return <MultiSelectBox {...args} />;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
    label: "応募地域",
    placeholder: "未選択",
    isRequired: false,
    isInvalid: false,
    options: [
      { value: "1", label: "東京都" },
      { value: "2", label: "神奈川県" },
      { value: "3", label: "埼玉県" },
      { value: "4", label: "千葉県" },
      { value: "5", label: "茨城県" },
      { value: "6", label: "栃木県" },
      { value: "7", label: "群馬県" },
    ],
  },
};
