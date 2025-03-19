import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from ".";

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
      <div className="w-[240px] border border-black-5-opacity">
        {/* TODO:listコンポーネントにする */}
        <Accordion id={"1"} label="NEWS" />
        <Accordion id={"1"} label="製品情報">
          {/* TODO:listコンポーネントにする */}
          <ul className="p-2 pl-4 text-black-sub">
            <p>BX1シリーズ</p>
            <p>DCシリーズ</p>
          </ul>
        </Accordion>
        <Accordion {...args}>
          <ul className="p-2 pl-4 text-black-sub">
            {/* TODO:listコンポーネントにする */}
            <li>会社概要・企業理念</li>
            <li>沿革</li>
            <li>役員・組織</li>
            <li>採用情報</li>
            <li>アクセス</li>
          </ul>
        </Accordion>
        <Accordion id={"1"} label="お問い合わせ">
          <div className="p-2 pl-4 text-black-sub">
            <p>電話番号 000-0000-0000</p>
            <p>メール sample@mail.com</p>
          </div>
        </Accordion>
      </div>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "2",
    label: "会社概要",
  },
};
