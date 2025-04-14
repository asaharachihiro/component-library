import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

// カラムが多いサンプルデータ
type ColmnsData = Record<string, string | string[] | undefined>;
const columnHelper = createColumnHelper<ColmnsData>();
const columns: ColumnDef<ColmnsData, any>[] = Array.from(
  { length: 5000 },
  (_, i) => {
    const columnName = `additionalInfo${i + 1}`;
    return columnHelper.accessor(columnName, {
      header: `追加情報${i + 1}`,
    });
  }
);
const sampleColmnsData: ColmnsData[] = [
  {
    id: "1",
    name: "ニムノヌフエイグモ",
    length: "1.5",
    distribution: ["北部アメリカ"],
    rarity: "絶滅危惧IB類(EN)",
    species: "クモ類",
    summary: "群れを作らず単独行動を好み、縄張り意識が非常に強い生物。",
    ...Object.fromEntries(
      Array.from({ length: 5000 }, (_, i) => [
        `additionalInfo${i + 1}`,
        `情報${i + 1}`,
      ])
    ),
  },
];
export { columns, sampleColmnsData };

// 行が多いサンプルデータ
type RecordsData = Record<string, string | string[] | undefined>;
const recordsColumnHelper = createColumnHelper<RecordsData>();

// 5000列のカラム定義を動的に生成
const recordsColumns: ColumnDef<RecordsData, any>[] = Array.from(
  { length: 5000 },
  (_, i) => {
    const columnName = `additionalInfo${i + 1}`;
    return recordsColumnHelper.accessor(columnName, {
      header: `追加情報${i + 1}`,
    });
  }
);

// 10000行のサンプルデータを生成
const sampleRecordsData: RecordsData[] = Array.from(
  { length: 10000 },
  (_, i) => ({
    id: `${i + 1}`,
    name: `サンプル名${i + 1}`,
    length: `${(Math.random() * 10).toFixed(1)}`,
    distribution: ["地域A", "地域B", "地域C"],
    rarity: "一般",
    species: "サンプル種",
    summary: `サンプルの概要${i + 1}`,
    ...Object.fromEntries(
      Array.from({ length: 5000 }, (_, j) => [
        `additionalInfo${j + 1}`,
        `情報${j + 1}`,
      ])
    ),
  })
);

export { recordsColumns, sampleRecordsData };
