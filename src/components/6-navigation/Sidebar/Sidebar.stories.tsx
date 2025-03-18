import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem, Sidebar } from ".";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Navigation/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Sidebarは、ナビゲーションとして使用される縦長のリストです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

const Template: Story = {
  render: (args) => {
    return (
      <Sidebar {...args}>
        <MenuItem
          icon="home"
          id={"home"}
          href={"#"}
          label="ホーム"
          selected={true}
        />
        <MenuItem icon="mail" id={"notification"} href={""} label="お知らせ" />
        <MenuItem icon="task_alt" id={"mytask"} href={""} label="タスク" />
        <MenuItem
          icon="description"
          id={"mydoc"}
          href={""}
          label="ドキュメント"
        />
      </Sidebar>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
    type: "drawer",
    headerItem: <span>山田 太郎</span>,
  },
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["fixed", "drawer"],
      },
    },
  },
};
