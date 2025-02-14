import type { Meta, StoryObj } from "@storybook/react";
import { Link } from ".";

const meta: Meta<typeof Link> = {
  title: "Components/Action/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Linkは、グローバルメニュー以外の場所で別ページへ遷移させるときに使用するコンポーネントです。",
      },
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
