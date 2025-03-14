import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";
import * as React from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Selection/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Checkboxは、複数選択のために使用されるコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

const Template: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(args.defaultChecked);

    React.useEffect(() => {
      setChecked(args.defaultChecked);
    }, [args.defaultChecked]);

    const handleCheckedChange = (newChecked: boolean | "indeterminate") => {
      setChecked(newChecked);
    };

    return (
      <Checkbox
        {...args}
        defaultChecked={checked}
        onChange={handleCheckedChange}
      />
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
    defaultChecked: false,
    children: "利用規約に同意します。",
    disabled: false,
    isValid: true,
  },
  argTypes: {
    defaultChecked: {
      control: { type: "boolean" },
    },
    isValid: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
  },
};
