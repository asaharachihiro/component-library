import type { Meta, StoryObj } from "@storybook/react";
import { List } from ".";

const meta: Meta<typeof List> = {
  title: "Components/List/List",
  component: List,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Listは、選択可能なテキストの一覧を提供するシンプルなコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof List>;

const Template: Story = {
  render: (args) => {
    return (
      <ul>
        <List {...args} />
        <List id={"2"}>沿革</List>
        <List id={"3"}>役員・組織</List>
        <List id={"4"}>採用情報</List>
        <List id={"5"}>アクセス</List>
      </ul>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
    children: <span>会社概要・企業理念</span>,
    selected: false,
    disabled: false,
  },
};
