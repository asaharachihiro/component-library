import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

// 動的に型を生成
type SampleData = Record<string, string | string[] | undefined>;

const columnHelper = createColumnHelper<SampleData>();

// 5000列のカラム定義を動的に生成
const columns: ColumnDef<SampleData, any>[] = Array.from(
  { length: 5000 },
  (_, i) => {
    const columnName = `additionalInfo${i + 1}`;
    return columnHelper.accessor(columnName, {
      header: `追加情報${i + 1}`,
    });
  }
);

// サンプルデータを生成
const sampleColmnsData: SampleData[] = [
  {
    id: "1",
    name: "ニムノヌフエイグモ",
    length: "1.5",
    distribution: ["北部アメリカ"],
    rarity: "絶滅危惧IB類(EN)",
    spiecies: "クモ類",
    summary: "群れを作らず単独行動を好み、縄張り意識が非常に強い生物。",
    ...Object.fromEntries(
      Array.from({ length: 5000 }, (_, i) => [
        `additionalInfo${i + 1}`,
        `情報${i + 1}`,
      ])
    ),
  },
  // 他のデータも同様に追加情報を含めて定義
];

export { columns, sampleColmnsData };
