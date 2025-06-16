import type { Meta, StoryObj } from "@storybook/react";
import { RangeInput } from ".";
import { DatePicker } from "../DatePicker";

const meta: Meta<typeof RangeInput> = {
  title: "Components/Input/RangeInput",
  component: RangeInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "RangeInputは、数値や日付の範囲を指定するコンポーネントです。",
      },
    },
  },
  argTypes: {
    children: {
      description: "DatePicker や TextBox",
    },
  },
};
export default meta;

type Story = StoryObj<typeof RangeInput>;

export const Default: Story = {
  args: {
    id: "1",
    children: [
      <DatePicker id={"start"} label="開始日" />,
      <DatePicker id={"end"} label="終了日" />,
    ],
  },
};
