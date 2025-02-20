import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

type SampleData = {
  id: string;
  name: string;
  length?: string;
  distribution?: string[];
  rarity: string;
  spiecies: string;
  summary?: string;
};

const columnHelper = createColumnHelper<SampleData>();

export const columns: ColumnDef<SampleData, any>[] = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (row) => (
      <span className="text-sm text-black-sub">{row.getValue()}</span>
    ),
  }),
  columnHelper.accessor("name", {
    header: "名前",
    cell: ({ row }) =>
      row.original.rarity === "絶滅(EX)" ? (
        <span className="text-danger">{row.original.name}</span>
      ) : (
        <span className="text-black">{row.original.name}</span>
      ),
  }),
  columnHelper.accessor("spiecies", {
    header: "種類",
    cell: (row) => <span className="text-black-sub">{row.getValue()}</span>,
  }),
  columnHelper.accessor("length", {
    header: "体長",
    cell: (cell) => (
      <div className="text-right text-sm text-black-sub">{cell.getValue()}</div>
    ),
  }),
  columnHelper.accessor("distribution", {
    header: "分布",
    cell: (cell) => <span>{cell.getValue()?.join(" , ")}</span>,
  }),
  columnHelper.accessor("rarity", { header: "希少性" }),
  columnHelper.accessor("summary", {
    header: "概要",
    cell: (cell) => <span>{!cell.getValue() ? "-" : cell.getValue()}</span>,
  }),
];

export const sampleAnimalsData: SampleData[] = [
  {
    id: "1",
    name: "ニムノヌフエイグモ",
    length: "1.5",
    distribution: ["北部アメリカ"],
    rarity: "絶滅危惧IB類(EN)",
    spiecies: "クモ類",
    summary: "群れを作らず単独行動を好み、縄張り意識が非常に強い生物。",
  },
  {
    id: "2",
    name: "オネンツメムガイ",
    length: "185.7",
    distribution: ["ミクロネシア"],
    rarity: "野生絶滅(EW)",
    spiecies: "軟体動物",
    summary: "水辺に生息し、強靭な歯を持ち、小魚や甲殻類を捕食する。",
  },
  {
    id: "3",
    name: "ママウサホクセセムシ",
    length: "196.1",
    distribution: ["西ヨーロッパ", "中央アメリカ"],
    rarity: "低危険種(LC)",
    spiecies: "多足類",
    summary: "暗闇でも目が見える特殊な能力を持ち、夜行性の生活を送る。",
  },
  {
    id: "4",
    name: "ユカコトトローマ",
    length: "9.5",
    distribution: ["東アフリカ"],
    rarity: "絶滅危惧IA類(CR)",
    spiecies: "魚類",
    summary: "砂漠地帯に適応した耐熱性のある体を持ち、乾燥に強い。",
  },
  {
    id: "5",
    name: "タアヨシアネズミ",
    length: "188.5",
    distribution: ["メラネシア"],
    rarity: "絶滅危惧IB類(EN)",
    spiecies: "哺乳類",
    summary: "水に溶ける特殊な粘液を分泌し、敵から逃れるための防御策とする。",
  },
  {
    id: "6",
    name: "マヨツシンガエル",
    length: "193.3",
    distribution: ["中央アメリカ", "西アジア", "南アメリカ"],
    rarity: "絶滅危惧IB類(EN)",
    spiecies: "両生類",
    summary: "驚異的な跳躍力を誇る小型動物で、障害物を軽々と飛び越える。",
  },
  {
    id: "7",
    name: "ラミタグモ",
    length: "55.4",
    distribution: ["中央アジア", "カリブ海地域"],
    rarity: "野生絶滅(EW)",
    spiecies: "クモ類",
    summary: "擬態を得意とし、周囲の環境に溶け込んで敵から身を隠す。",
  },
  {
    id: "8",
    name: "ヒリヤスデ",
    length: "179.7",
    distribution: ["中央アメリカ"],
    rarity: "野生絶滅(EW)",
    spiecies: "多足類",
  },
  {
    id: "9",
    name: "ムフタクダコ",
    length: "11.2",
    distribution: ["中部アフリカ"],
    rarity: "低危険種(LC)",
    spiecies: "軟体動物",
    summary: "羽を広げると鮮やかな模様が現れ、敵を威嚇する効果がある。",
  },
  {
    id: "10",
    name: "ロニナスネコ",
    length: "32.3",
    distribution: ["オーストララシア"],
    rarity: "絶滅(EX)",
    spiecies: "哺乳類",
    summary: "暗闇でも目が見える特殊な能力を持ち、夜行性の生活を送る。",
  },
  {
    id: "11",
    name: "ムモネメハハニネス",
    length: "88.6",
    distribution: ["南部アフリカ"],
    rarity: "絶滅(EX)",
    spiecies: "哺乳類",
  },
  {
    id: "12",
    name: "メモフトロント",
    length: "38.3",
    distribution: ["中央アジア", "東ヨーロッパ"],
    rarity: "野生絶滅(EW)",
    spiecies: "魚類",
    summary: "発達した嗅覚を活かして獲物を探し、遠くからでも察知する。",
  },
  {
    id: "13",
    name: "アエヘナブナ",
    length: "71.6",
    distribution: ["東ヨーロッパ", "中央アメリカ"],
    rarity: "絶滅危惧II類(VU)",
    spiecies: "魚類",
    summary: "毒ではなく光を使って敵を威嚇し、身を守る特殊な能力を持つ。",
  },
  {
    id: "14",
    name: "スムヤヨフニカサル",
    length: "48.3",
    distribution: ["カリブ海地域", "南ヨーロッパ"],
    rarity: "準絶滅危惧(NT)",
    spiecies: "哺乳類",
    summary: "多彩な鳴き声を使い分け、仲間と意思疎通を行う高度な知能を持つ。",
  },
  {
    id: "15",
    name: "ンシホスロヒキシヘビ",
    length: "44.5",
    distribution: ["西ヨーロッパ"],
    rarity: "絶滅危惧II類(VU)",
    spiecies: "爬虫類",
    summary: "天敵が少なく、寿命が長く、数十年にわたって生存する。",
  },
  {
    id: "16",
    name: "ヤヤロキカエユシンガ",
    length: "25.3",
    distribution: ["東ヨーロッパ", "中央アメリカ"],
    rarity: "絶滅危惧II類(VU)",
    spiecies: "両生類",
    summary: "寒冷地に適応し、厚い毛皮を持ち、低温でも活動できる生物。",
  },
  {
    id: "17",
    name: "レンリクガエル",
    length: "185.3",
    distribution: ["北部アメリカ"],
    rarity: "絶滅(EX)",
    spiecies: "両生類",
    summary: "水に溶ける特殊な粘液を分泌し、敵から逃れるための防御策とする。",
  },
  {
    id: "18",
    name: "カカヌシンニルガエル",
    length: "64.5",
    distribution: ["ミクロネシア", "南アメリカ", "南ヨーロッパ"],
    rarity: "絶滅(EX)",
    spiecies: "両生類",
    summary: "樹上生活を送る動物で、高い枝を器用に移動する能力がある。",
  },
  {
    id: "19",
    name: "ロタムセヘウカイロトカゲ",
    length: "90.5",
    distribution: ["西アジア", "カリブ海地域", "西アフリカ"],
    rarity: "野生絶滅(EW)",
    spiecies: "爬虫類",
    summary: "砂漠地帯に適応した耐熱性のある体を持ち、乾燥に強い。",
  },
  {
    id: "20",
    name: "ヒリイマニオイカ",
    length: "24.2",
    distribution: ["南極"],
    rarity: "絶滅危惧II類(VU)",
    spiecies: "軟体動物",
    summary: "寒冷地に適応し、厚い毛皮を持ち、低温でも活動できる生物。",
  },
  {
    id: "21",
    name: "コアサヤキチキツネ",
    length: "124.4",
    distribution: ["ミクロネシア", "南アジア"],
    rarity: "絶滅(EX)",
    spiecies: "哺乳類",
    summary: "独特な羽毛を持ち、美しい鳴き声で仲間とコミュニケーションを取る。",
  },
  {
    id: "22",
    name: "ケホヒタカンヤスデ",
    length: "86.6",
    distribution: ["南アジア", "ミクロネシア"],
    rarity: "絶滅危惧II類(VU)",
    spiecies: "多足類",
    summary: "毒ではなく光を使って敵を威嚇し、身を守る特殊な能力を持つ。",
  },
  {
    id: "23",
    name: "アツワツウソクラスガニ",
    length: "159.4",
    distribution: ["北部アメリカ", "北アフリカ"],
    rarity: "準絶滅危惧(NT)",
    spiecies: "甲殻類",
    summary: "樹上生活を送る動物で、高い枝を器用に移動する能力がある。",
  },
  {
    id: "24",
    name: "マタハンカブト",
    length: "119.6",
    distribution: ["中部アフリカ", "西アフリカ", "ミクロネシア"],
    rarity: "準絶滅危惧(NT)",
    spiecies: "昆虫類",
    summary: "樹上生活を送る動物で、高い枝を器用に移動する能力がある。",
  },
  {
    id: "25",
    name: "タカミタタリザード",
    length: "50.3",
    distribution: ["カリブ海地域", "中央アメリカ"],
    rarity: "絶滅危惧IB類(EN)",
    spiecies: "爬虫類",
    summary: "独特な羽を持ち、美しい鳴き声で仲間とコミュニケーションを取る。",
  },
  {
    id: "26",
    name: "ウトカオキミヘビ",
    length: "90.6",
    distribution: ["中央アジア", "南アジア", "東アフリカ"],
    rarity: "低危険種(LC)",
    spiecies: "爬虫類",
    summary: "高速で移動することができ、時速50km以上で走ることも可能。",
  },
  {
    id: "27",
    name: "ニントグマ",
    length: "118.9",
    distribution: ["東ヨーロッパ", "西アジア"],
    rarity: "低危険種(LC)",
    spiecies: "哺乳類",
    summary: "昼夜を問わず活動し、俊敏な動きで獲物を捕える肉食性の生物。",
  },
  {
    id: "28",
    name: "トケイカエオスングモ",
    length: "177.2",
    distribution: ["カリブ海地域", "ミクロネシア", "オーストララシア"],
    rarity: "準絶滅危惧(NT)",
    spiecies: "クモ類",
    summary: "群れを作らず単独行動を好み、縄張り意識が非常に強い生物。",
  },
  {
    id: "29",
    name: "ナヒママガイ",
    length: "169.8",
    distribution: ["南アジア", "東ヨーロッパ"],
    rarity: "準絶滅危惧(NT)",
    spiecies: "軟体動物",
    summary: "羽を広げると鮮やかな模様が現れ、敵を威嚇する効果がある。",
  },
  {
    id: "30",
    name: "ミリヤルミチロムシ",
    length: "67.0",
    distribution: ["ミクロネシア"],
    rarity: "絶滅危惧IA類(CR)",
    spiecies: "多足類",
    summary: "強力な顎を持ち、硬い殻の生物をも砕くことができる捕食者。",
  },
];
