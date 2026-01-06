import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from ".";

const meta: Meta<typeof Slider> = {
  title: "Components/Input/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Sliderは、値や範囲を指定するためのコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Slider>;

const Template: Story = {
  render: (args) => {
    return (
      <div className="w-[300px]">
        <Slider {...args} />
      </div>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
    label: "",
    isRequired: false,
    value: 25,
    min: 0,
    max: 100,
    isInvalid: false,
    disabled: false,
  },
};
