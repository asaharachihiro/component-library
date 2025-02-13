import type { Meta, StoryObj } from "@storybook/react";
import { Link } from ".";

const meta: Meta<typeof Link> = {
  title: "Component/Action/Link",
  component: Link,
  argTypes: {
    children: { control: "text" },
    target: { control: { type: "radio" }, options: ["_self", "_blank"] },
  },
  parameters: {
    controls: {
      exclude: ["asChild", "className"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: "サービスサポート窓口",
    target: "_blank",
  },
};
