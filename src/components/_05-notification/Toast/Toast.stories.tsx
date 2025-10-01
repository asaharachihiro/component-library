import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastItem } from ".";
import { Button } from "@components/_01-action/Button";

const meta: Meta<typeof Toast> = {
  title: "Components/Notification/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Toast(トースト/スナックバー)は、ユーザーに通知を行うコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Toast>;

const Template: Story = {
  render: (args) => {
    return (
      <Toast {...args}>
        <ToastItem
          id="1"
          message={"1件 のお知らせがあります。"}
          autoDelete={false}
        >
          <Button variant="textPrimary" label="詳細" />
        </ToastItem>
        <ToastItem
          id="2"
          message={"パスワードの有効期限が切れています。"}
          type="error"
        >
          <Button variant="textPrimary" label="設定" />
        </ToastItem>
        <ToastItem
          id="3"
          message={"ログインが完了しました。"}
          type="success"
          autoDelete={true}
        />
      </Toast>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    position: "top-center",
  },
  argTypes: {
    position: {
      control: {
        type: "radio",
        options: [
          "top-left",
          "top-center",
          "top-right",
          "bottom-left",
          "bottom-center",
          "bottom-right",
        ],
      },
    },
  },
};
