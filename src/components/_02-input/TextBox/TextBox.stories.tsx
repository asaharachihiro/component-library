import type { Meta, StoryObj } from "@storybook/react";
import { TextBox } from ".";

const meta: Meta<typeof TextBox> = {
  title: "Components/Input/TextBox",
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
    isInvalid: false,
    disabled: false,
    placeholder: "山田 太郎",
    isRequired: true,
    supportMessage: "この設定はあとから変更することができます。",
    errorMessage: "ユーザー名を入力してください。",
  },
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    isInvalid: { control: "boolean" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    isRequired: { control: "boolean" },
    supportMessage: { control: "text" },
    errorMessage: { control: "text" },
  },
  parameters: {
    controls: {
      exclude: ["type", "className", "onChange"],
    },
  },
};
