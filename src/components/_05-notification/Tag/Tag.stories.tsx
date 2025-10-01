import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from ".";

const meta: Meta<typeof Tag> = {
  title: "Components/Notification/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Tagは、オブジェクトの情報を補足するためのコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    id: "1",
    label: "NEW",
    type: "primary",
    disabled: false,
  },
  argTypes: {
    label: { control: "text" },
    type: { control: "radio", options: ["primary", "secondary", "danger"] },
    disabled: { control: "boolean" },
  },
};
