import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from ".";
import { Button } from "../../1-action/Button";
import { TextBox } from "../../2-input/TextBox";

const meta: Meta<typeof Modal> = {
  title: "Components/Display/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Modalは、ユーザーのアクションを制限するための表示形式です。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

const Template: Story = {
  render: (args) => {
    return (
      <div className="p-8">
        <Modal {...args}>
          <div className="mb-6 space-y-4">
            <TextBox
              id={"email"}
              placeholder="sample@email.com"
              label="メールアドレス"
            />
            <TextBox
              id={"password"}
              placeholder="パスワード"
              label="パスワード"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <Button variant="textSecondary">キャンセル</Button>
            <Button variant="primary">ログイン</Button>
          </div>
        </Modal>
      </div>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
    title: "ログイン",
    isDeletable: false,
    className: "w-[360px]",
    isOpen: true,
    onClose: () => {},
  },
};
