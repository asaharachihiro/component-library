import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";
import { CheckIcon } from "../../0-common";
import { IconButton } from "../../1-action/IconButton";
import { check } from "prettier";
import * as React from "react";
import { set } from "date-fns";

const meta: Meta<typeof Card> = {
  title: "Components/List/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Cardは、オブジェクトの情報やアクションをシャドウのついたエリアにまとめて表示するコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

const Template: Story = {
  render: (args) => {
    const cards = [
      "6P4-YKO8-M",
      "6P4-YKO8-L",
      "6P4-YKO8-LL",
      "2I0-EM3-S",
      "2I0-EM3-M",
      "2I0-EM3-L",
    ];

    return (
      <div className="grid grid-cols-4 gap-4">
        <Card {...args}>
          <div className="flex justify-between">
            <span className="text-lg font-bold">{args.id}</span>
          </div>

          <div className="my-4 flex h-[80px] items-center justify-center rounded-md bg-black-5-opacity text-2xl">
            <span className="material-symbols-rounded text-black-sub">
              home_improvement_and_tools
            </span>
          </div>
          <div className="m-2 flex flex-col space-y-2 text-xs text-black-sub">
            <span className="text-black">サラネジ 5*5 2cm</span>
            <span>W5mm * D5mm * H20mm</span>
            <span>BX工業</span>
          </div>
        </Card>
        {cards.map((index) => (
          <Card id={`card-${index}`}>
            <div className="flex justify-between">
              <span className="text-lg font-bold">{index}</span>
            </div>

            <div className="my-4 flex h-[80px] items-center justify-center rounded-md bg-black-5-opacity text-2xl">
              <span className="material-symbols-rounded text-black-sub">
                home_improvement_and_tools
              </span>
            </div>
            <div className="m-2 flex flex-col space-y-2 text-xs text-black-sub">
              <span className="text-black">サラネジ 5*5 2cm</span>
              <span>W5mm * D5mm * H20mm</span>
              <span>BX工業</span>
            </div>
          </Card>
        ))}
      </div>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "6P4-YKO8-S",
    selected: false,
  },
};
