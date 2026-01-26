import React from "react";
import { IconButton } from "../../../src/components/_01-action/IconButton";
import figma from "@figma/code-connect";

figma.connect(
  IconButton,
  "https://www.figma.com/design/3DW5ortH1T3WgHePqou4RY/NUDS-V5?node-id=89-599&t=Z56zjxz3GSyTpBhU-4",
  {
    props: {
      size: figma.enum("size", {
        s: "s",
        m: "m",
      }),
      isLoading: figma.enum("isLoading", {
        false: false,
        true: true,
      }),
    },
    example: (props) => (
      <IconButton
        id={"id"}
        size={props.size}
        icon={"icon_name"}
        isLoading={props.isLoading}
      />
    ),
  }
);
