import React from "react";
import { ErrorText } from "../../../src/components/_00-common/ErrorText";
import figma from "@figma/code-connect";

figma.connect(
  ErrorText,
  "https://www.figma.com/design/3DW5ortH1T3WgHePqou4RY/NUDS-V5?node-id=47-117&t=Z56zjxz3GSyTpBhU-4",
  {
    props: {
      text: figma.string("text"),
    },
    example: (props) => <ErrorText text={props.text} />,
  }
);
