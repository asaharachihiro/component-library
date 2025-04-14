import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from ".";
import { List } from "../List";

const meta: Meta<typeof Accordion> = {
  title: "Components/List/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Accordionは、開閉できるリストのコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Accordion>;

const Template: Story = {
  render: (args) => {
    return (
      <ul className="w-[240px] border border-black-5-opacity">
        <List id={"1"}>NEWS</List>
        <Accordion id={"2"} label="製品情報">
          <ul className="text-black-sub">
            <List id={"2-1"}>BX1シリーズ</List>
            <List id={"2-2"}>DCシリーズ</List>
          </ul>
        </Accordion>
        <Accordion {...args}>
          <ul className="text-black-sub">
            <List id={"3-1"}>会社概要・企業理念</List>
            <List id={"3-2"}>沿革</List>
            <List id={"3-3"}>役員・組織</List>
            <List id={"3-4"}>採用情報</List>
            <List id={"3-5"}>アクセス</List>
          </ul>
        </Accordion>
        <Accordion id={"4"} label="お問い合わせ">
          <div className="space-y-2 p-4 text-black-sub">
            <span>電話番号 000-0000-0000</span>
            <span>メール sample@mail.com</span>
          </div>
        </Accordion>
      </ul>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "3",
    label: "企業情報",
    defalutOpen: false,
  },
};
