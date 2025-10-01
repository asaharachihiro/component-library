import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";
import { IconButton } from "@components/_01-action/IconButton";

const meta: Meta<typeof Badge> = {
  title: "Components/Notification/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Badgeは、未読の通知や未完了のタスクを知らせるコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

const Template: Story = {
  render: (args) => {
    return (
      <div className="relative inline-block">
        <Badge {...args} />
        <IconButton icon="notifications" id="iconButton" size="m" />
      </div>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
    count: 25,
    type: "counter",
  },
  argTypes: {
    count: { control: { type: "number" } },
    type: { control: { radio: ["counter", "dot"] } },
  },
};
