import * as React from "react";
import "./styles/global.css";
import { Link } from "./components/action/Link";

const App: React.FC = () => {
  return (
    <>
      <Link
        target="_blank"
        children={"あああ"}
        href={"https://www.youtube.com/watch?v=V9Hjb2S4e0Y"}
      />
    </>
  );
};

export default App;
