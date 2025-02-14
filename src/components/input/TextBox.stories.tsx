import type { Meta, StoryObj } from "@storybook/react";
import { TextBox } from ".";

const meta: Meta<typeof TextBox> = {
  title: "Component/input/TextBox",
  component: TextBox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "TextBoxは、テキストを入力するためのコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextBox>;

export const Default: Story = {
  args: {
    label: "ユーザー名",
    value: "",
    isValid: true,
    placeholder: "山田 太郎",
    isRequire: true,
    supportMassage: "この設定はあとから変更することができます。",
    errorMassage: "ユーザー名を入力してください。",
  },
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    isValid: { control: "boolean" },
    placeholder: { control: "text" },
    isRequire: { control: "boolean" },
    supportMassage: { control: "text" },
    errorMassage: { control: "text" },
  },
  parameters: {
    controls: {
      exclude: ["type", "className", "onChange"],
    },
  },
};
