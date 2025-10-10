import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Progressbar } from ".";

const meta: Meta<typeof Progressbar> = {
  title: "Components/Loading/Progressbar",
  component: Progressbar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Progressbarは、待機状態の場合に表示されるコンポーネントです。",
      },
    },
  },
  argTypes: {
    percentage: {
      description:
        "進捗を0-100で渡す。値がない場合はアニメーションをリピート表示する",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Progressbar>;
export const Default: Story = {
  args: {
    className: "h-6 w-[500px]",
  },
};

// 追加: インタラクティブな進捗バー
export const Animated: Story = {
  render: (args) => {
    const [percentage, setPercentage] = React.useState(0);
    React.useEffect(() => {
      const timer = setInterval(() => {
        setPercentage((prev) => (prev < 100 ? prev + 1 : 0));
      }, 250);
      return () => clearInterval(timer);
    }, []);
    return <Progressbar {...args} percentage={percentage} />;
  },
  args: {
    className: "h-6 w-[500px]",
  },
};
