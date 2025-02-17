import type { Meta, StoryObj } from "@storybook/react";
import { SearchBox } from ".";

const meta: Meta<typeof SearchBox> = {
  title: "Components/input/SearchBox",
  component: SearchBox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "SearchBoxは、情報・機能を検索する際に使用されるコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {
  args: {
    placeholder: "キーワードから検索",
  },
  argTypes: {
    placeholder: { control: "text" },
  },
};
