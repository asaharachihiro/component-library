import * as React from "react";
import "./styles/global.scss";
import { Skelton } from "@components/8-loading/Skelton";
const App: React.FC = () => {
  return (
    <div className="w-[500px] space-y-4 p-6">
      <Skelton className="h-4 w-[200px]" />
      <Skelton className="h-4 w-[200px]" />
      <Skelton className="h-4 w-[200px]" />
    </div>
  );
};

export default App;
