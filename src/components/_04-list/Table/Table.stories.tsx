import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { sampleAnimalsData, columns } from "./sampleData";
import { ColumnDef } from "@tanstack/react-table";

type SampleData = {
  id: string;
  name: string;
  length?: string;
  distribution?: string[];
  rarity: string;
  species: string;
  summary?: string;
};

const meta: Meta<typeof Table<SampleData>> = {
  title: "Components/List/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Compは、データの一覧を提供するコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Table<SampleData>>;

export const Default: Story = {
  render: (args) => (
    <div className="h-[500px] w-[100%]">
      <Table {...args}></Table>
    </div>
  ),
  args: {
    data: sampleAnimalsData,
    columns: columns as ColumnDef<SampleData>[],
  },
};
