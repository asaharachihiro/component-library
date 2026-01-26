import React from "react";
import { Spinner } from "../../../src/components/_08-loading/Spinner";
import figma from "@figma/code-connect";

figma.connect(
  Spinner,
  "https://www.figma.com/design/3DW5ortH1T3WgHePqou4RY/NUDS-V5?node-id=123-413&t=Z56zjxz3GSyTpBhU-4",
  {
    props: {},
    example: (props) => <Spinner />,
  }
);
