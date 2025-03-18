import type { Meta, StoryObj } from "@storybook/react";
import { SelectBox } from ".";
import * as React from "react";

const meta: Meta<typeof SelectBox> = {
  title: "Components/Selection/SelectBox",
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

const Template: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = React.useState(args.defaultValue);

    React.useEffect(() => {
      setSelectedValue(args.defaultValue);
    }, [args.defaultValue]);

    return (
      <SelectBox
        {...args}
        defaultValue={selectedValue}
        onChange={setSelectedValue}
      />
    );
  },
};

export const Default: Story = {
  ...Template,
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
    defaultValue: "none",
    hasDefaultOption: true,
  },
};
