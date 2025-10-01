import type { Meta, StoryObj } from "@storybook/react";
import { FilePicker } from ".";

const meta: Meta<typeof FilePicker> = {
  title: "Components/Input/FilePicker",
  component: FilePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "FilePickerは、ローカルファイルを選択するためのコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof FilePicker>;

export const Default: Story = {
  args: {
    id: "1",
    isMultiple: true,
    fileFormats: [".png", ".jpeg"],
    disabled: false,
  },
  argTypes: {},
};
