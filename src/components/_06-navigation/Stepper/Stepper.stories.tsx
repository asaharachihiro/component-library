import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from ".";

const meta: Meta<typeof Stepper> = {
  title: "Components/Navigation/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Stepperは、フローのステップをナビゲーションするコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Stepper>;

const Template: Story = {
  render: (args) => {
    return (
      <div className="w-[600px]">
        <Stepper {...args} />
      </div>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
    steps: [
      { label: "ユーザー情報入力", status: "completed" },
      { label: "本人確認", status: "inprogress" },
      { label: "本登録申込み", status: "incomplete" },
    ],
  },
};
