import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from ".";
import * as React from "react";
import { OptionsGroup } from "../../common";

const meta: Meta<typeof Radio> = {
  title: "Components/Selection/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Radioは、複数の選択肢から1つだけを選択させるためのコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Radio>;

const Template: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);
    React.useEffect(() => {
      setValue(args.value);
    }, [args.value]);

    return (
      <OptionsGroup id={"1"} label="ご希望の配送方法" isRequired={true}>
        <Radio {...args} />
      </OptionsGroup>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    options: [
      {
        label: "通常配送",
        value: "1",
        children: (
          <span className="ml-auto flex items-center text-sm">
            3~5営業日でお届け
          </span>
        ),
      },
      {
        label: "速達",
        value: "2",
        children: (
          <span className="ml-auto flex items-center text-sm">
            1~2営業日でお届け
          </span>
        ),
      },
      {
        label: "店舗受け取り",
        value: "3",
        children: (
          <span className="ml-auto flex items-center text-sm">
            2~3営業日でお届け
          </span>
        ),
      },
    ],
    className: "w-[272px]",
  },
};
