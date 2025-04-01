import type { Meta, StoryObj } from "@storybook/react";
import { PasswordBox } from ".";

const meta: Meta<typeof PasswordBox> = {
  title: "Components/Input/PasswordBox",
  component: PasswordBox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "PasswordBoxは、パスワードを入力するためのコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof PasswordBox>;

const Template: Story = {
  render: (args) => {
    return <PasswordBox {...args} />;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
    label: "パスワード",
    isRequired: true,
    value: "password",
  },
};
