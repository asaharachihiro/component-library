import type { Meta, StoryObj } from "@storybook/react";
import { TopbarItem, Topbar } from ".";
import { IconButton } from "../../1-action/IconButton";

const meta: Meta<typeof Topbar> = {
  title: "Components/Navigation/Topbar",
  component: Topbar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Topbarは、ナビゲーションとして使用される縦長のリストです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Topbar>;

const Template: Story = {
  render: (args) => {
    return (
      <Topbar {...args}>
        <TopbarItem id={"mytask"} href={""} label="タスク" />
        <TopbarItem id={"notification"} href={""} label="お知らせ" />
        <TopbarItem
          icon={"home"}
          id={"home"}
          href={""}
          label="ホーム"
          selected={true}
        />
        <IconButton
          icon={"notifications"}
          size="m"
          className="ml-2"
        ></IconButton>

        <IconButton
          icon={"account_circle"}
          size="m"
          className="ml-2"
        ></IconButton>
      </Topbar>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
    type: "drawer",
    className: "",
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
