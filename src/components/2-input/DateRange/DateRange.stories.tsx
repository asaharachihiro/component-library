import type { Meta, StoryObj } from "@storybook/react";
import { DateRange } from ".";
import { DatePicker } from "../DatePicker";
import { Form, FormFooter } from "../Form";
import { Button } from "@components/1-action/Button";

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

const Template: Story = {
  render: (args) => {
    const dateRangeValidation = (formData: Record<string, any>) => {
      return {
        daterange: "指定できる日数を超えています。",
        startDate: null,
        endDate: null,
      };
    };
    return (
      <Form id={"form"} validate={dateRangeValidation}>
        <DateRange {...args}>
          <DatePicker id={`startDate`} label="対象期間" />
          <DatePicker id={`endDate`} />
        </DateRange>
      </Form>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "date-range",
    className: "w-[400px]",
    isValidValue: false,
    supportMessage: "指定できる日数は最大30日間です。",
    errorMessage: "指定できる日数を超えています。",
  },
};
