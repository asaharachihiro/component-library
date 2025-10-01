import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from ".";
import { Link } from "@components/_01-action/Link";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Notification/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Tooltipは、機能の説明やサポートテキストを収納するコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

const Template: Story = {
  render: (args) => {
    return (
      <div className="mt-[100px]">
        <Tooltip {...args}>
          <div>
            <span>パスワードは8~15文字、</span>
          </div>
          <span>半角英数字・半角記号が使用できます。</span>
          <Link id="2" label={"登録マニュアル"} />
        </Tooltip>
      </div>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
  },
};
