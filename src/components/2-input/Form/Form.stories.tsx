import type { Meta, StoryObj } from "@storybook/react";
import { Form, FormFooter } from ".";
import { TextBox } from "../TextBox";
import { Button } from "@components/1-action/Button";
import { DatePicker } from "../DatePicker";

const meta: Meta<typeof Form> = {
  title: "Components/Input/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Formは、複数の情報をまとめて登録するためのコンポーネントです。",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Form>;

const validate = (formData: Record<string, any>) => {
  return {
    name: null,
    birthdate: null,
    email: "メールアドレスを入力してください。",
  };
};

const handleSubmit = (formData: Record<string, any>) => {};

const Template: Story = {
  render: (args) => {
    return (
      <Form
        {...args}
        className="w-[500px]"
        validate={validate}
        onSubmit={handleSubmit}
      >
        <TextBox
          id="name"
          label="お名前"
          isRequired
          className="pointer-events-none"
        />
        <DatePicker
          id="birthdate"
          label="生年月日"
          className="pointer-events-none"
        />
        <TextBox
          id="email"
          label="メールアドレス"
          isRequired
          className="pointer-events-none"
        />
        <FormFooter id={"formFotter"}>
          <Button variant={"primary"} type="submit" label="登録" />
        </FormFooter>
      </Form>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    id: "1",
    formLabel: "アカウント登録",
    description: "サービス利用のため、下記の情報をご入力ください。",
    supportText: "ご登録の内容は後から変更することができます。",
    values: {
      name: "山田 太郎",
      birthdate: "1990-01-01",
      email: "",
    },
  },
};
