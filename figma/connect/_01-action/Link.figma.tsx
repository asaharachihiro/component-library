import React from "react";
import { Link } from "../../../src/components/_01-action/Link";
import figma from "@figma/code-connect";

figma.connect(
  Link,
  "https://www.figma.com/design/3DW5ortH1T3WgHePqou4RY/NUDS-V5?node-id=36-1234&t=Z56zjxz3GSyTpBhU-4",
  {
    props: {
      label: figma.string("label"),
      disabled: figma.string("disabled"),
      target: figma.string("target"),
    },
    example: (props: any) => {
      return (
        <Link
          label={props.label}
          disabled={props.disabled}
          target={props.target}
        />
      );
    },
  }
);
