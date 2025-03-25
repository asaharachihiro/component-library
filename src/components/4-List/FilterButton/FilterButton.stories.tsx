import type { Meta, StoryObj } from "@storybook/react";
import { FilterButton } from ".";
import { TextBox } from "../../2-input/TextBox";
import { SelectBox } from "../../3-selection/SelectBox";
import { Button } from "../../1-action/Button";

const meta: Meta<typeof FilterButton> = {
  title: "Components/List/FilterButton",
  component: FilterButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "FilterButtonは、絞り込み表示のための条件指定を行うコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof FilterButton>;

const Template: Story = {
  render: (args) => {
    const options = [
      { value: "1", label: "虎ノ門" },
      { value: "2", label: "新川" },
      { value: "3", label: "横浜" },
    ];
    return (
      <FilterButton {...args}>
        <TextBox id={"1"} label="検索ワード" />
        <SelectBox
          id={"2"}
          label="所属部署"
          defaultValue="1"
          options={options}
        />
      </FilterButton>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
    fotterElements: (
      <>
        <Button id="reset" variant="textPrimary" icon="refresh">
          リセット
        </Button>
        <Button id="confirm" variant="primary" size="s">
          検索
        </Button>
      </>
    ),
  },
};
