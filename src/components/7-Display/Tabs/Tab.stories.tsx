import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from ".";

const meta: Meta<typeof Tab> = {
  title: "Components/Display/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Tabは、コンテンツの表示を切り替えるためのコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {
    id: "1",
    tabs: [
      { id: "1", label: "投稿", content: <div>32件の投稿 があります。</div> },
      { id: "2", label: "返信", content: <div>16件の返信 があります。</div> },
      {
        id: "3",
        label: "いいね",
        content: <div>102件のいいね があります。</div>,
      },
    ],
    selected: "1",
  },
};
