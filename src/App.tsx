import * as React from "react";
import "./styles/global.scss";
import {
  Button,
  Checkbox,
  DatePicker,
  DateRange,
  FilePicker,
  Form,
  FormFooter,
  MultiSelectBox,
  PasswordBox,
  Radio,
  SearchBox,
  SelectBox,
  Slider,
  Table,
  TextBox,
  ToggleSwitch,
} from "./components";
import {
  sampleAnimalsData,
  columns,
} from "./components/4-list/Table/sampleData";
import { ColumnDef } from "node_modules/@tanstack/table-core/build/lib/types";

// type SampleData = {
//   id: string;
//   name: string;
//   length?: string;
//   distribution?: string[];
//   rarity: string;
//   species: string;
//   summary?: string;
// };

const App: React.FC = () => {
  const defaultFormData = {
    textbox: "初期値",
    single_date: "2025-12-25",
    range: { start: "2025-07-08", end: "2025-07-01" },
    password: "abc123",
    search: "キーワード",
    file: null,
    slider: 75,
    select: "dog",
    multiSelect: [
      { value: "1", label: "choco sauce" },
      { value: "2", label: "cream" },
    ],
    checkbox: false,
    toggle: true,
    radio: "1",
  };

  // const defaultFormData = {
  //   textbox: "",
  //   single_date: "",
  //   range: { start: "", end: "" },
  //   password: "",
  //   search: "",
  //   file: null,
  //   slider: 0,
  //   select: "",
  //   multiSelect: [],
  //   checkbox: false,
  //   toggle: false,
  //   radio: "",
  // };

  const validate = (formData: Record<string, any>) => {
    return {
      textbox: "テキストを入力してください。",
      single_date: "日付を選択してください。",
      range: "期間を入力してください。",
      password: "パスワードを入力してください。",
      search: "キーワードを入力してください。",
      slider: "数字を選択してください。",
      select: "選択してください。",
      multiSelect: "選択してください。",
      checkbox: "チェックしてください。",
      toggle: " 有効化してください。",
      radio: "ラジオを選択してください。",
    };
  };

  return (
    <div className="h-[600px] w-[500px] p-6">
      {/* テーブル確認用 */}
      {/* <Table
        data={sampleAnimalsData}
        columns={columns as ColumnDef<SampleData>[]}
        columnWidth={125}
        columnPinning={{
          left: ["id", "name"],
        }}
     /> */}

      {/* フォーム確認用 */}

      <Form
        values={defaultFormData}
        id={"form"}
        validate={validate}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        <TextBox id={"textbox"} label="タイトル" isRequired={true} />
        <PasswordBox id={"password"} label="タイトル" isRequired={true} />
        <SearchBox id={"search"} />
        <DatePicker id={"single_date"} label="タイトル" isRequired={true} />
        <Slider id={"slider"} max={100} label="タイトル" isRequired={true} />
        <DateRange
          id={"range"}
          label="タイトル"
          isRequired={{ start: true, end: false }}
        />
        <SelectBox
          label="select"
          id={"select"}
          options={[
            { value: "dog", label: "dog" },
            { value: "monky", label: "monky" },
            { value: "bird", label: "bird" },
          ]}
          isRequired={true}
        />
        <MultiSelectBox
          id={"multiSelect"}
          label="トッピングオプション"
          options={[
            { value: "1", label: "choco sauce" },
            { value: "2", label: "cream" },
            { value: "3", label: "corn" },
          ]}
          isRequired={true}
        />
        <Checkbox id={"checkbox"} label={"規約に同意します。"} />
        <ToggleSwitch id={"toggle"} label="メール通知を受け取る" />
        <Radio
          id={"radio"}
          options={[
            { value: "1", label: "男性" },
            { value: "2", label: "女性" },
          ]}
        />
        <FormFooter id={"footer"}>
          <Button
            type={"submit"}
            id="submit"
            variant={"primary"}
            label="確定"
          />
        </FormFooter>
      </Form>
    </div>
  );
};

export default App;
