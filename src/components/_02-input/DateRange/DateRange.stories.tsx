import type { Meta, StoryObj } from "@storybook/react";
import { DateRange } from ".";

const meta: Meta<typeof DateRange> = {
  title: "Components/Input/DateRange",
  component: DateRange,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "DateRangeは、 日付の範囲を入力するためにDatePickerをまとめるコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof DateRange>;

export const Default: Story = {
  args: {
    id: "date-range",
    label: "対象期間",
    className: "w-[400px]",
    isInvalid: true,
    isRequired: { start: false, end: false },
    supportMessage: "指定できる日数は最大30日間です。",
    errorMessage: "選択できない日付が含まれています。",
  },
};
