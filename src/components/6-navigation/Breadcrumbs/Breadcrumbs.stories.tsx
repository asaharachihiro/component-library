import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from ".";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Navigation/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "パンくずリスト（Breadcrumbs）は、コンテンツの階層を示すコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

const Template: Story = {
  render: (args) => {
    return <Breadcrumbs {...args} />;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
    items: [
      { label: "ホーム", href: "", icon: "home", selected: false },
      { label: "企業情報", href: "", icon: "", selected: false },
      { label: "アクセス", href: "", icon: "", selected: true },
    ],
  },
};
