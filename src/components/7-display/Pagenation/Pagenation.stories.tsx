import type { Meta, StoryObj } from "@storybook/react";
import { Pagenation } from ".";

const meta: Meta<typeof Pagenation> = {
  title: "Components/Display/Pagenation",
  component: Pagenation,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Pagenationは、コンテンツを複数ページに分割する表示形式を指します。",
      },
    },
  },
  argTypes: {
    value: {
      control: {
        type: "number",
      },
      description: "現在のページ番号",
    },
    total: {
      control: {
        type: "number",
      },
      description: "総ページ数",
    },
    maxLength: {
      control: {
        type: "number",
      },
      description: "表示する項目数",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Pagenation>;

const Template: Story = {
  render: (args) => {
    return <Pagenation {...args} />;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
    value: 4,
    total: 10,
    maxLength: 7,
  },
};
