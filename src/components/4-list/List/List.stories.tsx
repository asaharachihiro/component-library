import type { Meta, StoryObj } from "@storybook/react";
import { ListGroup } from ".";

const meta: Meta<typeof ListGroup> = {
  title: "Components/List/List",
  component: ListGroup,
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

type Story = StoryObj<typeof ListGroup>;

export const Default: Story = {
  args: {
    id: "list-group",
    items: [
      { id: "1", children: "沿革" },
      { id: "2", children: "役員・組織" },
      { id: "3", children: "採用情報" },
      { id: "4", children: "アクセス" },
    ],
  },
};
