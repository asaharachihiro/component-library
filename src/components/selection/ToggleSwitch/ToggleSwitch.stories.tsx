import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { ToggleSwitch } from ".";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/Selection/ToggleSwitch",
  component: ToggleSwitch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "ToggleSwitchは、項目のON/OFFを切り替えることができるコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

const Template: Story = {
  render: (args) => {
    const [check, setCheck] = React.useState<boolean>(
      args.checked ? args.checked : false
    );
    React.useEffect(() => {
      setCheck(check);
    }, [args.checked]);

    return (
      <div className="w-[240px]">
        <ToggleSwitch {...args} />
      </div>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
    label: "メール通知を受け取る",
    checked: false,
    disabled: false,
  },
  argTypes: {
    checked: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
};
