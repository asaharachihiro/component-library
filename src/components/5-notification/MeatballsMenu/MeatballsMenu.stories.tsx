import type { Meta, StoryObj } from "@storybook/react";
import { MeatballsMenu } from ".";
import { List } from "@components/4-list/List";

const meta: Meta<typeof MeatballsMenu> = {
  title: "Components/Notification/MeatballsMenu",
  component: MeatballsMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "MeatballsMenuは、選択肢のリストを提供するアイコンボタンです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof MeatballsMenu>;

const Template: Story = {
  render: (args) => {
    return (
      <MeatballsMenu {...args}>
        <ul>
          <List id="1">編集</List>
          <List id="2">複製</List>
          <List id="3">削除</List>
        </ul>
      </MeatballsMenu>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
  },
};
