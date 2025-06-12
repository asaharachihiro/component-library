import * as React from "react";
import "./styles/global.scss";
import { Table } from "./components";
import {
  sampleAnimalsData,
  columns,
} from "./components/4-list/Table/sampleData";
import { ColumnDef } from "node_modules/@tanstack/table-core/build/lib/types";

type SampleData = {
  id: string;
  name: string;
  length?: string;
  distribution?: string[];
  rarity: string;
  species: string;
  summary?: string;
};

const App: React.FC = () => {
  return (
    <div className="h-[600px] w-[1000px] p-6">
      <Table
        data={sampleAnimalsData}
        columns={columns as ColumnDef<SampleData>[]}
        columnWidth={125}
        columnPinning={{
          left: ["id", "name"],
        }}
      />
    </div>
  );
};

export default App;
