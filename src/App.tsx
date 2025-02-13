import * as React from "react";
import "./styles/global.css";
import { Link } from "./components/action/Link";

const App: React.FC = () => {
  return (
    <>
      <Link
        target="_blank"
        children={"外部サイト(Tailwind - font-size)"}
        href={"https://tailwindcss.com/docs/font-size#examples"}
        className="block"
      />
      <Link
        target="_blank"
        children={"外部サイト(Tailwind - font-size)"}
        href={"https://tailwindcss.com/docs/font-size#examples"}
        className="block"
      />
    </>
  );
};

export default App;
