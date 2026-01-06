import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from ".";

const meta: Meta<typeof DatePicker> = {
  title: "Components/Input/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "DatePickerは、日付の選択肢を提供するコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    id: "1",
    label: "生年月日",
    errorMessage: "本日以前の日付を入力してください。",
    value: "1995-12-25",
  },
  argTypes: {
    label: { control: { type: "text" } },
    errorMessage: { control: { type: "text" } },
    value: { control: { type: "text" } },
    isInvalid: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    isJPLocale: { control: { type: "boolean" } },
  },
};
