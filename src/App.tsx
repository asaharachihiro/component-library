import * as React from "react";
import "./styles/global.css";
import { TextBox } from "./components/2-input/TextBox";
import { Form } from "./components/2-input/Form";
import { Button } from "./components/1-action/Button";

const App: React.FC = () => {
  const validate = () => {
    return {
      name: "お名前を入力してください。",
      nickname: null,
      tellnum: null,
    };
  };

  const handleSubmit = (formData: Record<string, any>) => {
    console.log("フォーム送信データ:", formData);
  };

  return (
    <div className="w-[400px] p-4">
      <Form
        className="w-[500px]"
        id={"1"}
        onSubmit={handleSubmit}
        validate={validate}
        formLabel="アカウント登録"
        defaultValues={{
          name: "山田 太郎",
          nickname: "だやま",
          tellnum: "090-1234-5678",
        }}
      >
        <TextBox id="name" label="お名前" isRequired />
        <TextBox id="nickname" label="ニックネーム" />
        <TextBox id="tellnum" label="電話番号" isRequired />

        <Button variant={"primary"} type="submit" id="submitButton">
          登録
        </Button>
      </Form>
    </div>
  );
};

export default App;
