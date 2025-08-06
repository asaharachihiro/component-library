import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";
import * as React from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Selection/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Checkboxは、複数選択のために使用されるコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: "price-range",
    options: [
      { id: "1", label: " 1,000 ~  3,000" },
      { id: "2", label: " 3,000 ~  5,000" },
      { id: "3", label: " 5,000 ~ 10,000" },
      { id: "4", label: "10,000 ~" },
    ],
    label: "価格帯",
  },
};
